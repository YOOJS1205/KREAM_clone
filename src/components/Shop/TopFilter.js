import React from 'react';
import { BsFilterLeft } from 'react-icons/bs';

const TopFilter = () => {
    return (
        <div className='Top-filter'>
            <div className='Top-filter-title'>SHOP</div>
            <div className='Top-filter-categories'>
                <div><a href='!#'><BsFilterLeft /></a></div>
                <div><a href='!#'>럭셔리</a></div>
                <div><a href='!#'>스니커즈</a></div>
                <div><a href='!#'>의류</a></div>
                <div><a href='!#'>패션 잡화</a></div>
                <div><a href='!#'>라이프</a></div>
                <div><a href='!#'>테크</a></div>
            </div>
        </div>
    );
}

export default TopFilter;