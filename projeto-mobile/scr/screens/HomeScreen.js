import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';
import homeStyles from '../styles/homeStyles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={homeStyles.containerCenter}>
        <View style={globalStyles.card}>
          <Text style={globalStyles.title}>Bem-vindo ao aplicativo.</Text>
          <Text style={globalStyles.subtitle}>
          Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
