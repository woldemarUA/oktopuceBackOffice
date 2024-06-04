import { componentLoader } from '../setUp/componentLoader.mjs';

const Components = {
  EquipmentForm: componentLoader.add(
    'EquipmentForm',
    './Equipment/EquipmentForm.jsx'
  ),
  DashboardCard: componentLoader.add(
    'DashboardCard',
    './Dashboard/Dashboard.jsx'
  ),
  CustomSelect: componentLoader.add(
    'CustomSelect',
    './Equipment/CustomSelect.jsx'
  ),
  CustomCheckBox: componentLoader.add(
    'CustomCheckBox',
    './Equipment/CustomCheckBox.jsx'
  ),
  LocationInfoComponent: componentLoader.add(
    'LocationInfoComponent',
    './Equipment/LocationInfoComponent.jsx'
  ),
  ParentComponent: componentLoader.add(
    'ParentComponent',
    './Equipment/ParentComponent'
  ),
  // ConditionalSelect: componentLoader.add(
  //   'ConditionalSelect',
  //   './Equipment/ConditionalSelect.jsx'
  // ),
  // other custom components
};

export { Components };
