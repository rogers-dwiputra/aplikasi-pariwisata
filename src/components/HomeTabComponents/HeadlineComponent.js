import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
    Image,
    ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const HeadlineComponent = () => {

    const [data, setData] = React.useState({
        thumbnail: 'https://inspiring.beltim.go.id/uploads/wisata/square/WhatsApp Image 2022-08-09 at 11.15.04.jpg',
    });

    React.useEffect(() => {
        axios.get('https://inspiring.beltim.go.id/api/poi/headline', 
        { 
            headers: { 'x-api-key': 'chandra.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx' }
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }, []);

    return (
        <View
            style={{
                flex: 1
            }}
            >
                <View
                style={{
                    position: 'relative'
                }}
                >
                <Image
                    source={{uri: data.thumbnail}}
                    style={{
                        width: '100%',
                        height: 250,
                    }}
                    />
                <View
                style={{ 
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 8,
                    marginLeft: 16
                }}>
                    <Text style={{ marginBottom: 2, color: '#FFF', fontSize: 16 }}>{data.poi_category_name}</Text>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 32 }}>{data.poi_name}</Text>
                </View>
                </View>
            </View>
    )
}

export default HeadlineComponent;