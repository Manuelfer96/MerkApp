export type LoginBody = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  authorities: [string];
  email: string;
  userName: string;
}

export type RegisterUser = {
  password: string;
  authorities: [string];
  email: string;
  userName: string;
}

export type LoginResponse extends User ={
  token: string;
}

export type Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  store_id: number;
}

export type Store {}
