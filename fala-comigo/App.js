import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

const frases = [
  "Estou com fome",
  "Estou com sede",
  "Quero ir ao banheiro",
  "Estou com sono",
  "Estou com dor de cabeça",
  "Não quero comer mais",
  "Estou com dor no corpo",
  "Eu gosto de você",
  "Obrigado",
  "Até logo",
  "Desculpe",
  "Quero tomar banho"
];

export default function App() {
  const falar = (texto) => {
    Speech.speak(texto, { language: 'pt-BR' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fala Comigo</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {frases.map((frase, index) => (
          <TouchableOpacity key={index} style={styles.botao} onPress={() => falar(frase)}>
            <Text style={styles.textoBotao}>{frase}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#4a90e2',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

