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
  Button 
} from './styles';

const CartProduct: React.FC = () => {
  return (
    <Container>
      <PizzaImage source={require('../../assets/pizza.png')} />
      <PizzaAmount>x1</PizzaAmount>

      <Details>
        <ProductInfo>
          <PizzaName>Cheesy bites trio shrimp pizza</PizzaName>
          <PizzaPrice>12.0$</PizzaPrice>
        </ProductInfo>

        <Buttons>
          <Button activeOpacity={0.7}>
            <Icon name="plus" size={18} color="#fff" />
          </Button>

          <Button activeOpacity={0.7}>
            <Icon name="trash" size={18} color="#fff" />
          </Button>
        </Buttons>
      </Details>
    </Container>
  );
}

export default CartProduct;