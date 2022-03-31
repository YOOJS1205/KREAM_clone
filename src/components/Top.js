import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const Download = styled.div`
    max-width: 767px;
    height: 70px;
    padding: 0 24px;
    display: flex;
    background: #f4f4f4;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const AppIcon = styled.div`
    width: 50px;
    height: 70px;
    position: relative;
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    background: black;
    border-radius: 10px;
    position: absolute;
    top: 20%;
`

const Text = styled.div`
    width: 210px;
    height: 70px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
    position: relative;
`;

const Button = styled.div`
    width: 440px;
    height: 70px;
    line-height: 70px;
    text-align: right;
    opacity: 0.5;
`

const Top = () => {
    const [active, setActive] = useState(false);
    const [nav, setNav] = useState(false);
    const [view, setView] = useState(false);
    const [name, setName] = useState('');
    const [downloadActive, setDownloadActive] = useState(true);


    const navigate = useNavigate();

    const onClickEvent = () => {
        setActive(!active);
    }

    const onClickMenu = () => {
        setNav((current) => !current);
    }


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            navigate('/shop');
        }
    }

    const onChangeView = e => {
        if (e.target.value.length !== 0 && e.target.value.length !== null) {
            setView(true);
        }
        else {
            setView(false);
        }
    }

    const onClickDownload = () => {
        setDownloadActive((current) => !current)
    }


    //useEffect(() => {
    //    console.log(name);
        // name 관련된 상품리스트 나타나게 만들기
    //}, [name])

    // 최근 검색어 구현 (localStorage + map + filter + json.stringify + json.parse)

    return (
            <div>
                <div className={active ? 'search' : 'search hidden'}
                    style={view ? {height: '370px'} : {height: '225px'}}>
                    <div className="search_container-wrap">
                        <div className="search_engine">
                            <input onKeyPress={onKeyPress} 
                                    value={name} onChange={onChangeView}
                                    onInput={onChangeName}
                                    type="text" placeholder="브랜드명, 모델명, 모델번호 등" />
                        </div>
                        <div className='button'>
                            <button type="button" onClick={onClickEvent}>취소</button>
                        </div>
                    </div>
                    <div className="search_recent">
                        <div className={view ? 'Brand_list hidden' : 'Brand_list'}>
                            <ul className='Brand_lists'>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/1.png' alt='brand' />
                                    </a>
                                </div>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/2.png' alt='brand' />
                                    </a>
                                </div>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/3.png' alt='brand' />
                                    </a>
                                </div>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/4.png' alt='brand' />
                                    </a>
                                </div>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/5.png' alt='brand' />
                                    </a>
                                </div>
                                <div>
                                    <a className='Brand_box' href='!#'>
                                        <img src='./images/search/6.png' alt='brand' />
                                    </a>
                                </div>
                            </ul>
                        </div>
                        <div>{name}</div>
                        <hr className={view ? '' : 'hidden'} />
                    </div>
                    <div className="search_brand">
                        <div className='current_search' onKeyPress={onKeyPress}>
                            
                        </div>
                    </div>
                </div>
                <Download className={downloadActive ? null: 'hidden'}>
                    <AppIcon><Logo></Logo></AppIcon>
                    <Text><p>한정판 거래 플랫폼, KREAM<br />앱 설치 후 사용해보세요</p></Text>
                    <Button><GrClose onClick={onClickDownload} /></Button>
                </Download>
                <div id="top">
                    <div id="main_top">
                        <nav id="main_top-gnb">
                            <div className="main_top-gnb-list"><a href="!#">고객센터</a></div>
                            <div className="main_top-gnb-list"><a href="!#">관심상품</a></div>
                            <div className="main_top-gnb-list"><a href="!#">마이페이지</a></div>
                            <div className="main_top-gnb-list"><a href="!#">로그인</a></div>
                        </nav>
                    </div>
                    <div id="main_header">
                        <div id="main_header-logo">
                            <Link to='/'><img src="/images/KREAM_logo.jpg" alt='logo of this page' /></Link>
                        </div>
                        <nav id="main_header-gnb">
                            <div className="main_header-gnb-list"><a href="!#">STYLE</a></div>
                            <div className="main_header-gnb-list"><Link to='/shop'>SHOP</Link></div>
                            <div className="main_header-gnb-list"><Link to='/about'>ABOUT</Link></div>
                        </nav>
                        <div className="main_header-icon first" onClick={onClickEvent}><GoSearch /></div>
                        <div className="main_header-icon second" onClick={onClickMenu}><AiOutlineMenu /></div>
                    </div>
                </div>
                <div className={nav ? 'navigation slide' : 'navigation hidden'}>
                    <div className='button_box'><GrClose onClick={onClickMenu} /></div>
                    <div className='navigation_menu'>STYLE</div>
                    <div className='navigation_menu'>SHOP</div>
                    <div className='navigation_menu'>자주 묻는 질문</div>
                    <div className='navigation_menu'>공지사항</div>
                    <div className='navigation_menu'>로그인</div>
                    <div className='navigation_download'>
                        <div>KREAM 앱 설치 후 사용해 보세요!</div>
                        <div><button>앱 다운로드</button></div>
                    </div>
                </div>
            </div>
    )
}

export default Top;