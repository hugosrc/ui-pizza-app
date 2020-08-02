import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin: 0 24px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const CartDetails = styled.View`
  align-self: stretch;
  margin: 0 14px;
  padding: 8px;
  height: 148px;

  border-top-width: 2px;
  border-top-color: ${({theme}) => theme.colors.background};
`

export const Subtotal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const SubtotalTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const Amount = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const FinalPrice = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const CheckoutButton = styled.TouchableOpacity`
  height: 60px;
  align-self: stretch;
  margin-top: 8px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.primary};
`

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white}
`