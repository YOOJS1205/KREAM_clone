import React from 'react';

const FixedBanner = ({src}) => {
    return (
        <div className="main_1-fixed">
            <div className='Fixed_banner'>
                <img src={src} alt='banner' />
            </div>
        </div>
    )
}

export default FixedBanner;