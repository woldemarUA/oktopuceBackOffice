import { UsersModel } from '../entities/Users/UserModel.mjs';
import { UserTypesModel } from '../entities/Users/UserTypesModel.mjs';
import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const usersNavigation = {
  name: 'Users Configuration  ',
};

export const UsersResource = () => {
  return {
    resource: UsersModel,

    options: {
      // navigation: usersNavigation,
      navigation: false,
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
      // navigation: usersNavigation,
      navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};
