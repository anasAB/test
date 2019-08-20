import React from 'react';
import B from './B.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //I will recive the Ingrd.. as Object then Transfer it into Array 
    //I will Use Object which will extract the Keys of a given Object and the Values are not Part of the Array
    //Map will excute a fucntion on each elimint in the Array

    //igKey will be the Object & props.ingredients[igkey] will be the Amount or Value &&
    let transforIngredients = Object.keys(props.ingredients)
    .map(igKey => {return [...Array(props.ingredients[igKey])].map((_,i) => {
        console.log("TransferIngredients", transforIngredients);
        console.log("IGKEYS:",igKey);
        console.log("XXX",props.ingredients[igKey],"II",i);
        

        return <BurgerIngredient key={igKey + 1} type={igKey} />;

    });//Reduce function recive Two Argument err: Previous Value && el: The Curent Value 
    }).reduce ((arr,el) => {
        console.log("PreviousVAlue:",arr,"CurentValue:",el);
        return arr.concat(el)
    }, [] );
    console.log("TransferIngredients", transforIngredients);


    if (transforIngredients.length===0) {
        transforIngredients = <p>Select</p>;
    }
    return (
        <div className='B' >
            <BurgerIngredient type="bread-top" />
                {transforIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;