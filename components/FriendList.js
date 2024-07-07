import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FriendItem from './FriendItem';

const friendsData = [
    { id: '1', name: 'Haewon', phone: '010-123-123', description: 'Haewon is leader of NMIXX', image: require('../assets/images/haewon.jpg')},
    { id: '2', name: 'Bae', phone: '010-123-123', description: 'Bae is vocal of NMIXX', image: require('../assets/images/bae.jpg')},
    { id: '3', name: 'Faiz Kicau Mania', phone: '0812-1234-1234', description: 'Faiz is a certified racist driver', image: require('../assets/images/saiz.jpg')},
    { id: '4', name: 'Fauzan Erdin Saputra', phone: '0812-1234-1234', description: 'Fauzan is a certified racist reserve driver', image: require('../assets/images/fauzan.jpg')},
]

const FriendList = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const filteredFriends = useMemo(() => {
    if (search) {
      return friendsData.filter(friend => 
        friend.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return friendsData;
  }, [search]);

  const renderItem = ({ item }) => (
    <FriendItem 
      friend={item} 
      onPress={() => navigation.navigate('FriendDetail', { friend: item })} 
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Friends..."
        onChangeText={setSearch}
        value={search}
        lightTheme
        round
      />
      <FlatList
        data={filteredFriends}
        keyExtractor={item => item.id}
        renderItem={renderItem}
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
