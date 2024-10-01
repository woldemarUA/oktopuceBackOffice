import React from 'react';

import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';

const InformationsGeneralesCard = ({ info }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Informations </Text>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>Site </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.site.name}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>
          Numero de serie{' '}
        </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.equipment.serial_number}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>Client</Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.client.last_name} {info.client.first_name}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>Techincien</Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.technicien.last_name} {info.technicien.first_name}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>Produit </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.produit}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>Endroit </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.endroit}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>
          Type d’unité
        </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.unite}
        </Text>
      </View>
    </View>
  );
};

export default InformationsGeneralesCard;
