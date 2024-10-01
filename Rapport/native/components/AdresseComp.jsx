import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { styles } from '../Screens/styles/detailsStyles';

const AdresseComp = ({ address }) => {
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${address.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${address.phone_number}`);
  };

  const handleAddressPress = () => {
    const query = encodeURIComponent(`${address.address}, ${address.city}`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };
  return (
    <>
      <Pressable onPress={handleAddressPress}>
        <View style={styles.row}>
          <Text style={styles.label}>Adresse: </Text>
          <Text style={styles.value}>{address.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Code postal: </Text>
          <Text style={styles.value}>{address.postal_code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ville: </Text>
          <Text style={styles.value}>{address.city}</Text>
        </View>
      </Pressable>
      <View style={styles.row}>
        <Text style={styles.label}>Telephone: </Text>
        <Pressable onPress={handlePhonePress}>
          <Text style={styles.value}>{address.phone_number}</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mail: </Text>
        <Pressable onPress={handleEmailPress}>
          <Text style={styles.value}>{address.email}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default AdresseComp;
