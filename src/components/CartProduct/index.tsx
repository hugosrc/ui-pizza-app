import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { 
  Container,
  PizzaImage,
  PizzaAmount,
  Details,
  ProductInfo,
  PizzaName,
  PizzaPrice,
  Buttons,
  HorizontalButtons,
  Button 
} from './styles';

import { useDispatch } from 'react-redux';
import { removeCart, incrementCart, decrementCart } from '../../store/cart/actions';

interface Props {
  data: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }
}

const CartProduct: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch()

  function handleIncrementItem() {
    dispatch(incrementCart(data.id))
  }

  function handleDecrementItem() {
    dispatch(decrementCart(data.id))
  }

  function handleRemoveItem() {
    dispatch(removeCart(data.id))
  }


  return (
    <Container>
      <PizzaImage source={require('../../assets/pizza.png')} />
      <PizzaAmount>x{data.amount}</PizzaAmount>

      <Details>
        <ProductInfo>
          <PizzaName>{data.name}</PizzaName>
          <PizzaPrice>{data.price}$</PizzaPrice>
        </ProductInfo>

        <Buttons>
          <HorizontalButtons>
            <Button activeOpacity={0.7} onPress={handleIncrementItem}>
              <Icon name="plus" size={18} color="#fff" />
            </Button>

            <Button activeOpacity={0.7} onPress={handleDecrementItem}>
              <Icon name="minus" size={18} color="#fff" />
            </Button>
          </HorizontalButtons>

          <Button activeOpacity={0.7} onPress={handleRemoveItem}>
            <Icon name="trash" size={18} color="#fff" />
          </Button>

        </Buttons>
      </Details>
    </Container>
  );
}

export default CartProduct;