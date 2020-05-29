import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import {useParams} from "react-router-dom";

const Movie = () => {
    let { id } = useParams();
    return (
        <div>
            <NavPanel />
            <h1>{id}</h1>
        </div>
    );
};

export default Movie;