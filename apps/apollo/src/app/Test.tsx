import { Text } from 'react-native';
import { titan } from '../services/api';

export const Test = () => {
  const { data, error } = titan.example.hello.useQuery({
    name: 'german',
  });

  console.log('data', data);
  console.log('error', error);
  return <Text>TESTING</Text>;
};
