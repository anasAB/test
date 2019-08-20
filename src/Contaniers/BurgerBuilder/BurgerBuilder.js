import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'


const INFREDINET_PRICES = {
    salad: 5,
    cheese: 2,
    meat: 1.2,
    bacon: 3,

}
class BurgerBuilder extends Component {
    // constructor (props){
    //      super(props);
    //      this.state = {}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,

        },
        totalPrice: 4,
        totalPieces: 0,
        purchasable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        console.log(type, updatedCounted);

        const updatedUngredients = { ...this.state.ingredients };
        updatedUngredients[type] = updatedCounted;

        const priceAddition = INFREDINET_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedUngredients, totalPieces: updatedCounted });
        this.updatePurchaseState(updatedUngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateedCounted = oldCount - 1;

        const updateUngredients = { ...this.state.ingredients };
        updateUngredients[type] = updateedCounted;

        const priceDeduction = INFREDINET_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredients: updateUngredients, totalPieces: updateedCounted[type] });
        this.updatePurchaseState(updateUngredients);
    }

    // Enable and DisEnable Order Now Button
    updatePurchaseState(ingredients) {
        //const ingredientss = {...this.state.ingredients};
        const sum = Object.keys(ingredients).map(ingkey => {
            return ingredients[ingkey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({ purchasable: sum > 0 });//Sum >0 it's will give me a true or false
    }

    //Toggel the Modal method
    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    ClosedModalHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContiueHandler = () =>{
        alert("Continue");
    }


    render() {
        //Disable the Less Button
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //Disable the More Button 
        const disabledadd = { ...this.state.ingredients };
        for (let key in disabledadd) {
            disabledadd[key] = disabledadd[key] >= 3
        }


        return (
            <Auxx>
                <Modal show={this.state.purchasing}
                    modalClosed={this.ClosedModalHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseContinued={this.purchaseContiueHandler} 
                    purchaseCancelled={this.ClosedModalHandler}
                    price={this.state.totalPrice}

                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabledless={disabledInfo}
                    disabledadd={disabledadd}//Disabled More Button
                    price={this.state.totalPrice}
                    pieces={this.state.totalPieces}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchasingHandler}//Hiding the Modal
                    
              />
            </Auxx>
        );
    }
}

export default BurgerBuilder;