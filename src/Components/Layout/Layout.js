import React from 'react';
import Auxx from '../../hoc/Auxx';
import Layout from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
//It's Should hold the Toolbar, SideDrawer, Backdrop
const layout = (props) => (
    <Auxx>
        
        <Toolbar/>

        <main className = 'Content'>
            {props.children}
        </main>
    </Auxx>
);

export default layout;