import React from 'react';
import dummy from './ProductList.json';

const ProductList = ({dataSet}) => {
    return (
        <div id='product_lists'>
            {dummy.ProductList_1.map((item) => (
                <div className='Product-list'>
                    <div key={dummy.index} className="Product-list-picture">
                        <img src={item.src} alt='Product' />
                    </div>
                    <div key={dummy.index} className="Product-list-brand">{item.brand}</div>
                    <div key={dummy.index} className="Product-list-name">{item.name}</div>
                    <div key={dummy.index} className="Product-list-price">{item.price}</div>
                    <div key={dummy.index} className="Product-list-bottom">{item.bottom}</div>
                </div>))}
        </div>
    )
            }

export default ProductList;