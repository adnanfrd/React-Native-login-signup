// app/index.tsx
import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  const getStarted = () => {
    router.push('/pages/signup');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash-icon.png')} style={styles.logo} />
      <Text style={styles.title}>LoginSignup App</Text>
      <Text style={styles.subtitle}>Securely manage your account</Text>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" color="#6C63FF" onPress={getStarted} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D2D2D",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
  },
});
