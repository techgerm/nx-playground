import { Text } from 'react-native';
import { titan } from '../services/api';

export const Test = () => {
  const { data } = titan.v1.example.hello.useQuery({
    name: 'german',
  });

  const { data: datav2 } = titan.v2.example.hello.useQuery({
    name: 'shreyans',
  });

  console.log('DATA V1', data);
  console.log('DATA V2', datav2);
  return <Text>TESTING</Text>;
};
