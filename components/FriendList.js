import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FriendItem from './FriendItem';

const friendsData = [
    { id: '1', name: 'Haewon', phone: '010-123-123', description: 'Haewon is leader of NMIXX', image: require('../assets/images/haewon.jpg')},
    { id: '2', name: 'Bae', phone: '010-123-123', description: 'Bae is vocal of NMIXX', image: require('../assets/images/bae.jpg')},
    { id: '3', name: 'Faiz Kicau Mania', phone: '0812-1234-1234', description: 'Faiz is a certified racist driver', image: require('../assets/images/saiz.jpg')},
    { id: '4', name: 'Fauzan Erdin Saputra', phone: '0812-1234-1234', description: 'Fauzan is a certified racist reserve driver', image: require('../assets/images/fauzan.jpg')},
]

const FriendList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendItem friend={item} onPress={() => navigation.navigate('FriendDetail', { friend: item })} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FriendList;
