import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        (
            <div className={classes.myPosts}>
                <div>My Posts</div>
                <textarea className={classes.textarea}></textarea>
                <div className={classes.buttonPosts}>
                    <button>Send</button>
                </div>
                <div className={classes.Posts}>
                    <Post text='Hy, my first name is Roma' />
                    <Post text='My last name is Volkov' />
                    <Post text='I am a engeneer' />
                    <Post text='I am from Y-Ola' />
                </div>
            </div>
        )
    )
};

export default MyPosts;