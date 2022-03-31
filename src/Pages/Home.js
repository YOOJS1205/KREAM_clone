import React from 'react';
import Top from '../components/Top';
import Bottom from '../components/Bottom';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList';
import More from '../components/Home/More';
import ProductTitle from '../components/Home/ProductTitle';
import StyleSlide from '../components/Home/StyleSlide';
import FixedBanner from '../components/Home/FixedBanner';
import Brand from '../components/Home/Brand';

const Home = () => {
    return (
        <div>
            <Top />
            <Banner />
            <ProductTitle en='New In' ko='신규 등록 상품' />
            <ProductList />
            <More />
            <FixedBanner src='/images/Banner2.jpg' />
            <ProductTitle en='Most Popular' ko='인기 상품' />
            <ProductList />
            <More />
            <div className="Style-picks-title">Style Picks!</div>
            <StyleSlide />
            <ProductTitle en='Brand Focus' ko='모두가 좋아하는 브랜드' />
            <Brand />
            <FixedBanner src='/images/Banner3.png' />
            <ProductTitle en='Just Dropped' ko='발매 상품' />
            <ProductList />
            <More />
            <FixedBanner src='/images/Banner.jpg' />
            <ProductTitle en='Mini Bag Collection' ko='가볍게 툭, 데일리 미니백' />
            <ProductList />
            <More />
            <div className="Style-picks-title">#데일리룩</div>
            <StyleSlide />
            <FixedBanner src='/images/Banner4.png' />
            <ProductTitle en='Bomber or Varsity' ko='미리 준비하는 간절기 아우터' />
            <ProductList />
            <More />
            <Bottom />
        </div>
    )
}

export default Home;