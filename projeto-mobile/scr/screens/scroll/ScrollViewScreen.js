import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1} - Exemplo com ScrollView`);

export default function ScrollViewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {items.map((item) => (
          <Text key={item} style={styles.item}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  content: {
    padding: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
