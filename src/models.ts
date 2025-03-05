export type LoginBody = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  authorities: [string];
  email: string;
  userName: string;
}

export interface RegisterUser {
  password: string;
  authorities: [string];
  email: string;
  userName: string;
}

export interface LoginResponse extends User {
  token: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  store_id: number;
}

export interface Store {}
