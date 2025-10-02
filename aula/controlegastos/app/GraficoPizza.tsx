import { Dimensions, Text, View } from "react-native";
import { PieChart } from 'react-native-chart-kit';

export default function GraficoPizza(props: any) {

    const data = [
        {
            name: 'Aluguel',
            population: 500,
            color: '#f44336',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Transporte',
            population: 200,
            color: '#2196f3',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Alimentação',
            population: 800,
            color: '#4caf50',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
        {
            name: 'Lazer',
            population: 300,
            color: '#ff9800',
            legendFontColor: '#333',
            legendFontSize: 14,
        },
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PieChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={250}
                accessor="population"          // campo usado para os valores
                backgroundColor="transparent"  // deixa o fundo transparente
                paddingLeft="15"
                absolute                       // mostra os valores absolutos (sem %)
                chartConfig={{
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
            />
        </View>
    );
}