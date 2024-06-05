import { useState } from "react";
import { useQuery } from "react-query";

//components
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Item from "./Item/Item";
import Cart from "./Card/Card";

//styles
import { Wrapper, StyledButton } from "./App.styles";

//types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();


function App() {

  const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);
  const [cardOpen, setCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([] as CartItemType[]);

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((acc: number, item) => acc + item.amount, 0)
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCardItems(prev => {

      //  1) Is the item already added in the cart?

      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }
      
      //  2) First time the item is added

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCardItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc;
          }
          return [...acc, { ...item, amount: item.amount - 1 }];
        }
        else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return <div>Ooops! Something went wrong...</div>
  }

  return (
    <Wrapper>
      <Drawer anchor="right" open={cardOpen} onClose={() => setCardOpen(false)}>
        <Cart
          cartItems={cardItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCardOpen(true)}>
        <Badge badgeContent={getTotalItems(cardItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App;