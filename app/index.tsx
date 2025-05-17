import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const users = [
  { id: "user1", name: "Alice Johnson" },
  { id: "user2", name: "Bob Smith" },
  { id: "user3", name: "Charlie Brown" },
];

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#8e2de2", "#4a00e0"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />
      <Text style={styles.heading}>🌈 User Directory</Text>

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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 24,
    textAlign: "center",
    color: "#fff",
    letterSpacing: 1,
  },
  list: {
    gap: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: "#f0f0f0",
    opacity: 0.8,
  },
});
