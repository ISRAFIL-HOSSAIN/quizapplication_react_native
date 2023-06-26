import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{},2000)
        navigation.navigate('HomeScreen')
    })
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen