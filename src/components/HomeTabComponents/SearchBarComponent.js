import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBarComponent = (props) => {
return (
        <View style={{
                    height: 48,
                    paddingHorizontal: 8,
                    flexDirection: 'row'
                }}>
                    <View
                        style={{
                            width: 32,
                            paddingVertical: 8,
                            paddingHorizontal: 4,
                        }}
                    >
                        <MaterialCommunityIcons name="airplane-marker" size={24} />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 8,
                        }}
                    >
                        <TextInput
                            placeholder='Cari Wisata'
                            style={{
                                height: 40,
                                paddingHorizontal: 8,
                                color: '#000',
                                backgroundColor: '#fff',
                                borderRadius: 8,
                                borderWidth: 0.5,
                                borderColor: '#000',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 32,
                            paddingVertical: 8,
                            paddingHorizontal: 4,
                        }}
                    >
                        <MaterialCommunityIcons name="magnify" size={24} />
                    </View>
                </View>
);
}

export default SearchBarComponent;