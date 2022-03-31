import React from 'react';
import Bottom from '../components/Bottom';
import ShopBanner from '../components/Shop/ShopBanner';
import Trend from '../components/Shop/Trend';
import Filter from '../components/Shop/Filter';
import SearchOption from '../components/Shop/SearchOption';
import SearchList from '../components/Shop/SearchList';
import Top from '../components/Top';
import TopFilter from '../components/Shop/TopFilter';

const Shop = () => {
    return (
        <div>
            <Top></Top>
            <TopFilter></TopFilter>
            <Trend></Trend>
            <ShopBanner></ShopBanner>
            <div id='content'>
                <div id='filter'>
                    <Filter main='카테고리' sub='모든 카테고리'></Filter>
                    <Filter main='브랜드' sub='모든 브랜드'></Filter>
                    <Filter main='성별' sub='모든 성별'></Filter>
                    <Filter main='컬렉션' sub='모든 컬렉션'></Filter>
                    <Filter main='스니커즈 사이즈' sub='모든 사이즈'></Filter>
                    <Filter main='의류 사이즈' sub='모든 사이즈'></Filter>
                    <Filter main='가격' sub='모든 가격'></Filter>
                </div>
                <div id='list'>
                    <SearchOption></SearchOption>
                    <div id='search_result'>
                        <SearchList />
                        <SearchList />
                        <SearchList />
                        <SearchList />
                        <SearchList />
                        <SearchList />
                    </div>
                </div>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default Shop;