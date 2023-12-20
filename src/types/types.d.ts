export interface RootState {
    modal: any;
    order: {
      items: YourItemType[];
    };
}

export interface OrderItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  quantity: string;
  total: string;
  status: string;
}
  
export interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }