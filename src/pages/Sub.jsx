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
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content="Your description" />
                <meta
                    property="og:image"
                    content={data.imgUrl}
                />
            </Helmet>
            <h1>서브페이지</h1>
            <button onClick={shareFacebook} type={"button"}>페이스북</button>
            <button type={"button"}>트위터</button>
        </div>
    );
};

export default Sub;
