import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { makeStyles } from '@material-ui/core/styles';
import { useService } from '../../hooks/useService';
import { TodoService } from '../../services/todo.service';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todos.selectors';

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
    img: {
        width: '95%'
    },
    background: {
        backgroundImage: 'linear-gradient(-45deg,#e6f9ff,#004e66)'
    }
});


const SavedMovies = () => {
    const classes = useStyles();
    const todoService = useService(TodoService);
    const todos = useSelector(todosSelector);
    return (
        <div className={classes.background}>
            <NavPanel />
            {todos.map((todo, index) => <div key={index} className={classes.movie}>                  
                <h1>{todo.title}</h1>
                <h1>{todo.year}</h1>
                <img className={classes.img} src={todo.poster}
                    alt={todo.title} />
                <button onClick={() => todoService.deleteTodo({ done: false, title: todo.title, poster: todo.poster, year: todo.year, id: todo.id })}>Usun</button>
            </div>)}
        </div>
    );
};

export default SavedMovies;