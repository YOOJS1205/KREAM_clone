import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            navigate('/shop');
        }
    }

    return (
        <div className='search hidden'>
            <div className="search_container">
                <div className="search_container-wrap">
                    <div className="search_engine">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input onKeyPress={onKeyPress}
                         type="text" placeholder="브랜드명, 모델명, 모델번호 등" />
                    </div>
                    <button type="button"
                    >취소</button>
                </div>
            </div>
            <div className="search_recent">
                <div className="search_recent-title">최근 검색어</div>
            </div>
            <div className="search_brand"></div>
        </div>
    )
}

export default SearchBar;