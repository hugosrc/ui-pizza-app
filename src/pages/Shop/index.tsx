import React from 'react';
import { Container, Title, Products } from './styles';

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';

const Shop: React.FC = () => {
  return (
    <Container>
      <Header/>

      <Title>Popular Pizza</Title>

      <Products
        data={[1,2,3,4,5]}
        renderItem={({ item }) => <ProductCard/>}
        keyExtractor={item => String(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Title>Daily Deal</Title>

      <Products
        data={[1,2,3,4,5]}
        renderItem={({ item }) => <ProductCard/>}
        keyExtractor={item => String(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default Shop;