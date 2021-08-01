import React from 'react'
import { useHistory } from "react-router-dom";

import { productStore } from '../../productStore'
import ProductCard from './ProductCard';

export default function ShopScreen() {
    const history = useHistory();
    const onClickCard = (id) => history.push(`/product/${id}`) 

    return (
        <div className="flex-container wrap">
            {productStore.map((p) => 
                <ProductCard 
                    key={p.id}
                    title={p.title}
                    price={p.price}
                    img={p.img}
                    onClick={onClickCard.bind(this, p.id)}
                />
            )}
        </div>
    )
}
