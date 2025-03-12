export interface AuthState {
  user: {
    email: string;
    role: string;
    id: string;
  } | null;
  token: string | null;
}
