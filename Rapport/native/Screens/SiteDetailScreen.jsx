import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Pressable } from 'react-native';
import AdresseComp from '../components/AdresseComp';
import { useNavigation } from '@react-navigation/native';

import { useEquipment } from '../context/EquipmentProvider';

import { styles } from './styles/detailsStyles';
const SiteDetailScreen = ({ route }) => {
  const [equipments, setEquipments] = useState(null);
  const { site } = route.params;
  const navigation = useNavigation();
  const { fetchEquipmentBySiteId } = useEquipment();
  useEffect(() => {
    async function getEquipment() {
      try {
        const eq = await fetchEquipmentBySiteId(site.id);
        setEquipments(eq);
      } catch (error) {
        console.error(error);
      }
    }

    getEquipment();
  }, []);

  const address = {
    address: site.address,
    postal_code: site.postal_code,
    city: site.city,
    phone_number: site.phone_number,
    email: site.email,
  };
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>{site.name} Details</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nom: </Text>
          <Text style={styles.value}>{site.name}</Text>
        </View>
        <AdresseComp address={address} />
      </View>
      {equipments && (
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.heading}>
              Machines instalées sur {site.name}
            </Text>
          </View>
          <View style={styles.row}>
            <FlatList
              style={styles.item}
              data={equipments}
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
                      navigation.navigate('EquipmentDetail', {
                        equipment: item,
                      })
                    }>
                    <Text style={styles.value}>
                      {item.produit.name} - {item.endroit.name}
                    </Text>
                  </Pressable>
                </View>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SiteDetailScreen;
