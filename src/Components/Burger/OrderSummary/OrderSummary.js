import React from 'react';
import Auxx from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'
const ordersummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingkey => {
            return (
                <li key={ingkey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingkey}:{props.ingredients[ingkey]}</span>
                </li>
                )
        })
    return (
        <Auxx>
            <h3>Your Order</h3>
            <p>Burger with the Following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p>The Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxx>

    )
}

export default ordersummary;