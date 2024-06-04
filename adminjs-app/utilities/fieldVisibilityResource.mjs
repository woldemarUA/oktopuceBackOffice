export const fieldVisibilityResource = (visibleInList, model) => {
  return Object.keys(model.rawAttributes).reduce((acc, key) => {
    acc[key] = {
      ...model.rawAttributes[key],
      isVisible: {
        list: visibleInList.includes(key),
        show: true,
        edit: true,
        filter: true,
      },
    };
    return acc;
  }, {});
};
