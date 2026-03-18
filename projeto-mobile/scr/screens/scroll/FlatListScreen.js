import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

const data = Array.from({ length: 30 }, (_, i) => ({ id: String(i + 1), title: `Elemento ${i + 1}` }));

const renderItem = ({ item }) => (
  <Text style={styles.item}>{item.title}</Text>
);

export default function FlatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  content: {
    padding: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ececec',
  },
});
