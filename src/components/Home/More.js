import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 42px;
    display: flex;
    justify-content: center;
    margin: 75px 0 40px 0;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

const Button = styled.button`
    line-height: 42px;
    border-radius: 10px;
    width: 100px;
    height: 100%;
    border: 1px solid grey;
    background: white;
    font-size: 14px;
    text-align: center;
    display: block;
    text-decoration: none;
`

const More = () => {
    return (
        <Div>
            <div className="More-button-detail">
                <Button>더보기</Button>
            </div>
        </Div>
    )
}

export default More;