import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, PizzaImage, PizzaType, PizzaName, VoteAverage, Vote, PriceAndButton, PizzaPrice, CartButton } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  data: {
    id: string;
    type: string;
    name: string;
    voteAverage: number;
    description: string;
    smallPrice: number;
    mediumPrice: number;
    largerice: number;
  }
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation()

  if (!data) return null

  function handleShowDetails() {
    navigation.navigate('details', { data: data })
  }

  return (
    <Container activeOpacity={0.9} onPress={handleShowDetails}>
      <PizzaImage source={require('../../assets/pizza.png')} />

      <PizzaType>{data.type}</PizzaType>
      <PizzaName>{data.name}</PizzaName>

      <VoteAverage>
        <Icon name="star" size={18} color="#fff" />
        <Vote>{data.voteAverage}</Vote>
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