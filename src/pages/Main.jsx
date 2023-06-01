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

    const shareTwitter = () => {
        let url = encodeURIComponent(currentUrl);
        let title = '메인페이지 타이틀';
        window.open(
            `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            'twitter-share',
            'width=400, height=400'
        );
    };
    return (
        <div>
            <Helmet>
                <title>메인페이지</title>
                <meta
                    property="og:url"
                    content="https://devshowroom.hyphen.im/medicalrecordsearch"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="메인 타이틀 변경 1" />
                <meta property="og:description" content="메인 설명 변경 1" />
                <meta
                    property="og:image"
                    content="https://hyphen.im/assets/images/common/og_image.jpeg"
                />
                <meta name="twitter:title" content="메인 트위터 타이틀" />
                <meta name="twitter:description" content="메인 트위터 설명" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://hyphen.im/" />
                <meta
                    name="twitter:image"
                    content="https://hyphen.im/assets/images/common/og_image.jpeg"
                />
            </Helmet>
            <h1>메인페이지</h1>
            <button onClick={shareFacebook} type={"button"}>페이스북</button>
            <button onClick={shareTwitter}  type={"button"}>트위터</button>

        </div>
    );
};

export default Main;
