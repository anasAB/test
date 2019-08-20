import React from 'react';
import BuildControls from './BuildControls.css';
import BuildContorl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },


];

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed()}</strong></p>
        {controls.map(ctrl => (<BuildContorl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled={props.disabledless[ctrl.type]}
            disabledadd={props.disabledadd[ctrl.type]}
            piece={props.purchasable}
        />
        ))}
        <button className='OrderButton'
            disabled={!props.purchasable}
            onClick={props.purchasing}>Order Now</button>
    </div>
);

export default buildControls;