import { instance } from '../index';

type AuthPropsType = {
  email: string;
  password: string;
};

export const userApi = {
  signIn: async (params: AuthPropsType): Promise<UserType> => {
    const response = await instance.get('/elastic', { params });
    return response.data.data.items.materials as UserType;
  },
  signUp: async (params: AuthPropsType): Promise<UserType> => {
    const response = await instance.get('/elastic', { params });
    return response.data.data.items.materials as UserType;
  },
};
