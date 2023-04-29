import { Category } from '../../types/category';
import {CategoryContainer, Icon} from './styles';
import {Text} from '../Text';
import {FlatList} from 'react-native';
import {useState} from 'react';

interface Props {
  categories: Array<Category>
  onSelectedCategory(categoryId: string): Promise<void>;
}

export function Categories({ categories, onSelectedCategory }: Props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  function handleSelectedCategory(categoryId: string) {
    const category = selectedCategoryId === categoryId ? '' : categoryId;
    onSelectedCategory(category);
    setSelectedCategoryId(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={({_id}) => _id}
      contentContainerStyle={{ paddingRight: 24 }}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategoryId === category._id;
        return (
          <CategoryContainer onPress={() => handleSelectedCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text size={14} weight={'600'}  opacity={isSelected ? 1 : 0.5} numberOfLines={1} >{category.name}</Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
