import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
`;

export const Card = styled.View`
  height: 421px;
  align-self: stretch;
  margin: 72px 32px;
  padding: 78px 16px;
  border-radius: 12px;
  background: ${({theme}) => theme.colors.background};
`;

export const PizzaImage = styled.Image`
  position: absolute;
  top: -96px;
  left: 120px;

  height: 192px;
  width: 192px;

  background: #fff;
  border-radius: 91px;
`;

export const PizzaType = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-size: 18px;
`;

export const PizzaName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`;

export const VoteAverage = styled.View`
  background: ${({theme}) => theme.colors.primary};
  height: 28px;
  width: 64px;
  margin: 16px 0;
  
  flex-direction: row;
  align-items: center;

  padding: 0 5px;
  border-radius: 14px;
`;

export const Vote = styled.Text`
  font-size: 18px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 12px;
`;

export const PriceAndButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PizzaPrice = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`;

export const CartButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
