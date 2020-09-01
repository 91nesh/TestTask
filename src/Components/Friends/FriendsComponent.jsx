import React from 'react';
import Header from '../Header/HeaderComponent'
import data from "../../JsonData/friends.json";
import './style.scss';

export const Friends = () => {
    return (
        <div className="friends">
            <Header/>
            <div>Friends</div>
            {
                data.map((friend) => {
                    return <div>
                                <img src={friend.image} alt="" className="profile"/>
                                <div>{friend.author} </div>
                           </div>
                })
            }
        </div>
    );
}

export default Friends;
