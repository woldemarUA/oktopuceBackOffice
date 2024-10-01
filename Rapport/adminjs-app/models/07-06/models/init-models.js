var DataTypes = require("sequelize").DataTypes;
var _client_types = require("./client_types");
var _clients = require("./clients");
var _equipment_brands = require("./equipment_brands");
var _equipment_endroit = require("./equipment_endroit");
var _equipment_ext_types = require("./equipment_ext_types");
var _equipment_int_types = require("./equipment_int_types");
var _equipment_locations = require("./equipment_locations");
var _equipment_produit = require("./equipment_produit");
var _equipment_types = require("./equipment_types");
var _equipments = require("./equipments");
var _gas_types = require("./gas_types");
var _intervention_question_types = require("./intervention_question_types");
var _intervention_types = require("./intervention_types");
var _interventions = require("./interventions");
var _interventions_questions = require("./interventions_questions");
var _interventions_questions_equipment = require("./interventions_questions_equipment");
var _nfc_tags = require("./nfc_tags");
var _personal_access_tokens = require("./personal_access_tokens");
var _sessions = require("./sessions");
var _sites = require("./sites");
var _user_types = require("./user_types");
var _users = require("./users");

function initModels(sequelize) {
  var client_types = _client_types(sequelize, DataTypes);
  var clients = _clients(sequelize, DataTypes);
  var equipment_brands = _equipment_brands(sequelize, DataTypes);
  var equipment_endroit = _equipment_endroit(sequelize, DataTypes);
  var equipment_ext_types = _equipment_ext_types(sequelize, DataTypes);
  var equipment_int_types = _equipment_int_types(sequelize, DataTypes);
  var equipment_locations = _equipment_locations(sequelize, DataTypes);
  var equipment_produit = _equipment_produit(sequelize, DataTypes);
  var equipment_types = _equipment_types(sequelize, DataTypes);
  var equipments = _equipments(sequelize, DataTypes);
  var gas_types = _gas_types(sequelize, DataTypes);
  var intervention_question_types = _intervention_question_types(sequelize, DataTypes);
  var intervention_types = _intervention_types(sequelize, DataTypes);
  var interventions = _interventions(sequelize, DataTypes);
  var interventions_questions = _interventions_questions(sequelize, DataTypes);
  var interventions_questions_equipment = _interventions_questions_equipment(sequelize, DataTypes);
  var nfc_tags = _nfc_tags(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var sites = _sites(sequelize, DataTypes);
  var user_types = _user_types(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  clients.belongsTo(client_types, { as: "type", foreignKey: "type_id"});
  client_types.hasMany(clients, { as: "clients", foreignKey: "type_id"});
  sites.belongsTo(clients, { as: "client", foreignKey: "client_id"});
  clients.hasMany(sites, { as: "sites", foreignKey: "client_id"});
  equipments.belongsTo(equipment_brands, { as: "equipment_brand", foreignKey: "equipment_brand_id"});
  equipment_brands.hasMany(equipments, { as: "equipments", foreignKey: "equipment_brand_id"});
  equipment_types.belongsTo(equipment_endroit, { as: "endroit", foreignKey: "endroit_id"});
  equipment_endroit.hasMany(equipment_types, { as: "equipment_types", foreignKey: "endroit_id"});
  equipments.belongsTo(equipment_endroit, { as: "endroit", foreignKey: "endroit_id"});
  equipment_endroit.hasMany(equipments, { as: "equipments", foreignKey: "endroit_id"});
  interventions.belongsTo(equipment_endroit, { as: "endroit", foreignKey: "endroit_id"});
  equipment_endroit.hasMany(interventions, { as: "interventions", foreignKey: "endroit_id"});
  equipments.belongsTo(equipment_ext_types, { as: "unite_exterieur_type", foreignKey: "unite_exterieur_type_id"});
  equipment_ext_types.hasMany(equipments, { as: "equipments", foreignKey: "unite_exterieur_type_id"});
  equipments.belongsTo(equipment_int_types, { as: "unite_interieur_type", foreignKey: "unite_interieur_type_id"});
  equipment_int_types.hasMany(equipments, { as: "equipments", foreignKey: "unite_interieur_type_id"});
  equipments.belongsTo(equipment_locations, { as: "location", foreignKey: "location_id"});
  equipment_locations.hasMany(equipments, { as: "equipments", foreignKey: "location_id"});
  equipment_endroit.belongsTo(equipment_produit, { as: "produit", foreignKey: "produit_id"});
  equipment_produit.hasMany(equipment_endroit, { as: "equipment_endroits", foreignKey: "produit_id"});
  equipments.belongsTo(equipment_produit, { as: "produit", foreignKey: "produit_id"});
  equipment_produit.hasMany(equipments, { as: "equipments", foreignKey: "produit_id"});
  interventions.belongsTo(equipment_produit, { as: "produit", foreignKey: "produit_id"});
  equipment_produit.hasMany(interventions, { as: "interventions", foreignKey: "produit_id"});
  equipments.belongsTo(equipment_types, { as: "equipment_type", foreignKey: "equipment_type_id"});
  equipment_types.hasMany(equipments, { as: "equipments", foreignKey: "equipment_type_id"});
  interventions.belongsTo(equipment_types, { as: "equipment_type", foreignKey: "equipment_type_id"});
  equipment_types.hasMany(interventions, { as: "interventions", foreignKey: "equipment_type_id"});
  interventions_questions_equipment.belongsTo(equipment_types, { as: "equipment_type", foreignKey: "equipment_type_id"});
  equipment_types.hasMany(interventions_questions_equipment, { as: "interventions_questions_equipments", foreignKey: "equipment_type_id"});
  equipments.belongsTo(equipments, { as: "parent_equipment", foreignKey: "parent_equipment_id"});
  equipments.hasMany(equipments, { as: "equipments", foreignKey: "parent_equipment_id"});
  equipments.belongsTo(gas_types, { as: "gas_type", foreignKey: "gas_type_id"});
  gas_types.hasMany(equipments, { as: "equipments", foreignKey: "gas_type_id"});
  interventions_questions.belongsTo(intervention_question_types, { as: "question_type", foreignKey: "question_type_id"});
  intervention_question_types.hasMany(interventions_questions, { as: "interventions_questions", foreignKey: "question_type_id"});
  interventions_questions_equipment.belongsTo(intervention_question_types, { as: "question_type", foreignKey: "question_type_id"});
  intervention_question_types.hasMany(interventions_questions_equipment, { as: "interventions_questions_equipments", foreignKey: "question_type_id"});
  interventions.belongsTo(intervention_types, { as: "intervention_type", foreignKey: "intervention_type_id"});
  intervention_types.hasMany(interventions, { as: "interventions", foreignKey: "intervention_type_id"});
  interventions_questions_equipment.belongsTo(intervention_types, { as: "intervention_type", foreignKey: "intervention_type_id"});
  intervention_types.hasMany(interventions_questions_equipment, { as: "interventions_questions_equipments", foreignKey: "intervention_type_id"});
  interventions_questions.belongsTo(interventions, { as: "intervention", foreignKey: "intervention_id"});
  interventions.hasMany(interventions_questions, { as: "interventions_questions", foreignKey: "intervention_id"});
  equipments.belongsTo(nfc_tags, { as: "nfc_tag", foreignKey: "nfc_tag_id"});
  nfc_tags.hasMany(equipments, { as: "equipments", foreignKey: "nfc_tag_id"});
  equipments.belongsTo(sites, { as: "site", foreignKey: "site_id"});
  sites.hasMany(equipments, { as: "equipments", foreignKey: "site_id"});
  interventions.belongsTo(sites, { as: "site", foreignKey: "site_id"});
  sites.hasMany(interventions, { as: "interventions", foreignKey: "site_id"});
  users.belongsTo(user_types, { as: "user_type", foreignKey: "user_type_id"});
  user_types.hasMany(users, { as: "users", foreignKey: "user_type_id"});
  interventions.belongsTo(users, { as: "client", foreignKey: "client_id"});
  users.hasMany(interventions, { as: "interventions", foreignKey: "client_id"});
  interventions.belongsTo(users, { as: "technicien", foreignKey: "technicien_id"});
  users.hasMany(interventions, { as: "technicien_interventions", foreignKey: "technicien_id"});

  return {
    client_types,
    clients,
    equipment_brands,
    equipment_endroit,
    equipment_ext_types,
    equipment_int_types,
    equipment_locations,
    equipment_produit,
    equipment_types,
    equipments,
    gas_types,
    intervention_question_types,
    intervention_types,
    interventions,
    interventions_questions,
    interventions_questions_equipment,
    nfc_tags,
    personal_access_tokens,
    sessions,
    sites,
    user_types,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
