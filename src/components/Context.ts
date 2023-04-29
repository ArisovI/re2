import { createContext } from "react";
interface IContextValue {
  products: any[];
  categoryId: number;
  setCategoryId: (e: any) => void;
  search: any;
  setSearch: (e: any) => void;
  sortBy: string;
  cart: any;
  setSortBy: (e: any) => void;
  state: any;
  dispatch: (e: any) => void;
  email: string;
  setEmail: (e: any) => void;
  pass: string;
  setPass: (e: any) => void;
  checkLogin: () => void;
  userInfo: any;
  userActive: any;
  logOut: () => void;
}

export const Context = createContext<IContextValue | null>(null);
