import { ApiClient } from 'adminjs';

const api = new ApiClient();

export async function fetchAllRecords(resourceId) {
  try {
    const response = await api.resourceAction({
      resourceId,
      actionName: 'list',
    });
    console.log('Records:', response.data.records);
  } catch (error) {
    console.error('Error fetching records:', error);
    throw error;
  }
}

export async function createNewRecord(resourceId, data) {
  try {
    const response = await api.recordAction({
      resourceId,
      actionName: 'new',
      payload: data,
    });
    console.log('New record created:', response.data);
  } catch (error) {
    console.error('Error creating record:', error);
  }
}

export async function getRecordById(resourceId, recordId) {
  try {
    const response = await api.recordAction({
      resourceId,
      recordId,
      actionName: 'show',
    });

    return response.data.record;
  } catch (error) {
    console.error('Error fetching record:', error);
    throw error;
  }
}

export async function updateRecord(resourceId, recordId, data) {
  try {
    const response = await api.recordAction({
      resourceId,
      recordId,
      actionName: 'edit',
      payload: data,
    });
    console.log('Record updated:', response.data);
  } catch (error) {
    console.error('Error updating record:', error);
  }
}

export async function deleteRecord(resourceId, recordId) {
  try {
    const response = await api.recordAction({
      resourceId,
      recordId,
      actionName: 'delete',
    });
    console.log('Record deleted:', response.data);
  } catch (error) {
    console.error('Error deleting record:', error);
  }
}

export async function customRecordAction(
  resourceId,
  actionName,
  recordId = null,
  payload = null
) {
  try {
    const response = await api.recordAction({
      resourceId,
      recordId,
      payload,
    });

    return response.data;
  } catch (error) {
    console.error(
      'Error performing action:',
      error.response?.data || error.message
    );
  }
}

export async function customResourceAction(
  resourceId,
  actionName,
  payload = null
) {
  try {
    const response = await api.resourceAction({
      resourceId,
      actionName,
      params: payload,
    });

    return response.data;
  } catch (error) {
    console.error(
      'Error performing action:',
      error.response?.data || error.message
    );
  }
}

export async function fetchDashboardData() {
  try {
    const response = await api.getDashboard();
    console.log('Dashboard data:', response.data);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
}
