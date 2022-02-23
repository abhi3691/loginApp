import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios({
      me,
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
}

const renderItem = data => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ paddingRight: 20 }}>
          <Image source={{ uri: data.item.avatar }} style={styles.img} />
        </View>
        <View>
          <View>
            <Text style={styles.title}>
              {data.item.first_name} {data.item.last_name}
            </Text>
            <Text>{data.item.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  card: {
    height: 80,
    width: 350,
    elevation: 4,
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
