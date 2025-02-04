export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  role: 'admin' | 'student';
}

export interface AuthError {
  message: string;
  field?: string;
}