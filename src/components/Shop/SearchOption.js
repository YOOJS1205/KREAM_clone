import React from 'react';
import { FaBolt } from 'react-icons/fa';

const SearchOption = () => {
    return (
        <div id="search_option">
            <div id="search_option-fast">
                <a href="!#"><FaBolt />빠른배송</a>
            </div>
            <div id="search_option-popular">
                <button type="button">인기순</button>
            </div>
        </div>
    )
}

export default SearchOption;