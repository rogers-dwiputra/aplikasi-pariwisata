import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const DestinasiTab = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Destinasi Tab</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('DetailsDestinasi');
                }}
            />
        </View>
    );
}

export default DestinasiTab;