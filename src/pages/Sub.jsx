import React from 'react';
import {Helmet} from "react-helmet";
import {useSearchParams} from "react-router-dom";

const Sub = () => {
    const [searchParams] = useSearchParams();
    const currentUrl = window.location.href;
    console.log(searchParams.get('sort'));

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
        let title = '서브페이지 타이틀';
        window.open(
            `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            'twitter-share',
            'width=400, height=400'
        );
    };

    const data = {
        url: currentUrl,
        title: searchParams.get('sort'),
        imgUrl: "https://hyphen.im/assets/images/common/og_image.jpeg"
    }
    return (
        <div>
            <Helmet>
                <title>서브페이지</title>
                <meta
                    property="og:url"
                    content={currentUrl}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="서브 페이지" />
                <meta property="og:description" content="서브 페이지 설명" />
                <meta
                    property="og:image"
                    content={data.imgUrl}
                />
            </Helmet>
            <h1>서브페이지</h1>
            <button onClick={shareFacebook} type={"button"}>페이스북</button>
            <button onClick={shareTwitter} type={"button"}>트위터</button>
        </div>
    );
};

export default Sub;
