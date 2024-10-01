import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AdresseComp from '../components/AdresseComp';

import { styles } from './styles/detailsStyles';

const ClientDetailScreen = ({ route }) => {
  const { client } = route.params;
  const navigation = useNavigation();

  const address = {
    address: client.address,
    postal_code: client.postal_code,
    city: client.city,
    phone_number: client.phone_number,
    email: client.email,
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>{client.last_name} details</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Type: </Text>
          <Text style={styles.value}>{client.ClientType.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nom: </Text>
          <Text style={styles.value}>{client.last_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Prenom: </Text>
          <Text style={styles.value}>{client.first_name}</Text>
        </View>
        <AdresseComp address={address} />
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>
            Liste des sites de {client.last_name}
          </Text>
        </View>
        <View style={styles.row}>
          {client.sites.length > 0 ? (
            <FlatList
              data={client.sites}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? '#39FF14' : 'grey',
                      },
                      styles.button,
                    ]}
                    onPress={() =>
                      navigation.navigate('SiteDetail', { site: item })
                    }>
                    <Text style={styles.value}>{item.name}</Text>
                  </Pressable>
                </View>
              )}
            />
          ) : (
            <Text style={styles.label}>Aucun sites pour ce client</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ClientDetailScreen;
