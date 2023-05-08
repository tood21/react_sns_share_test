import React from 'react';
import {Helmet} from "react-helmet";

const Sub = () => {
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
                <title>서브페이지</title>
                <meta
                    property="og:url"
                    content="https://devshowroom.hyphen.im/medicalrecordsearch"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="서브페이지 타이틀" />
                <meta property="og:description" content="Your description" />
                <meta
                    property="og:image"
                    content="https://hyphen.im/assets/images/common/og_image.jpeg"
                />
            </Helmet>
            <h1>서브페이지</h1>
            <button onClick={shareFacebook} type={"button"}>페이스북</button>
            <button type={"button"}>트위터</button>
        </div>
    );
};

export default Sub;
