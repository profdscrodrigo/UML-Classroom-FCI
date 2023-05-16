import type { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
  Login: undefined;
  Main: {
    code: string;
  };
} & NativeStackNavigationProp<Record<string, object>> & { [key: string]: undefined };

export type PropsStack = StackScreenProps<PropsNavigationStack>;
