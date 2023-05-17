
export interface FormValues {
  username: string;
  password: string;
};

export interface userprops {
    id: number;
    email: string;
    username: string;
    password: string;
}

export interface productprops {
    id: number,
    title: string,
    category: string,
    price: number,
    brand: string,
    thumbnail: string,
    description: string,
    search?: string
}

export interface orderprops {
  id: number,
  title: string,
  category: string,
  price: number,
  brand: string,
  thumbnail: string,
  description: string,
}

export interface cartprops {
    id: string,
    total: number,
    totalProducts: number,
    totalQuantity: number
}

export interface quotesprops{
  id: number;
  quote: string;
  author: string;
}

export interface todosprops {
  id: number,
  todo: string,
  completed: string,
  userId: number
}
export interface postprops {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string,
  reactions: string
}

export interface commentprops{
  id: number,
  body: string,
  postId: number,
 
}