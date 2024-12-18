import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Order } from '../types';

export const useOrders = () => {
  const submitOrder = async (order: Omit<Order, 'id'>) => {
    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      return { success: true, orderId: docRef.id };
    } catch (error) {
      console.error('Error submitting order:', error);
      return { success: false, error: 'Failed to submit order' };
    }
  };

  return { submitOrder };
};