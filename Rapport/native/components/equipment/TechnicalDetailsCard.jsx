import React from 'react';

import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';

const TechnicalDetailsCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Détails techniques</Text>
      <View style={styles.row}>
        <Text style={styles.cardText}>Site: </Text>
        <Text style={styles.cardText}>{parametrage.site}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardText}>Produit: </Text>
        <Text style={styles.cardText}>{parametrage.produit}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardText}>Endroit: </Text>
        <Text style={styles.cardText}>{parametrage.endroit}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardText}>Type d'unite: </Text>
        <Text style={styles.cardText}>{parametrage.equipment_type}</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}>
          TAG INFO:
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
          }}>
          ID
        </Text>
        <Text style={styles.cardText}>{parametrage.tag.id}</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
          }}>
          UUID:{' '}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardText}>{parametrage.tag.uuid}</Text>
      </View>
    </View>
  );
};

export default TechnicalDetailsCard;
