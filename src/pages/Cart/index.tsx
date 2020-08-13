import React from 'react';
import { FlatList } from 'react-native'
import { 
  Container,
  Title,
  CartDetails,
  Subtotal,
  SubtotalTitle,
  Amount,
  FinalPrice,
  CheckoutButton,
  ButtonText 
} from './styles';

import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Cart: React.FC = () => {

  const { pizzas, subtotal } = useSelector((state: RootState) => state.cart)

  return (
    <Container>
      <Header/>

      <Title>Your Cart</Title>

      <FlatList
        data={pizzas}
        renderItem={({ item }) => <CartProduct data={item}/>}
        keyExtractor={item => String(Math.random() * 10)}
        showsVerticalScrollIndicator={false}
      />

      <CartDetails>
        <Subtotal>
          <SubtotalTitle>
            Subtotal
            <Amount>({pizzas.length} items)</Amount>
          </SubtotalTitle>

          <FinalPrice>90$</FinalPrice>
        </Subtotal>

        <CheckoutButton>
          <ButtonText>Checkout</ButtonText>
        </CheckoutButton>
      </CartDetails>
    </Container>
  );
}

export default Cart;