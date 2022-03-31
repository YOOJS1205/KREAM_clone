import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    max-width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    margin-top: 60px;
    height: 43px;
`

const En = styled.div`
    width: 100%;
    height: 24px;
    font-size: 20px;
    font-weight: 600;
`

const Ko = styled.div`
    width: 100%;
    height: 19px;
    font-size: 14px;
    opacity: 0.7;
`

const ProductTitle = ({en, ko}) => {
    return (
        <Title>
            <En>{en}</En>
            <Ko>{ko}</Ko>
        </Title>
    )
}

export default ProductTitle;