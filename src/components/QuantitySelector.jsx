import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    form: {
        margin: '5px'
    }
  });

export default function QuantitySelector({
    value=0, 
    handleChange, 
    max=10
}) {
    const classes = useStyles();

    max = max > value ? max : value
    
    return (
        <FormControl className={classes.formControl}>
            <Select
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            >
            {Array.from(Array(max)).map((x, i) => <MenuItem key={i} value={i+1}>{i+1}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

QuantitySelector.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    max: PropTypes.number
  };