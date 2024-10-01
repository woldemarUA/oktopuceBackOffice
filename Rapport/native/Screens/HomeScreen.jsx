import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Logo from '../assets/logoOktopuce.svg';
const HomeScreen = ({ navigation }) => {
  const [isClientPressed, setIsClientPressed] = useState(false);
  const [isSitePressed, setIsSitePressed] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10%',
        }}>
        <View style={styles.imageContainer}>
          <Logo style={styles.image} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate('ClientList')}
          onPressIn={() => setIsClientPressed(true)}
          onPressOut={() => setIsClientPressed(false)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#39FF14' : 'grey',
            },
            styles.button,
          ]}>
          <Text style={styles.buttonText}>Clients</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SiteList')}
          onPressIn={() => setIsSitePressed(true)}
          onPressOut={() => setIsSitePressed(false)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#39FF14' : 'grey',
            },
            styles.button,
          ]}>
          <Text style={styles.buttonText}>Sites</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InterventionsList')}
          onPressIn={() => setIsSitePressed(true)}
          onPressOut={() => setIsSitePressed(false)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#39FF14' : 'grey',
            },
            styles.button,
          ]}>
          <Text style={styles.buttonText}>Interventions</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
    height: '400%',
    paddingLeft: 80,
    alignSelf: 'flex-end',
  },
  image: {
    width: '100%', // Adjust width as needed
    height: undefined,
    aspectRatio: 1, // Ensure aspect ratio is maintained
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: '#39FF14',
    fontSize: 24,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
