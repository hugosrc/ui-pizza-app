import styled from 'styled-components/native';
import { FlatList } from 'react-native'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  margin: 16px;
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`