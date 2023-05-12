import {Container, OrderHeader, RowBetween, Settings, Table} from './styles';
import {Text} from '../Text';
import {TouchableOpacity, View} from 'react-native';
import Logo from '../Logo';
import { Cog } from '../Icons/Cog';
import { useNavigation } from '@react-navigation/native';
import { PropsNavigationStack } from '../../routes/Stack/Models';

interface Props {
  selectedTable: string;
  onCancelOrder(): void;
}

export function Header({ selectedTable, onCancelOrder }: Props) {

  const {navigate} = useNavigation<PropsNavigationStack>();

  return (
    <Container>
      {selectedTable ? (
        <View>
          <OrderHeader>
            <Text size={24} weight="600">Pedido</Text>
            <TouchableOpacity onPress={() => onCancelOrder()}>
              <Text size={14} weight="600" color='#D73035'>
                Cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text>Mesa {selectedTable}</Text>
          </Table>
        </View>
      ) : (
        <View>
          <RowBetween>
            <View>
              <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
              <Logo size={24} />
            </View>
            <Settings onPress={()=>{navigate("Settings", {})}}>
              <Cog />
            </Settings>
          </RowBetween>
        </View>
      )}
    </Container>
  );
}
