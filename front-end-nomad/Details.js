import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StylesSheet, Text, View, Button } from 'react-native';

import styles from './Appstyles'

export default function Details({navigation}) {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={[styles.largeHeading, styles.mediumHeading]}> YOLANDA-MOTHER </Text>

 <Button title='Go To Home' onPress={()=> navigation.navigate('Home')} />
 <Button title='Go To Categories' onPress={()=> navigation.navigate('Categories')} />
    </SafeAreaView>
  );
}


