import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/actions/cartActions'
import QuantitySelector from '../QuantitySelector';


export default function ProductLineView({id, title, price, img, quantity}) {
    const [value, setValue] = React.useState(quantity);
    const handleChange = (event) => {
        const newValue = event.target.value
        setValue(newValue);
        dispatch({ type: ADD_TO_CART, payload: {id, quantity: newValue}})
    };
    const dispatch = useDispatch()
    return (
            <Paper elevation={3}>
                <div className="flex-container jc-sp-bt mr-bt-5">
                    <div className="flex-container jc-f-st wrap ">
                        <div className="flex-container">
                        <img src={img} alt={title} style={{height: '200px'}}/>
                        </div>
                        <div className="flex-container">
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                        </div>
                    </div>
                    <div className="flex-container jc-sp-ar wrap">
                        <QuantitySelector 
                            value={value} 
                            handleChange={handleChange}
                        />
                        <Typography gutterBottom variant="h6" component="h2">
                            <p className="flex-container">Cost: $ {quantity * price}</p>
                        </Typography>
                        <div onClick={dispatch.bind(
                            this, 
                            { type: REMOVE_FROM_CART, payload: {id}}
                            )}>
                        <IconButton edge="start">
                            <DeleteIcon/>
                        </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
    )
}
