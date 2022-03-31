import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Filter = ({main, sub}) => {
    const [open, setOpen] = useState(false);

    const onClick = () => setOpen((current) => !current);
    return (
        <div className='filter_title' onClick={onClick}
             style={open ? {height: '180px'} : {height: '41px'}}>
            <div className='filter_title-category'>
                <div className='title_box'>
                    <div className='title_box-main'>{main}</div>
                    <div className={open ? 'title_box hidden' : 'title_box-sub'}>{sub}</div>
                </div>
                <div className='title_icon'>{open ? <AiOutlineMinus/ > : <AiOutlinePlus />}</div>
            </div>
            <div className={open ? 'title_box-list' : 'title_box-list hidden'}>
                <ul>
                    <li><input type='checkbox'></input>스니커즈</li>
                    <li><input type='checkbox'></input>의류</li>
                    <li><input type='checkbox'></input>패션잡화</li>
                    <li><input type='checkbox'></input>라이프</li>
                    <li><input type='checkbox'></input>테크</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;