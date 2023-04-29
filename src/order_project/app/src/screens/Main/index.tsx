import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import {Header} from '../../components/Header';
import {Categories} from '../../components/Categories';
import {Button} from '../../components/Button';
import {Menu} from '../../components/Menu';
import {InputModal} from '../../components/InputModal';
import {Cart} from '../../components/Cart';
import {CartItem} from '../../types/cartItem';
import {Product} from '../../types/Product';
import {Empty} from '../../components/Icons/Empty';
import {Text} from '../../components/Text';
import {Category} from '../../types/category';

import { api } from '../../utils/api';
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
  Row
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function  Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [code, setCode] = useState<string | null>("");

  const getRestaurantCode = async () =>{
    const temp = await AsyncStorage.getItem('@restaurant_code');
    setCode(temp);
  }

  useEffect(() => {
    getRestaurantCode();
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([categoriesResponse, productsResponse]) => {
      setProducts(productsResponse.data);
      setCategories(categoriesResponse.data);
      setIsLoading(false);
    });
  }, []);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) setIsTableModalVisible(true);

    setCartItems(prevState => {
      const index = prevState.findIndex((cartItem) => cartItem.product._id === product._id);

      if (index < 0) {
        return [...prevState, {
          product,
          quantity: 1
        }];
      }

      return prevState.map((cartItem) => {
        if (cartItem.product._id === product._id) return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
        return cartItem;
      });
    });
  }

  function handleRemoveFromCart(product: Product) {
    setCartItems(prevState => {
      const item = prevState.find((cartItem) => cartItem.product._id === product._id);

      if (!item) return prevState;

      if (item.quantity === 1) {
        return prevState.filter((cartItem) => !(cartItem.product._id === product._id));
      }

      return prevState.map((cartItem) => {
        if (cartItem.product._id === product._id) return {
          ...cartItem,
          quantity: cartItem.quantity - 1
        };
        return cartItem;
      });
    });
  }

  async function handleSelectedCategory(categoryId: string) {
    const route = !categoryId || categoryId === '' ?
      '/products' :
      `/restaurants/${code}/categories/${categoryId}/products`;

    setIsLoadingProducts(true);
    try{
      const res = await api.get(route);
      setProducts(res.data);
      setIsLoadingProducts(false);
    }catch(e){
      console.log(JSON.stringify(e));
    }
  }

  return (
    <>
      <StatusBar style={'dark'} backgroundColor='#fafafa' />
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories categories={categories} onSelectedCategory={handleSelectedCategory}/>
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator size='large' color='#D73035' />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color='#666' style={{ marginTop: 24 }}>Nenhum produto foi encontrado</Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator size='large' color='#D73035' />
          </CenteredContainer>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {selectedTable ?  (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              onConfirmOrder={handleResetOrder}
              selectedTable={selectedTable}
            />
          ) : (
            <Row>
              <Button onPress={() => setIsTableModalVisible(true)}>Novo Pedido</Button>
            </Row>
          )}
        </FooterContainer>
      </Footer>

      <InputModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
        text='Informe a mesa'
        placeholder='Número da mesa'
        keyboardType='number-pad'
        maxLength={6}
      />
    </>
  );
}
