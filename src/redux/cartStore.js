import { createStore } from 'redux'

import cartReducer from './reducers/cartReducer'

export const cartStore = createStore(cartReducer)

cartStore.subscribe(() => 
localStorage.setItem('state', JSON.stringify(cartStore.getState())))
