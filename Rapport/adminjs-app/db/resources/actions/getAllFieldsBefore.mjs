export const modifyInputData = async (request, context) => {
  if (request.method === 'post') {
    const { record } = context;

    // Here you would perform the logic to populate 'allEntries'
    const allEntries = {};

    // Adding record.params to allEntries
    for (const [key, value] of Object.entries(request.payload || {})) {
      allEntries[key] = value;
    }

    // Assuming record.populated contains populated data you want to include
    if (record && record.populated) {
      for (const [key, populatedRecord] of Object.entries(record.populated)) {
        allEntries[key] = populatedRecord.params;
      }
    }

    // Overwrite request.payload with new data structure if needed
    request.payload = allEntries;
  }
  return request;
};
