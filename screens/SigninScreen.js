import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';


const SigninScreen = () => {
    const [logoOpacity] = useState(new Animated.Value(0));
    const [logoTranslateY] = useState(new Animated.Value(-50));
  
    useEffect(() => {
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);
  const handleSignIn = () => {
    // Handle sign-in logic
  };

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#667eea', '#764ba2']} style={styles.background} />
        <View style={styles.contentContainer}>
      <View style={styles.logoContainer}>
        <Animated.View
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ translateY: logoTranslateY }],
            },
          ]}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          className="w-full p-4 mb-4 rounded-lg"
          placeholder="Email"
          // Add any necessary props for email input
        />

        <TextInput
          className="w-full p-4 mb-4 rounded-lg"
          placeholder="Password"
          // Add any necessary props for password input
        />

        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg" onPress={handleSignIn}>
          <Text className={`text-white text-center`}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      marginBottom: 32,
    },
    logo: {
      width: 200,
      height: 200,
      backgroundColor: 'blue', // Replace with your desired logo styling
    },
    formContainer: {
      width: '80%',
      maxWidth: 400,
    },
  });
  



export default SigninScreen