import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import { DebounceInput } from 'react-debounce-input';

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
    input: {
        textAlign: 'center',
    },
    in: {
        textAlign: 'center',
        margin: '20px',
    },
    img: {
        width: '95%'
    },
    background: {
        backgroundImage: 'linear-gradient(-45deg,#e6f9ff,#004e66)'
    }
});


const SearchMovie = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


    return (
        <div className={classes.background}>
          <NavPanel />
          <div className={classes.in}>
          <DebounceInput
              className={classes.input}
              debounceTimeout={1000}
              placeholder="Enter movie name"
              onChange={event => setMovieToSearch(event.target.value)}
              />
          </div>
            {!!movies?.movies.length &&
              movies?.movies.map(movie => (
                  <div key={movie.id} className={classes.movie}>
                  <h1>{movie.title}</h1>
                      <h1>{movie.year}</h1>
                      <img className={classes.img} src={movie.poster}
                       alt={movie.title}/>        
              </div>
            ))
            }
    </div>
  );
};

export default SearchMovie;
