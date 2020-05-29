import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    movie: {
        width: '28%',
        minWidth: '150px',
        border: '1px solid #000',
        borderRadius: '5px',
        margin: 'auto auto 60px',
        textAlign: 'center',
        backgroundColor: '#3f51b5'
    },
    background: {
        backgroundImage: 'linear-gradient(-45deg,#e6f9ff,#004e66)'
    }
});

const Movie = (props: any) => {

    const classes = useStyles();
    return (
        <div className={classes.background}>
            <NavPanel />
              <div className={classes.movie}>
                <h1>{props.match.params.title}</h1>
            </div>)
        </div>
    );
};

export default Movie;