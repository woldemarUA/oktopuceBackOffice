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

  // SingleSelect: componentLoader.add('SingleSelect', './Equipment/SingleSelect'),

  ToggleSwitch: componentLoader.add(
    'ToggleSwitch',
    './styled-componens/ToggleSwitch.jsx'
  ),

  InterventionsQuestionsComponent: componentLoader.add(
    'InterventionsQuestionsComponent',
    './Intervention/InterventionsQuestionsComponent.jsx'
  ),

  SoufflageComponent: componentLoader.add(
    'SoufflageComponent',
    './Intervention/SoufflageComponent.jsx'
  ),
  AdditionalQuestionsComponent: componentLoader.add(
    'AdditionalQuestionsComponent',
    './Intervention/AdditionalQuestionsComponent.jsx'
  ),
  QuestionComponent: componentLoader.add(
    'QuestionComponent',
    './Intervention/QuestionComponent.jsx'
  ),
  PressionsComponent: componentLoader.add(
    'PressionsComponent',
    './Intervention/PressionsComponent.jsx'
  ),
  PompeEauComponent: componentLoader.add(
    'PompeEauComponent',
    './Intervention/PompeEauComponent.jsx'
  ),
  EtancheiteComponent: componentLoader.add(
    'EtancheiteComponent',
    './Intervention/EtancheiteComponent.jsx'
  ),
  SecuriteComponent: componentLoader.add(
    'SecuriteComponent',
    './Intervention/SecuriteComponent.jsx'
  ),
  ResistanceComponent: componentLoader.add(
    'ResistanceComponent',
    './Intervention/ResistanceComponent.jsx'
  ),
  EmptyBreak: componentLoader.add('EmptyBreak', './atoms/EmptyBreak.jsx'),
};

export { Components };
