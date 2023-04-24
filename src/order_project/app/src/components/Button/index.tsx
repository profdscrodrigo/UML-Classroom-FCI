import {Container} from './styles';
import {Text} from '../Text';
import {ActivityIndicator} from 'react-native';

interface Props {
  children: string;
  onPress(): void;
  disabled?: boolean;
  isLoading?: boolean;
}
export function Button({ children, disabled, onPress, isLoading }: Props) {
  return (
    <Container onPress={() => onPress()} disabled={disabled || isLoading}>
      {!isLoading && (
        <Text weight="600" color="#fff">{children}</Text>
      )}

      {isLoading && (
        <ActivityIndicator color='#fff' />
      )}
    </Container>
  );
}
