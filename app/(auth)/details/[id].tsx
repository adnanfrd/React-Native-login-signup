import { useLocalSearchParams } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f9ff" />
      <View style={styles.card}>
        <Text style={styles.title}>User Details</Text>
        <Text style={styles.label}>User ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 28,
    borderRadius: 16,
    width: "100%",
    shadowColor: "#003366",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginTop: 12,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#003366",
    marginTop: 4,
  },
});
