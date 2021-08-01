import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

import NavButton from './NavButton'

export default function Header() {
    return (
        <header className="mr-bt-5">
        <AppBar position="static">
        <Toolbar>
            <div className='flex-container jc-sp-bt'>    
                <div className='flex-container'>
                    <StorefrontIcon />
                    <Typography variant="h4">
                        &nbsp;OUR SHOP
                    </Typography>
                </div>

                <div className='flex-container jc-f-end wrap'>
                    <NavButton to={"/store"} title={<ShoppingCartIcon/>}/>
                    <NavButton to={"/"} title={[<StoreIcon/>,'Store']}/>
                </div>
            </div>
        </Toolbar>
        </AppBar>
        </header>
    )
}
