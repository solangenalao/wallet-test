import React from 'react';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

interface CustomIconProps {
  size: number;
}

const Icon = createIconSetFromIcoMoon(
    require('../../../assets/icomoon/selection.json'),
    'IcoMoon',
    'icomoon.ttf'
  );

const CustomIcon: React.FC<CustomIconProps> = ({ size }) => {

const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../assets/icomoon/icomoon.ttf'),
    });

    if (!fontsLoaded) {
    return null;
    }

  return <Icon size={size} />;
};

export default CustomIcon;
