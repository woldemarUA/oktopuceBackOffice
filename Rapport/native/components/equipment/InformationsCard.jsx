import React from 'react';

import { View, Text } from 'react-native';

import { styles } from '../../Screens/styles/detailsStyles';
const InformationsCard = ({ info }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Informations</Text>
      {info.location && (
        <>
          <View style={styles.row}>
            <Text style={styles.cardTextLeft}>Emplacement: </Text>
            <Text style={styles.cardTextRight}>{info.location}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cardTextLeft}>Precision: </Text>
            <Text style={styles.cardTextRight}>{info.location_precision}</Text>
          </View>
        </>
      )}
      {info.parent && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Associé à: </Text>
          <Text style={styles.cardTextRight}>{info.parent}</Text>
        </View>
      )}
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Marque: </Text>
        <Text style={styles.cardTextRight}>{info.brand}</Text>
      </View>
      {info.interior_type && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Type: </Text>
          <Text style={styles.cardTextRight}>{info.interior_type}</Text>
        </View>
      )}
      {info.exterior_type && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Type: </Text>
          <Text style={styles.cardTextRight}>{info.exterior_type}</Text>
        </View>
      )}
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Modele: </Text>
        <Text style={styles.cardTextRight}>{info.model}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.cardTextLeft, width: '30%' }}>
          N de serie:
        </Text>
        <Text style={{ ...styles.cardTextRight, width: '70%' }}>
          {info.serial}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cardTextLeft}>Telecommande: </Text>
        <Text style={styles.cardTextRight}>{info.remote_control_number}</Text>
      </View>
      {info.ballon_capacite && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Capacité du ballon: </Text>
          <Text style={styles.cardTextRight}>{info.ballon_capacite}</Text>
        </View>
      )}
      {info.gas_type && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Type de gaz: </Text>
          <Text style={styles.cardTextRight}>{info.gas_type}</Text>
        </View>
      )}
      {info.gas_weight && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Poids de gaz: </Text>
          <Text style={styles.cardTextRight}>{info.gas_weight}</Text>
        </View>
      )}
      {info.has_leak_detection && (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>Detecteur de fuite: </Text>
          <Text style={styles.cardTextRight}>
            {info.has_leak_detection ? 'Oui' : 'Non'}
          </Text>
        </View>
      )}
      {info.leak_detection_periodicity ===
      "s'il vous plait tapez le poids / choissez type de gaz " ? null : (
        <View style={styles.row}>
          <Text style={styles.cardTextLeft}>
            Contrôle d’étanchéité obligatoire:
          </Text>
          <Text style={styles.cardTextRight}>
            {info.leak_detection_periodicity}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InformationsCard;
