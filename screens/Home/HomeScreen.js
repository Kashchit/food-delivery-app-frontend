import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, StyleSheet } from 'react-native';
import RestaurantCard from '../../components/RestaurantCard';

const HomeScreen = ({ navigation }) => {
  const [vegMode, setVegMode] = useState(false);
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Das Kitchen', isVeg: true, price: 100 },
    { id: 2, name: 'Loaded Pizza', isVeg: false, price: 175 },
    { id: 3, name: 'Veg Fix Thali', isVeg: true, price: 100 },
    { id: 4, name: 'Spicy Bites', isVeg: false, price: 120 },
  ]);

  const toggleVegMode = () => setVegMode((prevState) => !prevState);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    vegMode ? restaurant.isVeg : true
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Foodie</Text>
        <Text style={styles.locationText}>Ziffy HQ, Paniphokhari</Text>
      </View>

      <View style={styles.vegModeContainer}>
        <Text style={styles.vegModeText}>Veg Mode</Text>
        <Switch value={vegMode} onValueChange={toggleVegMode} />
      </View>

      <View>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    padding: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 18,
    marginTop: 10,
  },
  vegModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  vegModeText: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default HomeScreen;
