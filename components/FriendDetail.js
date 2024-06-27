import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const FriendDetail = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.phone}>{friend.phone}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25, // Add gap between description and button
  },
  buttonContainer: {
    marginTop: 25,
  },
});

export default FriendDetail;
