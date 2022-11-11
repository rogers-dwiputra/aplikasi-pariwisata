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
        thumbnail: '',
    });

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
                    source={require('../../assets/img/headline.png')}
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