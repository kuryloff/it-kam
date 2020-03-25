import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
        <span>
            <div>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
                {user.followed
                    ? <button onClick={() => {
                        props.unfollow(user.id)
                    }}>UNFOLLOW</button>
                    : <button onClick={() => {
                        props.follow(user.id)
                    }}>FOLLOW</button>}
            </div>
        </span>
                <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </span>
            </div>)
        }
    </div>
}


export default Users;