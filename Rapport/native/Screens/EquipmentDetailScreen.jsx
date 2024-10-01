import React, { useEffect, useState } from 'react';

import { View, Text, Image, ScrollView } from 'react-native';

import ParametrageCard from '../components/equipment/ParametrageCard';
import InformationsCard from '../components/equipment/InformationsCard';
import FinalitesCard from '../components/equipment/FinalitesCard';

import { styles } from './styles/detailsStyles';
import InterventionsListScreen from './InterventionsListScreen';

import { useInterventions } from '../context/InterventionsProvider';

const EquipmentDetailScreen = ({ route }) => {
  const { equipment } = route.params;
  const imgSrc = `${process.env.EXPO_PUBLIC_PICTO_LINK}${equipment.equipment_type_id}.png`;
  const [interventions, setInterventions] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchInterventionByEqId(equipment.id);
      if (data.length === 0) return null;
      setInterventions(data);
    }

    fetchData();
  }, [equipment]);

  const { fetchInterventionByEqId } = useInterventions();

  const parametrage = {
    site: equipment.site.name,
    produit: equipment.produit.name,
    endroit: equipment.endroit.name,
    equipment_type: equipment.equipment_type.name,
    tag: equipment.nfc_tag,
  };
  const informations = {
    brand: equipment.equipment_brand.name,
    model: equipment.equipment_model,
    serial: equipment.serial_number,
    remote_control_number: equipment.remote_control_number,
    // all that changing
    parent: equipment.parent_equipment_id,
    location: equipment.location?.name,
    location_precision: equipment.location_precision,
    ballon_capacite: equipment.ballon_capacite,
    gas_type: equipment.gas_type?.name,
    gas_weight: equipment.gas_weight,
    has_leak_detection: equipment.has_leak_detection,
    leak_detection_periodicity: equipment.leak_detection_periodicity,
    interior_type: equipment.interior_type?.name,
    exterior_type: equipment.exterior_type?.name,
  };
  const { finalites } = equipment;

  return (
    <ScrollView
      style={{ ...styles.horizontalScrollView, backgroundColor: 'black' }}>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.heading}>{parametrage.endroit}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imgSrc }} // Use the URL to load the image
            style={styles.image}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true} // Hide horizontal scroll indicator
          style={styles.horizontalScrollView}>
          <ParametrageCard parametrage={parametrage} />
          <InformationsCard info={informations} />
          {equipment.equipment_type.is_finalite && (
            <FinalitesCard finalites={finalites} />
          )}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Interventions réalisées :{' '}
            {interventions ? '' : <Text style={styles.label}>aucun</Text>}
          </Text>
        </View>
        {interventions && (
          <InterventionsListScreen equipmentId={equipment.id} />
        )}
      </View>
    </ScrollView>
  );
};

export default EquipmentDetailScreen;
