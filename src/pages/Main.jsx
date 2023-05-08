import React from 'react';
import {Helmet} from "react-helmet";

const Main = () => {
    const currentUrl = window.location.href;


    const shareFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
            )}`,
            'facebook-share-dialog',
            'width=626,height=436'
        );
    };
    return (
        <div>
            <Helmet>
                <title>메인페이지</title>
            </Helmet>
            <h1>메인페이지</h1>
            <button onClick={shareFacebook} type={"button"}>페이스북</button>
            <button type={"button"}>트위터</button>
        </div>
    );
};

export default Main;
