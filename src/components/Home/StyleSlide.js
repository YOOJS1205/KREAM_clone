import React from 'react';

const StyleSlide = ({src}) => {
    const srcAry = ['/images/Styles/Style1.jpeg', '/images/Styles/Style2.jpeg', '/images/Styles/Style3.jpeg'
                    , '/images/Styles/Style4.jpeg', '/images/Styles/Style5.jpeg']
    
    const picture = srcAry.map((item, index) => 
    <li>
        <div key={index} className='Style-picks-picture'>
            <img src={item} alt='StyleLook' />
        </div>
    </li>)
    return (
        <div className="Style-picks-slide">
            <ul>{picture}</ul>
        </div>
    )
}

export default StyleSlide;