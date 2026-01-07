export interface AuthUser {
  username: string;
  role: 'ADMIN' | 'STAFF' | 'USER';
}
