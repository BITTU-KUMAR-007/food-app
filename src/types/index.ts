export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id?: string;
  items: CartItem[];
  totalAmount: number;
  timestamp: Date;
  status: OrderStatus;
}

export type OrderStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type RootStackParamList = {
  Menu: undefined;
  Cart: undefined;
  OrderSummary: {
    items: CartItem[];
    total: number;
  };
  OrderConfirmation: undefined;
};