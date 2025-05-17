import { Link } from "expo-router";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const users = [
  { id: "user1", name: "Alice Johnson" },
  { id: "user2", name: "Bob Smith" },
  { id: "user3", name: "Charlie Brown" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f9ff" />
      <Text style={styles.heading}>User List</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/details/[id]" as const,
              params: { id: item.id, name: item.name },
            }}
            asChild
          >
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>Tap to view details</Text>
            </View>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#003366",
  },
  list: {
    gap: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#003366",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#003366",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
});
