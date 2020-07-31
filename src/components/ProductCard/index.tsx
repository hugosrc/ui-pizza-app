import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, PizzaImage, PizzaType, PizzaName, VoteAverage, Vote, PriceAndButton, PizzaPrice, CartButton } from './styles';
import { useNavigation } from '@react-navigation/native';

const ProductCard: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container activeOpacity={0.9} onPress={() => navigation.navigate('details')}>
      <PizzaImage source={require('../../assets/pizza.png')} />

      <PizzaType>Classic</PizzaType>
      <PizzaName>Cheesy bites trio shrimp pizza</PizzaName>

      <VoteAverage>
        <Icon name="star" size={18} color="#fff" />
        <Vote>4.9</Vote>
      </VoteAverage>

      <PriceAndButton>
        <PizzaPrice>12.0$</PizzaPrice>
        <CartButton>
          <Icon name="shopping-cart" size={18} color="#fff" />
        </CartButton>
      </PriceAndButton>
    
    </Container>
  );
}

export default ProductCard;