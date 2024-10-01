import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import { styles } from './styles/listStyles';

import { useClients } from '../context/ClientsProvider';

const ClientsListScreen = ({ navigation }) => {
  const { clients } = useClients();

  if (!clients || !Array.isArray(clients)) {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Aucun clients disponible</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={clients}
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
                navigation.navigate('ClientDetail', { client: item })
              }>
              <Text style={styles.item}>{item.last_name}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default ClientsListScreen;
