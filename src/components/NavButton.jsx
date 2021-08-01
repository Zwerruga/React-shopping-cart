import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        textDecoration: 'none'
    },
});

export default function NavButton({to='/', title='Home'}) {
    const classes = useStyles();

    return (
        <NavLink to={to} className={classes.root}>
            <IconButton edge="start" color="inherit" aria-label="menu">
                {title}
            </IconButton>
        </NavLink>
    )
}

NavButton.propTypes = {
    to: PropTypes.string,
    title: PropTypes.element,
  };

