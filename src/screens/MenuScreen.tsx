import React from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { MenuItem } from '../components/MenuItem';
import { useMenu } from '../hooks/useMenu';
import { Link, useNavigation } from '@react-navigation/native';

export const MenuScreen = () => {
  
  const navigation = useNavigation();
  const { menuItems, loading, error } = useMenu();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <View style={{
          width: '80%',
          height: 50,
          borderRadius: 10,
          backgroundColor: 'black',
          alignSelf: 'center',
          marginTop: 10,
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center'
          }}>Go to Cart</Text>
        </View>
      </TouchableOpacity>
    <FlatList
      data={menuItems}
      renderItem={({ item }) => <MenuItem item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});