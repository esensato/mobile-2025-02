import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

export default function MapComponent(props: any) {

    const marcadores: any = [
        { key: "m2", coord: { latitude: -23.6, longitude: -46.64433318786136 }, title: "M2", description: "Marcador 2" },
        { key: "m1", coord: { latitude: -23.586931331827458, longitude: -46.64433318786136 }, title: "M1", description: "Marcador 1" },
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -23.58701982416051,
                    longitude: -46.64434391669733,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>

                {/* Usando tiles do OpenStreetMap */}
                <UrlTile urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maximumZ={19} />

                {marcadores.map((item: any, idx: number) => (
                    <Marker
                        key={idx}
                        coordinate={item.coord}
                        title={item.title}
                        image={require('../assets/images/react-logo.png')}
                        description={item.description} />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});