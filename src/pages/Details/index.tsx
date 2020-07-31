import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { 
  Container,
  Card,
  PizzaImage,
  PizzaType,
  PizzaName,
  VoteAverage,
  Vote,
  Subtitle,
  Description,
  PriceAndButton,
  PizzaPrice,
  CartButton
} from './styles';

import Header from '../../components/Header'

const Details: React.FC = () => {
  return (
    <Container>
      <Header back />

      <Card>
        <PizzaImage source={require('../../assets/pizza.png')} />

        <PizzaType>Classic</PizzaType>
        <PizzaName>Cheesy bites trio shrimp pizza</PizzaName>

        <VoteAverage>
          <Icon name="star" size={18} color="#fff" />
          <Vote>4.9</Vote>
        </VoteAverage>

        <Subtitle>Description</Subtitle>
        <Description>
          Shrimp, onion, red capsicum, pineapple, black olive, parsley, 
          Mozzarella cheese, string cheese two color, Sweet chili sauce. 
          Cheesy Bites Trio.
        </Description>

        <PriceAndButton>
          <PizzaPrice>12.0$</PizzaPrice>
          <CartButton>
            <Icon name="shopping-cart" size={18} color="#fff" />
          </CartButton>
        </PriceAndButton>
      </Card>
    </Container>
  );
}

export default Details;