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
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/cart/actions';

interface Params {
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

const Details: React.FC = () => {
  const route = useRoute()
  const dispatch = useDispatch()
  const { data } = route.params as Params

  if (!data) return null

  function handleAddCart() {
    dispatch(addCart({ 
      id: data.id, 
      name: data.name, 
      amount: 1, 
      price: data.smallPrice, // TEMP
      originalPrice: data.smallPrice // TEMP
    }))
  }

  return (
    <Container>
      <Header back />

      <Card>
        <PizzaImage source={require('../../assets/pizza.png')} />

        <PizzaType>{data.type}</PizzaType>
        <PizzaName>{data.name}</PizzaName>

        <VoteAverage>
          <Icon name="star" size={18} color="#fff" />
          <Vote>{data.voteAverage}</Vote>
        </VoteAverage>

        <Subtitle>Description</Subtitle>
        <Description>{data.description}</Description>

        <PriceAndButton>
          <PizzaPrice>12.0$</PizzaPrice>
          <CartButton onPress={handleAddCart}>
            <Icon name="shopping-cart" size={18} color="#fff" />
          </CartButton>
        </PriceAndButton>
      </Card>
    </Container>
  );
}

export default Details;