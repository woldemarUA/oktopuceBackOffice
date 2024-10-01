import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles/detailsStyles';
import InformationsGeneralesCard from '../components/intervention/InformationsGeneralesCard';
import InterventionQuestionsCard from '../components/intervention/InterventionQuestionsCard';

const InterventionsDetailScreen = ({ route }) => {
  const { intervention } = route.params;
  console.log(intervention);
  const signaturesUrl = process.env.EXPO_PUBLIC_SIGNATURES_PATH;

  const info = {
    site: intervention.site_int,
    equipment: intervention.equipment_interventions,
    produit: intervention.produit_int.name,
    endroit: intervention.endroit_int.name,
    unite: intervention.eq_type_int.name,
    client: intervention.client_int,
    technicien: intervention.technicien,
  };

  return (
    <ScrollView
      style={{ ...styles.horizontalScrollView, backgroundColor: 'black' }}>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>
            {intervention.intervention_type.name} -{' '}
            {intervention.intervention_date} {intervention.id}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true} // Hide horizontal scroll indicator
          style={styles.horizontalScrollView}>
          <InformationsGeneralesCard info={info} />
          <InterventionQuestionsCard interventionID={intervention.id} />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>Signatures</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageTextContainer}>
            <Text style={styles.label}>Client: </Text>
          </View>
          <View style={styles.imageSignatureContainer}>
            <Image
              source={{
                uri: `${signaturesUrl}${intervention.signature_client}`,
              }}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageTextContainer}>
            <Text style={styles.label}>Technicien: </Text>
          </View>
          <View style={styles.imageSignatureContainer}>
            <Image
              source={{
                uri: `${signaturesUrl}${intervention.signature_technicien}`,
              }}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InterventionsDetailScreen;
