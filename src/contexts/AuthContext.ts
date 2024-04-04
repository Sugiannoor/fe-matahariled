import { User } from '@/features/auth/types/user';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { createContext } from 'react';


export type AuthContextValue = {
  creds: User | null;
  isLoading: boolean;
  logout: UseMutateAsyncFunction<any, any, void, any>;
};

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
