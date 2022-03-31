import React from 'react';

const Trend = () => {
    const items = [['샤넬', '/images/items/Jordan.png'], ['에어포스', '/images/items/AirForce.png'], ['에르메스', '/images/items/Hermes.png'],
                ['덩크', '/images/items/Dunk.png'], ['미니백', '/images/items/Louis.png'], ['롤렉스', '/images/items/Rolex.png'], ['스톤 아일랜드', '/images/items/Stone.png'],
                ['몽클레르', '/images/items/Moncler.png'], ['셀린느', '/images/items/Celine.png']]
    const itemList = items.map(item => 
    <li>
        <div className='brand_box'>
            <div className='brand_img'><img src={item[1]} alt='item_list' /></div>
            <div className='brand_name'>{item[0]}</div>
        </div>
    </li>
    )
    return (
        <div id='search_trend_container'>
            <ul>{itemList}</ul>
        </div>
    )
}

export default Trend;