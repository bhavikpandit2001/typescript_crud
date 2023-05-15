
import { ReactElement } from "react";

export type FormValues = {
  username: string;
  password: string;
};

export type userprops = {
  userdata: {
    id: number;
    email: string;
    username: string;
    password: string;
  }[]
}
export type userColumn = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (password: string) => ReactElement<HTMLInputElement>;
};
export type productprops = {
  product: {
    id: number,
    title: string,
    category: string,
    price: number,
    brand: string,
    thumbnail: string,
    description: string
  }[]
}
export type product = {
  title: string,
  category: string,
  price: number,
  brand: string,
  thumbnail: string,
  description: string
}
export type productColumn = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (thumbnail: string) => ReactElement<HTMLInputElement>;
  // render?: (record: product) => ReactElement<HTMLButtonElement>;
}
export interface cartprops {
    id: string,
    total: number,
    totalProducts: number,
    totalQuantity: number
}
// export type cartColumn = {
//   title: string;
//   dataIndex: string;
//   key: string;
//   render?: (record: any) => ReactElement<HTMLInputElement>;

// }

export type quotesprops = {
  id: number;
  quote: string;
  author: string;
}

export type todosprops = {
  id: number,
  todo: string,
  completed: string,
  userId: number
}
export type postprops = {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string,
  reactions: string
}

export type todoColumn = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (completed: string) => ReactElement<HTMLInputElement>;
}
export type commentprops = {
  id: number,
  body: string,
  postId: number,
 
}