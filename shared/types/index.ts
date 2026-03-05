// Shared typescript types definitions for all microservices
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  UpdatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
}
