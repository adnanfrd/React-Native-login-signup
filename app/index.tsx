import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const getStarted = () => {
    router.push("/signup");
  };

  return (
    <LinearGradient
      colors={["#6C63FF", "#A084E8"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/splash-icon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to LoginSignup</Text>
      <Text style={styles.subtitle}>Securely manage your account</Text>

      <TouchableOpacity onPress={getStarted} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#E0E0E0",
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
