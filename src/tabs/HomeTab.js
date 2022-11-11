import React from 'react';
import {
  Text,
  View,
  TextInput,
    Image,
    ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBarComponent from '../components/HomeTabComponents/SearchBarComponent';
import HeadlineComponent from '../components/HomeTabComponents/HeadlineComponent';
import DestinasiWisataComponent from '../components/HomeTabComponents/DetinasiWisataComponent';

const HomeTab = () => {

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: '#ffffff',
                paddingTop: 8
            }}>
               <SearchBarComponent/> 
               <HeadlineComponent/>
               <DestinasiWisataComponent/>
        </ScrollView>
    );
}

export default HomeTab;