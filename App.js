import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
  return (
    <>
    <SafeAreaProvider>
      <StackNavigator />
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1 , 
    backgroundColor: '#fff',
  }
})
