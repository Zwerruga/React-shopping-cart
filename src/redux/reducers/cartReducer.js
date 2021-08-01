import {
    ADD_TO_CART, 
    REMOVE_FROM_CART
} from '../actions/cartActions'

function cartReducer(
    state = JSON.parse(localStorage.getItem("state")) || [], 
    action
    ) {
    const item = action.payload
    const isIdPropertyEqual = (firstObject, secondObject) => firstObject.id === secondObject.id
    const swapProducts = (replacementItem) => 
        state.map((product) => isIdPropertyEqual(product, replacementItem) ? replacementItem : product)

    if (action.type === ADD_TO_CART) {
        return state.find((product) => isIdPropertyEqual(product, item)) ?
        swapProducts(item) :
        [...state, item]

    } else if (action.type === REMOVE_FROM_CART) {
        return state.filter((product) => !isIdPropertyEqual(product, item))

    } else { 
        return state
    }
}

export default cartReducer
