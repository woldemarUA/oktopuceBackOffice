import React from 'react';

import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';

const ParametrageCard = ({ parametrage }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Parametrage</Text>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextRight, textAlign: 'left' }}>
          Site:{' '}
        </Text>
        <Text style={{ ...styles.cardTextLeft, textAlign: 'right' }}>
          {parametrage.site}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextRight, textAlign: 'left' }}>
          Produit:{' '}
        </Text>
        <Text style={{ ...styles.cardTextLeft, textAlign: 'right' }}>
          {parametrage.produit}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextRight, textAlign: 'left' }}>
          Endroit:{' '}
        </Text>
        <Text style={{ ...styles.cardTextLeft, textAlign: 'right' }}>
          {parametrage.endroit}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextRight, textAlign: 'left' }}>
          Type d'unite:{' '}
        </Text>
        <Text style={{ ...styles.cardTextLeft, textAlign: 'right' }}>
          {parametrage.equipment_type}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          TAG INFO:
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
          }}>
          ID
        </Text>
        <Text style={styles.cardText}>{parametrage.tag.id}</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: 'white',
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

export default ParametrageCard;
