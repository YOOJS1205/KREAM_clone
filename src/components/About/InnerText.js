import React from 'react';

const InnerText = () => {
    return (
        <div className="inner_text">
            <div className="inner_text-title">
                <h2>KICKS</h2>
                <h2>RULE</h2>
                <h2>EVERYTHING</h2>
                <h2>AROUND</h2>
                <h2>ME</h2>
            </div>
            <div className="inner_text-main">
                한정판 거래의 FLEX
            </div>
            <div className="inner_text-sub">
                한정판을 거래하는 가장 확실한 방법
            </div>
            <div className="inner_text-download">
                <div className="inner_text-app">
                    <a className="apple" href="!#"><i className="fa-brands fa-apple fa-lg"></i>App Store</a>
                </div>
                <div className="inner_text-app">
                    <a className="android" href="!#"><i className="fa-brands fa-google-play fa-lg"></i>Google Play</a>
                </div>
            </div>
        </div>
    )
}

export default InnerText;