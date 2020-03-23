import React from "react";
import styles from "./Users.module.css"

let Users = (props) => {
   if(props.users.length ===0) {
       props.setUsers(
           [
               {
                   id: 1,
                   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
                   followed: false,
                   fullName: 'Kuryk I',
                   status: 'i\'m the BOSS',
                   location: {city: 'Lviv', country: 'Ukraine'}
               },
               {
                   id: 2,
                   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
                   followed: true,
                   fullName: 'Valera K',
                   status: 'bulbash',
                   location: {city: 'Grodno', country: 'Belarus'}
               },
               {
                   id: 3,
                   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
                   followed: true, fullName: 'John D', status: 'alloha', location: {city: 'New Jersey', country: 'USA'}
               },
               {
                   id: 4,
                   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYB8IN95NZc06zS99Uk5JbVuqxS31XZn6Fxw6bmPR3Ma2_GJtQ',
                   followed: false,
                   fullName: 'Dolph S',
                   status: 'guten Tag',
                   location: {city: 'Bonn', country: 'Germany'}
               },
           ]
       );
   };
    return <div>
        {
            props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.userPhoto}/>
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
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
};
export default Users;