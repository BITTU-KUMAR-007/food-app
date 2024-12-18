import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { MenuItem, Order } from '@/types';

export const menuService = {
  async getMenuItems(): Promise<MenuItem[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'menuItems'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as MenuItem));
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw new Error('Failed to fetch menu items');
    }
  },
};

export const orderService = {
  async createOrder(order: Omit<Order, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      return docRef.id;
    } catch (error) {
      console.error('Error creating order:', error);
      throw new Error('Failed to create order');
    }
  },
};