var DataTypes = require("sequelize").DataTypes;
var _client_types = require("./client_types");
var _clients = require("./clients");
var _equipment_brands = require("./equipment_brands");
var _equipment_ext_types = require("./equipment_ext_types");
var _equipment_int_types = require("./equipment_int_types");
var _equipment_locations = require("./equipment_locations");
var _equipment_types = require("./equipment_types");
var _equipments = require("./equipments");
var _gas_types = require("./gas_types");
var _intervention_types = require("./intervention_types");
var _interventions = require("./interventions");
var _nfc_tags = require("./nfc_tags");
var _personal_access_tokens = require("./personal_access_tokens");
var _sessions = require("./sessions");
var _sites = require("./sites");

function initModels(sequelize) {
  var client_types = _client_types(sequelize, DataTypes);
  var clients = _clients(sequelize, DataTypes);
  var equipment_brands = _equipment_brands(sequelize, DataTypes);
  var equipment_ext_types = _equipment_ext_types(sequelize, DataTypes);
  var equipment_int_types = _equipment_int_types(sequelize, DataTypes);
  var equipment_locations = _equipment_locations(sequelize, DataTypes);
  var equipment_types = _equipment_types(sequelize, DataTypes);
  var equipments = _equipments(sequelize, DataTypes);
  var gas_types = _gas_types(sequelize, DataTypes);
  var intervention_types = _intervention_types(sequelize, DataTypes);
  var interventions = _interventions(sequelize, DataTypes);
  var nfc_tags = _nfc_tags(sequelize, DataTypes);
  var personal_access_tokens = _personal_access_tokens(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var sites = _sites(sequelize, DataTypes);

  clients.belongsTo(client_types, { as: "type", foreignKey: "type_id"});
  client_types.hasMany(clients, { as: "clients", foreignKey: "type_id"});
  sites.belongsTo(clients, { as: "client", foreignKey: "client_id"});
  clients.hasMany(sites, { as: "sites", foreignKey: "client_id"});
  equipments.belongsTo(equipment_brands, { as: "equipment_brand", foreignKey: "equipment_brand_id"});
  equipment_brands.hasMany(equipments, { as: "equipments", foreignKey: "equipment_brand_id"});
  equipments.belongsTo(equipment_ext_types, { as: "unite_exterieur_type", foreignKey: "unite_exterieur_type_id"});
  equipment_ext_types.hasMany(equipments, { as: "equipments", foreignKey: "unite_exterieur_type_id"});
  equipments.belongsTo(equipment_int_types, { as: "unite_interieur_type", foreignKey: "unite_interieur_type_id"});
  equipment_int_types.hasMany(equipments, { as: "equipments", foreignKey: "unite_interieur_type_id"});
  equipments.belongsTo(equipment_types, { as: "equipment_type", foreignKey: "equipment_type_id"});
  equipment_types.hasMany(equipments, { as: "equipments", foreignKey: "equipment_type_id"});
  equipments.belongsTo(equipments, { as: "parent_equipment", foreignKey: "parent_equipment_id"});
  equipments.hasMany(equipments, { as: "equipments", foreignKey: "parent_equipment_id"});
  equipments.belongsTo(gas_types, { as: "gas_type", foreignKey: "gas_type_id"});
  gas_types.hasMany(equipments, { as: "equipments", foreignKey: "gas_type_id"});
  equipments.belongsTo(nfc_tags, { as: "nfc_tag", foreignKey: "nfc_tag_id"});
  nfc_tags.hasMany(equipments, { as: "equipments", foreignKey: "nfc_tag_id"});
  equipments.belongsTo(sites, { as: "site", foreignKey: "site_id"});
  sites.hasMany(equipments, { as: "equipments", foreignKey: "site_id"});

  return {
    client_types,
    clients,
    equipment_brands,
    equipment_ext_types,
    equipment_int_types,
    equipment_locations,
    equipment_types,
    equipments,
    gas_types,
    intervention_types,
    interventions,
    nfc_tags,
    personal_access_tokens,
    sessions,
    sites,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
