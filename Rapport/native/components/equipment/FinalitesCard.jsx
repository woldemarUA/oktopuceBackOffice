import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';

const FinalitesCard = ({ finalites }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Finalites</Text>
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Plancheur chauffant: </Text>
        <Text style={styles.cardTextRight}>
          {finalites.is_plancher_chauffant ? 'oui' : 'non'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>
          Plancheur chauf/raffraichissant:{' '}
        </Text>
        <Text style={styles.cardTextRight}>
          {finalites.is_plancher_raffraichssant ? 'oui' : 'non'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Radiateurs: </Text>
        <Text style={styles.cardTextRight}>
          {finalites.is_radiateurs ? 'oui' : 'non'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Ventilo-convecteur(s): </Text>
        <Text style={styles.cardTextRight}>
          {finalites.ventilo_convecteurs ? 'oui' : 'non'}
        </Text>
      </View>
    </View>
  );
};

export default FinalitesCard;
