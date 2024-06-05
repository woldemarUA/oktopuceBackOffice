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
  SingleSelect: componentLoader.add(
    'SingleSelect',
    './Equipment/SingleSelect.jsx'
  ),
  GasParamsComponent: componentLoader.add(
    'GasParamsComponent',
    './Equipment/GasParamsComponent.jsx'
  ),
  ParentComponent: componentLoader.add(
    'ParentComponent',
    './Equipment/ParentComponent'
  ),
  SingleSelect: componentLoader.add('SingleSelect', './Equipment/SingleSelect'),

  ToggleSwitch: componentLoader.add('ToggleSwitch', './Equipment/ToggleSwitch'),
  CustomSelect: componentLoader.add('CustomSelect', './Equipment/CustomSelect'),
  CustomCheckBox: componentLoader.add(
    'CustomCheckBox',
    './Equipment/CustomCheckBox'
  ),
  LocationInfoComponent: componentLoader.add(
    'LocationInfoComponent',
    './Equipment/LocationInfoComponent'
  ),

  // ConditionalSelect: componentLoader.add(
  //   'ConditionalSelect',
  //   './Equipment/ConditionalSelect.jsx'
  // ),
  // other custom components
};

export { Components };
