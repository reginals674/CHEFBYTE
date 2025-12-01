import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>CHEFBYTE</Text>
          <Text style={styles.subtitle}>Recetas Sustentables</Text>
        </View>

        <View style={styles.profileIcon}>
          <Text style={{ fontSize: 22 }}>👤</Text>
        </View>
      </View>

      {/* PREGUNTA */}
      <Text style={styles.question}>¿Qué ingredientes tienes hoy?</Text>

      {/* INPUT */}
      <TextInput
        placeholder="Agregar ingrediente"
        style={styles.input}
        placeholderTextColor="#777"
      />



      {/* TITULO */}
      <Text style={styles.sectionTitle}>Recetas recomendadas</Text>

      {/* TARJETAS */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>No hay recetas disponibles</Text>
      </TouchableOpacity>


      {/* FOOTER — BOTONES */}
      <View style={styles.footer}>

        <TouchableOpacity
          style={styles.footerItem}
          activeOpacity={0.6}
          onPress={() => console.log("Buscar")}
        >
          <Text style={styles.footerIcon}>🔍</Text>
          <Text style={styles.footerText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          activeOpacity={0.6}
          onPress={() => console.log("Guardados")}
        >
          <Text style={styles.footerIcon}>💚</Text>
          <Text style={styles.footerText}>Guardados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerItem}
          activeOpacity={0.6}
          onPress={() => console.log("Filtros")}
        >
          <Text style={styles.footerIcon}>⚙️</Text>
          <Text style={styles.footerText}>Filtros</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },

  header: {
    backgroundColor: '#B4D96E',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0A4825'
  },

  subtitle: {
    marginTop: -4,
    fontSize: 12,
    color: '#0A4825',
    fontWeight: '500'
  },

  profileIcon: {
    width: 42,
    height: 42,
    backgroundColor: '#D9E6B5',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center'
  },

  question: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700'
  },

  input: {
    backgroundColor: '#FFF',
    height: 45,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#CCC'
  },

  chipContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    gap: 10,
    marginTop: 10
  },

  chip: {
    backgroundColor: '#B4D96E',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 6
  },

  chipText: {
    color: '#0A4825',
    fontWeight: '700'
  },

  sectionTitle: {
    marginTop: 28,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700'
  },

  card: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#dddddd4d',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#5151519a',
    margin: 130
  },



  footer: {
    marginTop: 40,
    backgroundColor: '#B4D96E',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  footerItem: {
    alignItems: 'center'
  },

  footerIcon: {
    fontSize: 24
  },

  footerText: {
    fontSize: 14,
    marginTop: 2,
    color: '#0A4825',
    fontWeight: '700'
  }
});
