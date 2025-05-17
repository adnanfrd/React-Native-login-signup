// app/index.tsx
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>

      {/* ✅ Use asChild for custom components like Text */}
      <Link
        href={{
          pathname: '/details/[id]' as const, // 👈 Add `as const` for TS
          params: { id: 'bacon' },
        }}
        asChild
      >
        <Text style={styles.link}>View user details</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, marginBottom: 16 },
  link: { fontSize: 18, color: 'blue', textDecorationLine: 'underline' },
});
