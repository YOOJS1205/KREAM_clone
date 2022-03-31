import React from 'react';
import dummy from './SearchList.json';

const SearchList = () => {
    return (
        <div className='search_result-list'>
            {dummy.SearchList_1.map((item) => (
                <div className='search_result-item'>
                    <div key={dummy.index} className='item_picture'>
                        <img src={item.src} alt='product' />
                    </div>
                    <div className='item_title'>
                        <div key={dummy.index} className='item_title-company'>{item.company}</div>
                        <div key={dummy.index} className='item_title-info-en'>{item.en}</div>
                        <div key={dummy.index} className='item_title-info-ko'>{item.ko}</div>
                    </div>
                    <div className='item_price'>
                        <div key={dummy.index} className='item_price-info'>{item.price}</div>
                        <div key={dummy.index} className='item_price-explain'>{item.bottom}</div>
                    </div>
                    <div className='delivery_icon'></div>
                    <div className='interest'></div>
                </div>
            )
                
            )}
        </div>
    )
}

export default SearchList;