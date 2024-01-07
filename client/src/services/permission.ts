import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export interface CheckPhotoPermissionResult {
  granted: boolean;
  state: string;
}

export const checkPhotoPermission =
  async (): Promise<CheckPhotoPermissionResult> => {
    try {
      const result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
        return {granted: true, state: result};
      } else {
        return {granted: false, state: result};
      }
    } catch (err) {
      return {granted: false, state: 'cannot check permission'};
    }
  };

export const requestPhotoPermission =
  async (): Promise<CheckPhotoPermissionResult> => {
    try {
      const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (result === RESULTS.GRANTED) {
        return {granted: true, state: result};
      } else {
        return {granted: false, state: result};
      }
    } catch (err) {
      return {granted: false, state: 'cannot request permission'};
    }
  };
