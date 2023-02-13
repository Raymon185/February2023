import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postAvatar}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="" />
            </div>
            <div className={classes.postText}>{props.text}</div>
        </div>
    )
};

export default Post;