import React from 'react';
import { Drawer} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
    },
    link: {
        color: 'red',
        fontFamily: 'helvetica',
        textDecoration: 'none',
        textTransform: 'uppercase',
        "&:hover": {
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        "&:active": {
            color: 'black'
        },
    },
    ul: {
        listStyle: 'none',
        margin: '0px',
        padding: '0px',
    },
    icon: {
        margin: '5px'
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
    onClick: () => void

}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen, onClick }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();
    const redirectTo = (path: string, name: string) => <div className={classes.link} onClick={() => history.push(path)}>{name}</div>;
    return (
        <div>
            <Drawer
                onClick={() => onClick()}
                open={isOpen || shouldBeOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={classes.drawerContent}>
                    <ul className={classes.ul}>
                        <li><HomeIcon className={classes.icon}></HomeIcon>{redirectTo('/', 'Home')}</li>
                        <li><MovieIcon className={classes.icon}>add_circle</MovieIcon>{redirectTo('/movie', 'Movie')}</li>
                        <li><SearchIcon className={classes.icon}>add_circle</SearchIcon>{redirectTo('/search', 'Search Movie')}</li>
                    </ul>
                </div>
             </Drawer>
        </div>
    );
};

export default DrawerComponent;
