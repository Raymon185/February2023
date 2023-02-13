import React from "react";
import classes from './Profile.module.css';
import Cover from "./Cover/Cover";
import Description from "./PersonalData/PersonalData";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <Cover />
            <Description />
            <MyPosts />
        </div>
    )
};

export default Profile;