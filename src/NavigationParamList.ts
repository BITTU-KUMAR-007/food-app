export type MainStackParamList = {
  Menu: undefined;
  Cart: undefined;
  OrderSummary: {
    items: CartItem[];
    total: number;
  };
  OrderConfirmation: undefined;
};