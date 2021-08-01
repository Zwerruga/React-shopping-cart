import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";

import { ADD_TO_CART } from '../../redux/actions/cartActions'
import { productStore } from '../../productStore'
import QuantitySelector from '../QuantitySelector';


export default function ProductScreen() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const currentProduct = productStore.find(({id:productId})=> +productId === +id)
    const [quantitySelectorValue, setQuantitySelectorValue] = React.useState(1);
    const handleChange = (event) => {
        setQuantitySelectorValue(event.target.value);
    };

    return (
        <div className='flex-container'>

            <div className='flex-container wrap'>
                <img src={currentProduct.img} alt={currentProduct.title}/>
                <div className='flex-container wrap' >
                    <QuantitySelector 
                    value={quantitySelectorValue} 
                    handleChange={handleChange}
                    />
                    <div 
                        style={{margin: '0 10px'}}
                        onClick={dispatch.bind(
                            this, 
                            { 
                                type: ADD_TO_CART, 
                                payload: {id, quantity: quantitySelectorValue
                            } }
                            )}
                        >
                        <Button variant="contained" color="primary">
                            Add
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex-container wrap'>
                <Typography variant="h6" gutterBottom>
                    {currentProduct.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {currentProduct.description}
                </Typography>   
            </div>

        </div>
    )
}
