// app/index.tsx
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const users = [
  { id: "user1", name: "Alice Johnson" },
  { id: "user2", name: "Bob Smith" },
  { id: "user3", name: "Charlie Brown" },
  { id: "user4", name: "Diana Prince" },
  { id: "user5", name: "Ethan Hunt" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  list: { gap: 16 },
  card: {
    backgroundColor: "#f0f0f5",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "600", marginBottom: 4 },
  details: { fontSize: 14, color: "#555" },
});
