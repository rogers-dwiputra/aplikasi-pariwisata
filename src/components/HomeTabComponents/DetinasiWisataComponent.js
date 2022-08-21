import React from 'react';
import {
  Text,
  View,
  TextInput,
    Image,
    ScrollView
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DestinasiWisataComponent = () => {

    const [isLoading, setIsLoading] = React.useState(false);

    if(isLoading){
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator/>
            </View>
        )
    }
    else {
        return (
            <View
                   style={{
                    flex: 2,
                    marginTop: 8
                    }}>
                    <Text style={{ textAlign: 'center', fontWeight: '500', color: '#4B5563', fontSize: 20, fontFamily: 'poppins' }}>Destinasi Wisata</Text>
                    <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 12, color: '#9096A0' }}>Pilihan Terbaik</Text>
            <View
                    style={{
                        flex: 1,
                        marginTop: 8
                    }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}
                        >
                            <DestinasiItemComponent namaDestinasi="Pantai Serdang"/>
                            <DestinasiItemComponent namaDestinasi="Vihara Patung Dewi Kwan In"/>
                        </View>
    
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: 8
                            }}
                        >
                            <DestinasiItemComponent namaDestinasi="Replika SD Laskar Pelangi"/>
                            <DestinasiItemComponent namaDestinasi="Pantai Nyiur Melambai"/>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 16, marginBottom: 16, color: '#0085CC' }}>Lihat Lainnya</Text>
                    </View>
        )
    }

}

const DestinasiItemComponent = (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)'
        }}>
            <View
                style={{
                    position: 'relative'
                }}
            >
                <Image
                    source={require('../../assets/img/pantaiserdang.png')}
                    style={{
                        borderRadius: 8
                    }}
                />
                <Text
                style={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 8,
                    marginHorizontal: 8,
                    color: '#FFF',
                    fontSize: 18,
                    fontWeight: 'bold'
                }}
                >{props.namaDestinasi}</Text>
            </View>
        </View>
    )
}

export default DestinasiWisataComponent;