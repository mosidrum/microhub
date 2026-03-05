import type { ApiResponse } from '../types';

export const createApiResponse = <T>({
  success,
  data,
  message,
  error,
}: ApiResponse<T>): ApiResponse<T> => ({
  success,
  data,
  message,
  error,
});
