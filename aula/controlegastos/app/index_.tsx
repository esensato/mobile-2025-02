import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './TelaPrincipal';
import DetalheGasto from './DetalheGasto';

const Stack = createNativeStackNavigator();

export default function Index_() {

  return <NavigationIndependentTree>
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4A90E2' } }}>
      <Stack.Screen name="Principal" component={TelaPrincipal} options={{ title: 'Gastos' }} />
      <Stack.Screen name="Detalhe" component={DetalheGasto} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  </NavigationIndependentTree>

}