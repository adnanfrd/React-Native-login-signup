import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      <Text style={styles.text}>User ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
