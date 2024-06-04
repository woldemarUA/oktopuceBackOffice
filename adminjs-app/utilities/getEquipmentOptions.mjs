export const getOptions = async (model) => {
  const produits = await model.findAll({
    attributes: ['id', 'name'],
  });

  const results = produits.map((produit) => ({
    value: produit.id,
    label: produit.name,
  }));
  return results;
};
