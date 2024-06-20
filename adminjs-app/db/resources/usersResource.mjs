import { UsersModel } from '../entities/Users/UserModel.mjs';
import { UserTypesModel } from '../entities/Users/UserTypesModel.mjs';
import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const usersNavigation = {
  name: 'Users Configuration  ',
};

const testClient = {
  name: 'Test Client',
};

export function creatUserResourceOptions(userType) {
  console.log('Creating resource options for user type:', userType);
  return {
    resource: UsersModel,
    options: {
      navigation: testClient, // Customize navigation here
    },
    actions: {
      list: {
        before: async (request, context) => {
          if (!request.query.filters) {
            request.query.filters = {};
          }
          // Ensuring the filter is set correctly for AdminJS to understand
          request.query.filters.user_type_id = userType.toString();
          return request;
        },
      },
    },
  };
}
// export function creatUserResourceOptions(userType) {
//   console.log('************************');
//   console.log(typeof userType);
//   console.log('************************');
//   return {
//     resource: UsersModel,
//     options: {
//       navigation: testClient,
//     },
//     actions: {
//       list: {
//         before: async (request, context) => {
//           request.query = {
//             ...request.query,
//             'filters.user_type_id': userType, // Filter by userType dynamically
//           };
//           return request;
//         },
//       },
//     },
//   };
// }

export const UsersResource = () => {
  return {
    resource: UsersModel,

    options: {
      navigation: usersNavigation,
      // navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const UserTypesResource = () => {
  return {
    resource: UserTypesModel,
    options: {
      navigation: usersNavigation,
      // navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};
