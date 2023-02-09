import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2016-03/1459189308_shapki-sayta-priroda.jpg"></img>
            </div>
            <div className={classes.profileWrapper}>
                <div className={classes.profileImg}>
                    <img src="https://avatars.mds.yandex.net/i?id=f19853595ccc83851354f86dadafacfe963c4427-7760894-images-thumbs&n=13" alt="" />
                </div>
                <div className={classes.profileText}>
                    <div className={classes.profileName}>
                        Roman V.
                    </div>
                    <div className={classes.profileDescription}>
                        <div>Date of Birth: 1 January</div>
                        <div> City: Yoshkar-Ola</div>
                        <div>Education: PGTU'13</div>
                        <div>Web Site: google.com</div>
                    </div>
                </div>
            </div>


            <div>
                <div>ava+description</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                </div>
            </div>
        </div>
    )
};

export default Profile;
