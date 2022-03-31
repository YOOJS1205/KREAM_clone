import React from 'react';

const Bottom = () => {
    return (
        <div className="footer">
            <div className="banner_box">
                <div className="banner">
                    <div className="banner_info">
                        <div className="banner_title">SERVICE GUIDE</div>
                        <div className="banner_detail">KREAM은 처음이지?<br />서비스 소개를 확인해보세요.</div>
                        <div className="banner_icon"></div>
                    </div>
                    <div className="banner_img">
                        <a href="!#"><img src="https://kream.co.kr/_nuxt/img/home_banner_bottom1.79549cb.png" alt='bottom_banner1' /></a>
                    </div>
                </div>
                <div className="banner">
                    <div className="banner_info">
                        <div className="banner_title">DOWNLOAD THE APP</div>
                        <div className="banner_detail">KREAM 앱을 설치하여<br />한정판 스니커즈를 FLEX 하세요!</div>
                        <div className="banner_icon"></div>
                    </div>
                    <div className="banner_img">
                        <a href="!#"><img src="https://kream.co.kr/_nuxt/img/home_banner_bottom2.0077547.png" alt='bottom_banner2' /></a>
                    </div>
                </div>
            </div>
            <div className="footer_info">
                <div className="menu_guide">
                    <div className="menu_box">
                        <div className="menu_box-title">이용안내</div>
                        <ul>
                            <li>검수기준</li>
                            <li>이용정책</li>
                            <li>페널티 정책</li>
                            <li>커뮤니티 가이드라인</li>
                        </ul>
                    </div>
                    <div className="menu_box">
                        <div className="menu_box-title">고객지원</div>
                        <ul>
                            <li>공지사항</li>
                            <li>서비스 소개</li>
                            <li>쇼룸 안내</li>
                            <li>판매자 방문접수</li>
                        </ul>
                    </div>
                    <div className="customer_service">
                        <div className="customer_service-title">고객센터 1588-7813</div>
                        <div className="customer_service-time">운영시간 평일 11:00 - 18:00 (토.일, 공휴일 휴무)</div>
                        <div className="customer_service-time">점심시간 평일 13:00 - 14:00</div>
                        <div className="customer_service-notice">1:1 문의하기는 앱에서만 가능합니다.</div>
                        <div className="customer_service-btn"></div>
                    </div>
                </div>
                <div className="company_info">
                    <div className="company_info-bar">
                        <div className="company_info-bar-list">
                            <a href="!#">회사소개</a>
                            <a href="!#">인재채용</a>
                            <a href="!#">제휴제안</a>
                            <a href="!#">이용약관</a>
                            <a href="!#">개인정보처리방침</a>
                        </div>
                        <div className="company_info-bar-social">                       
                                <a href="!#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                <a href="!#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                <a href="!#"><i className="fa-solid fa-comment fa-lg"></i></a>
                        </div>
                    </div>
                    <div className="company_info-detail">
                        <div className="company_info-detail-list"></div>
                        <div className="company_info-detail-list"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom;