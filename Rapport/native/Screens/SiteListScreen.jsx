import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import { useSites } from '../context/SitesProvider';

import { styles } from './styles/listStyles';

const SiteListScreen = ({ navigation }) => {
  const { sites } = useSites();
  if (!sites || !Array.isArray(sites)) {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Aucun sites disponible</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.item}
        data={sites}
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
              onPress={() => navigation.navigate('SiteDetail', { site: item })}>
              <Text style={styles.item}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default SiteListScreen;
