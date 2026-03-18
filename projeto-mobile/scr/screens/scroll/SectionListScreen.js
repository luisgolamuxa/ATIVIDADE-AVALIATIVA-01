import React from 'react';
import { SafeAreaView, SectionList, Text, StyleSheet, View } from 'react-native';

const sections = [
  { title: 'Frutas', data: ['Maçã', 'Banana', 'Laranja', 'Abacaxi'] },
  { title: 'Legumes', data: ['Cenoura', 'Batata', 'Tomate', 'Pepino'] },
  { title: 'Verduras', data: ['Alface', 'Couve', 'Espinafre', 'Rúcula'] },
];

export default function SectionListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  content: {
    padding: 16,
  },
  sectionHeader: {
    backgroundColor: '#a5d6a7',
    padding: 10,
    borderRadius: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  item: {
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderColor: '#c8e6c9',
    borderWidth: 1,
  },
});
