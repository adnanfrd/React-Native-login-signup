// app/details/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.subtitle}>User ID: {id}</Text>
      <Text style={styles.name}>Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, color: '#888' },
  name: { fontSize: 20, fontWeight: '600', marginTop: 8, color: '#333' },
});
