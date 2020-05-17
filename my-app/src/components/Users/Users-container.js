import React from "react";
import {connect} from "react-redux";
import {
    follow, followSuccess, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users"
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAuth,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
      const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const pageSize = this.props.pageSize;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);

    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   isAuth={this.props.isAuth}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress = {this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        isAuth: getAuth(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default compose(
    connect(mapStateToProps, {
        followSuccess, unfollowSuccess, setCurrentPage,
        toggleFollowingProgress,
        requestUsers, follow, unfollow
    }))(AuthRedirectComponent)