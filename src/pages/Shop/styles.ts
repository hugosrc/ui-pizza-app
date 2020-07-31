import styled from 'styled-components/native';
import { FlatList } from 'react-native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Products = styled(FlatList)`
  margin-bottom: 36px;
`

export const Title = styled.Text`
  margin: 16px;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`