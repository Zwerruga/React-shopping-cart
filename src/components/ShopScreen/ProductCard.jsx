import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
      width: 250,
      margin: '10px'
    },
    media: {
      height: 140,
    },
  });

export default function ProductCard({
    img='', 
    title='', 
    price='', 
    onClick= ()=> null,
}) {
    const classes = useStyles();

    return (
        <div onClick={onClick}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}  $ {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, 
    onClick: PropTypes.func,
  };
