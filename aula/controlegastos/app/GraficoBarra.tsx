import { Dimensions, Text, View } from "react-native";
import { BarChart } from 'react-native-chart-kit';

export default function GraficoBarra(props: any) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BarChart
                data={{
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
                    datasets: [{ data: [20, 45, 28, 80] }],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: { borderRadius: 16 },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
}