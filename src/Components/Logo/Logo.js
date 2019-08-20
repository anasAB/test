import React from 'react'
import burgerLogo from '../../assets/imges/burger-logo.png'
import logoStyle from './Logo.css'
const logo = () =>(
    <div className="Logo" >
        <img src={burgerLogo} alt='log'/>
    </div>
);

export default logo;