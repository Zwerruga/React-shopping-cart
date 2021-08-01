import React from 'react'
import { useSelector } from 'react-redux'

import ProductLineView from './ProductLineView'
import { productStore } from '../../productStore'

export default function CartScreen() {
    const state = useSelector((state) => state)

    return (
        <>
            {state.map(({id, quantity}) => {
                const selectedProduct = productStore.find(({id: productId}) => +productId === +id)
                return (
                    <ProductLineView
                        key={id}
                        id={id}
                        quantity={quantity}
                        img={selectedProduct.img}
                        title={selectedProduct.title}
                        price={selectedProduct.price}
                    />
                )
            })}
            
        </>
    )
}
