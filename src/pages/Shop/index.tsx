import React from 'react';
import { FlatList } from 'react-native';
import { Container, Title } from './styles';

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Shop: React.FC = () => {
  const products = useSelector((state: RootState) => state.shop.products)

  return (
    <Container>
      <Header/>

      <Title>Popular Pizza</Title>

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard data={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Title>Daily Deal</Title>

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard  data={item}/>}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default Shop;