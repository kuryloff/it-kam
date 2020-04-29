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
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);

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

// let mapStateToProps = (state) => {
//     return {
//         isAuth: state.auth.isAuth,
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// };

let mapStateToProps = (state) => {

    return {
        isAuth: getAuth(state),
        users: getUsersSelector(state),
        // users: getUsers(state),
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
    }))(UsersContainer)