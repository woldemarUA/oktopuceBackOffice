export async function fetchOptions(
  tableName,
  parentField = null,
  parentValue = null
) {
  try {
    const url = `/api/resources/${tableName}/actions/list${
      parentField && parentValue ? `?filters.${parentField}=${parentValue}` : ''
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const formattedOptions = data.records.map((item) => {
      return {
        value: item.id,
        label: item.title,
      };
    });
    return formattedOptions;
  } catch (error) {
    console.error('Failed to fetch options:', error);
  }
}
