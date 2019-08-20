import React from 'react';
import BuildControl from './BuildControl.css';

const buildControl = (props) => (


    <div className='BuildControl'>

        <div className='Label'>{props.label}</div>

        <button className='Less' onClick={props.remove} disabled={props.disabled}>Less</button>

        <button className='More' onClick={props.added} disabled={props.disabledadd}>More</button>

    </div>
);

export default buildControl;