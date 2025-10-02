import { NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import TelaPrincipal from './TelaPrincipal';
import DetalheGasto from './DetalheGasto';
import GraficoBarra from './GraficoBarra';
import GraficoPizza from './GraficoPizza';
import { useEffect } from 'react';
import { iniciar } from './banco-dados';
import MapComponent from './MapComponent';

const Tab = createBottomTabNavigator();

export default function Index() {

  useEffect(() => {
    iniciar();
  }, []);

  return <NavigationIndependentTree>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Principal')
            return <Ionicons name="cash-outline" size={size} color={color} />;
          else if (route.name === 'Barra')
            return <Ionicons name="bar-chart" size={size} color={color} />;
          else if (route.name === 'Pizza')
            return <Ionicons name="pizza-sharp" size={size} color={color} />;
          else if (route.name === 'Mapa')
            return <Ionicons name="map-outline" size={size} color={color} />;
          else
            return <Ionicons name="document-attach-outline" size={size} color={color} />;
        },
      })} >

      <Tab.Screen name="Principal" component={TelaPrincipal} options={{ title: 'Gastos', tabBarBadge: 3, tabBarBadgeStyle: { color: 'black', backgroundColor: 'yellow' } }} />
      <Tab.Screen name="Detalhes" component={DetalheGasto} options={{ title: 'Detalhes' }} />
      <Tab.Screen name="Barra" component={GraficoBarra} options={{ title: 'Barra' }} />
      <Tab.Screen name="Pizza" component={GraficoPizza} options={{ title: 'Pizza' }} />
      <Tab.Screen name="Mapa" component={MapComponent} options={{ title: 'Mapa' }} />

    </Tab.Navigator>
  </NavigationIndependentTree>

}