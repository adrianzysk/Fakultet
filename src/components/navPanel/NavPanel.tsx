import React from 'react';
import MenuBar from '../menuBar/MenuBar';
import DrawerComponent from '../drawerComponent/DrawerComponent'


const NavPanel = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            <MenuBar onIconClick={() => setDrawerOpen(true)} />
            <DrawerComponent shouldBeOpen={drawerOpen} onClick={() => setDrawerOpen(false)} />
        </>
    );
}

export default NavPanel;