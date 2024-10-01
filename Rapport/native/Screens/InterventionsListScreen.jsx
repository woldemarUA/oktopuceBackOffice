import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useInterventions } from '../context/InterventionsProvider';

import { styles } from './styles/listStyles';

const InterventionsListScreen = ({ equipmentId }) => {
  const [interventions, setInterventions] = useState(null);
  const { fetchAllInterventions, fetchInterventionByEqId } = useInterventions();
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const data = equipmentId
        ? await fetchInterventionByEqId(equipmentId)
        : await fetchAllInterventions();
      if (data.length === 0) return null;
      setInterventions(data);
    }

    fetchData();
  }, [equipmentId, fetchAllInterventions, fetchInterventionByEqId]);

  if (!interventions || !Array.isArray(interventions)) {
    return (
      <View
        style={{ ...styles.container, alignItems: 'flex-start', padding: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Aucun interventions disponible
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View
      style={styles.buttonContainer}
      key={item.id}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#39FF14' : 'grey',
          },
          styles.button,
        ]}
        onPress={() =>
          navigation.navigate('InterventionDetail', { intervention: item })
        }>
        <View style={styles.row}>
          <Text style={styles.heading}>{item.intervention_type.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.item}>
            {item.eq_type_int.name} {item.intervention_date}
          </Text>
        </View>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.item}
        data={interventions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default InterventionsListScreen;
