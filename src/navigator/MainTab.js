import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTab from '../tabs/HomeTab';
import DestinasiTab from '../tabs/DestinasiTab';
import InformasiTab from '../tabs/InformasiTab';
import LainnyaTab from '../tabs/LainnyaTab';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
      <Tab.Navigator
          activeColor="#ffffff"
          inactiveColor='#F6F6F6'
        >
          <Tab.Screen 
            name="Beranda" 
            component={HomeTab} 
            options={{
              tabBarLabel: 'Beranda',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Destinasi" 
            component={DestinasiTab} 
            options={{
              tabBarLabel: 'Destinasi',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="airplane-marker" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Informasi" 
            component={InformasiTab} 
            options={{
              tabBarLabel: 'Informasi',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="information-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Lainnya" 
            component={LainnyaTab} 
            options={{
              tabBarLabel: 'Lainnya',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="menu" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
  }

export default MainTabScreen;