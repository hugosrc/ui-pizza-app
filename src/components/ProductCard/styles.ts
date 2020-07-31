import styled from 'styled-components/native';

export const Container = styled.View`
  height: 372px;
  background: ${({ theme }) => theme.colors.background};
  width: 248px;

  margin: 48px 16px;
  position: relative;

  border-radius: 8px;

  padding: 122px 24px;
`;

export const PizzaImage = styled.Image`
  position: absolute;
  top: -48px;
  left: 14px;

  height: 172px;
  width: 172px;

  background: #fff;
  border-radius: 91px;
`

export const PizzaType = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-size: 18px;
`

export const PizzaName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const VoteAverage = styled.View`
  background: ${({theme}) => theme.colors.primary};
  height: 28px;
  width: 64px;
  margin: 16px 0;
  
  flex-direction: row;
  align-items: center;

  padding: 0 5px;
  border-radius: 14px;
`

export const Vote = styled.Text`
  font-size: 18px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`

export const PriceAndButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PizzaPrice = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const CartButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`