import {useCallback} from "react"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import { Text } from "../../components/Text"
import { ButtonAdd, Container, Col, Row, RowButton, RowCenter, Spacing } from "./styles"
import { View } from "react-native";
import { useState } from "react";
import { useWindowDimensions, FlatList } from "react-native";
import { NavigationProp, useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "../../utils/api";
import { Product } from "../../types/Product";
import { Category } from "../../types/category";
import SettingsCard from "../../components/SettingsCard";
import { PlusCircle } from "../../components/Icons/PlusCircle";
import BackButton from "../../components/BackButton";

interface ListType {
    data: Array<Product | Category> | undefined;
    buttonTitle: string;
    onPressButton: ()=>void;
}


const List = ({data, buttonTitle, onPressButton}: ListType) => (
    <FlatList
        data={data}
        ListHeaderComponent={()=>(
            <RowButton>
                <ButtonAdd onPress={onPressButton}>
                    <Text size={18} color="#fafafa">{buttonTitle}</Text>
                    <Spacing left={8} />
                    <PlusCircle width={36} height={34} color="#fafafa" />
                </ButtonAdd>
            </RowButton>
        )}
        renderItem={({item, index})=>(
            <Row>
                <SettingsCard {...item} />
            </Row>
        )}

    />
)

export default () => {
    const layout = useWindowDimensions();
    const navigation = useNavigation<NavigationProp> ();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>();
    const [categories, setCategories] = useState<Category[]>();
    const [routes] = useState([
        { key: 'categorias', title: 'Categorias' },
        { key: 'produtos', title: 'Produtos' },
    ]);

    const FirstRoute = () => (
        <List data={categories} buttonTitle={"Nova categoria"} onPressButton={()=>{navigation.navigate("CategorySettings")}} />
    );

    const SecondRoute = () => (
        <List data={products} buttonTitle={"Novo produto"} onPressButton={()=>{navigation.navigate("ProductSettings")}} />
    );


    const renderScene = SceneMap({
        categorias: FirstRoute,
        produtos: SecondRoute,
    });

    useFocusEffect(
        useCallback(()=>{
          Promise.all([
            api.get('/categories'),
            api.get('/products'),
          ]).then(([categoriesResponse, productsResponse]) => {
            setProducts(productsResponse.data);
            setCategories(categoriesResponse.data);
            setIsLoading(false);
          });
          return;
        },[])
      )

    return(
        <Container>
                <Spacing top={20} />
                <RowCenter>
                    <Spacing left={20} />
                    <BackButton />
                    <Col>
                        <Text size={18}>Produtos e categorias </Text>
                    </Col>
                </RowCenter>
                <Spacing bottom={10} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={(props)=><TabBar {...props} labelStyle={{color: "#333"}} indicatorStyle={{ backgroundColor: '#D73035' }} style={{ backgroundColor: '#fafafa' }} />}
                />
        </Container>
    )
}
