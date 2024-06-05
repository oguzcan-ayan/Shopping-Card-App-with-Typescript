import React from "react";
import CardItem from "../CardItem/CardItem";

//styles
import { Wrapper } from "./Card.styles";

//types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotalPrice = (items: CartItemType[]) => {
       return items.reduce((acc: number, item) => acc + (item.amount * item.price), 0);
    }

    return (
        <Wrapper>
            <h2>Your Shopping Card</h2>
            {cartItems.length === 0 ? <p>No items in the card.</p> : null}
            {cartItems.map(item => (
                <CardItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total Price: ${calculateTotalPrice(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;
