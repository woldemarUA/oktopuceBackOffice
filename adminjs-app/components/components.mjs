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

  EquipmentForm: componentLoader.add(
    'EquipmentForm',
    './Equipment/EquipmentForm.jsx'
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
  DepannageComponent: componentLoader.add(
    'DepannageComponent',
    './Intervention/DepannageComponent.jsx'
  ),
  ResistanceComponent: componentLoader.add(
    'ResistanceComponent',
    './Intervention/ResistanceComponent.jsx'
  ),
  InterventionQuestionsShow: componentLoader.add(
    'InterventionQuestionsShow',
    './Intervention/InterventionQuestionsShow.jsx'
  ),
  ParametrageShowComponent: componentLoader.add(
    'ParametrageShowComponent',
    './Intervention/ParametrageShowComponent.jsx'
  ),
  ProductSelect: componentLoader.add(
    'ProductSelect',
    './atoms/ProductSelect.jsx'
  ),
  FrenchDate: componentLoader.add('FrenchDate', './atoms/FrenchDate.jsx'),
  EquipmentShowComponent: componentLoader.add(
    'EquipmentShowComponent',
    './atoms/EquipmentShowComponent.jsx'
  ),
  InterventionShowComponent: componentLoader.add(
    'InterventionShowComponent',
    './atoms/InterventionShowComponent.jsx'
  ),
  FileUpload: componentLoader.add('FileUpload', './atoms/FileUpload.jsx'),
  SignatureComp: componentLoader.add(
    'SignatureComp',
    './atoms/SignatureComp.jsx'
  ),
  ProductShow: componentLoader.add('ProductShow', './atoms/ProductShow.jsx'),
  ShowSignature: componentLoader.add(
    'ShowSignature',
    './atoms/ShowSignature.jsx'
  ),
  DateComp: componentLoader.add('DateComp', './atoms/DateComp.jsx'),
  FileShow: componentLoader.add('FileShow', './atoms/FileShow.jsx'),
  SelectCellFlex: componentLoader.add(
    'SelectCellFlex',
    './atoms/SelectCellFlex.jsx'
  ),
  ShowSignature: componentLoader.add(
    'ShowSignature',
    './atoms/ShowSignature.jsx'
  ),
  EmptyBreak: componentLoader.add('EmptyBreak', './atoms/EmptyBreak.jsx'),
  ListPropertySitesSelectComponent: componentLoader.add(
    'ListPropertySitesSelectComponent',
    './atoms/ListPropertySitesSelectComponent.jsx'
  ),
  ListPropertyEquipmentSelectComponent: componentLoader.add(
    'ListPropertyEquipmentSelectComponent',
    './atoms/ListPropertyEquipmentSelectComponent.jsx'
  ),
  GoBackComponent: componentLoader.add(
    'GoBackComponent',
    './atoms/GoBackComponent.jsx'
  ),

  DropDownComp: componentLoader.add('DropDownComp', './atoms/DropDownComp.jsx'),
  ShowChildrenQuestions: componentLoader.add(
    'ShowChildrenQuestions',
    './atoms/ShowChildrenQuestions.jsx'
  ),
  AddFormWithFrame: componentLoader.add(
    'AddFormWithFrame',
    './atoms/AddFormWithFrame.jsx'
  ),
  // Login: componentLoader.override('Login', './atoms/Login.jsx'),
};

// console.log('Components registered:', Components);

export { Components };
