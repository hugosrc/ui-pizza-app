import React from 'react';

import { 
  Container,
  Title,
  Products,
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

const Cart: React.FC = () => {
  return (
    <Container>
      <Header/>

      <Title>Your Cart</Title>

      <Products
        data={[1,2,3,4,5,6]}
        renderItem={({ item }) => <CartProduct/>}
        keyExtractor={item => String(item)}
        showsVerticalScrollIndicator={false}
      />

      <CartDetails>
        <Subtotal>
          <SubtotalTitle>
            Subtotal
            <Amount>(4 items)</Amount>
          </SubtotalTitle>

          <FinalPrice>60.0$</FinalPrice>
        </Subtotal>

        <CheckoutButton>
          <ButtonText>Checkout</ButtonText>
        </CheckoutButton>
      </CartDetails>
    </Container>
  );
}

export default Cart;