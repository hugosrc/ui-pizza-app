import styled from 'styled-components/native';

export const Container = styled.View`
  height: 125px;
  flex-direction: row;
  align-items: center;
  margin: 8px;
`;

export const PizzaImage = styled.Image`
  height: 105px;
  width: 105px;
`

export const PizzaAmount = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.secondary};
`

export const Details = styled.View`
  flex-direction: row;
  height: 90%;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.colors.background};
`

export const ProductInfo = styled.View`
  margin-left: 14px;
`

export const PizzaName = styled.Text`
  max-width: 150px;
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const PizzaPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

export const Buttons = styled.View`
`

export const HorizontalButtons = styled.View`
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  margin-bottom: 8px;
  border-radius: 8px;
  margin-left: 8px;

  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
`
