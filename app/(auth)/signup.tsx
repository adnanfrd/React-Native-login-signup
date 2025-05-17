// import { useFacebookAuth } from "@/hooks/useFacebookAuth";
// import { useGoogleAuth } from "@/hooks/useGoogleAuth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Link, useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const { promptAsync: signInWithGoogle, request: googleRequest } =
//     useGoogleAuth();
//   const { promptAsync: signInWithFacebook, request: fbRequest } =
//     useFacebookAuth();

//   const handleSignup = async () => {
//     try {
//       await AsyncStorage.setItem("user", JSON.stringify({ email, password }));
//       Alert.alert("Success", "Signup successful!");
//       router.push("/login");
//     } catch {
//       Alert.alert("Error", "Failed to sign up.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>
//       <TextInput
//         placeholder="Email"
//         style={styles.input}
//         placeholderTextColor="#aaa"
//         onChangeText={setEmail}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         style={styles.input}
//         placeholderTextColor="#aaa"
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
//         <Text style={styles.signupButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <Text style={styles.or}>OR</Text>

//       <View style={styles.socialButtons}>
//         <TouchableOpacity
//           style={styles.googleButton}
//           onPress={() => signInWithGoogle()}
//           disabled={!googleRequest}
//         >
//           <Text style={styles.socialButtonText}>Continue with Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.facebookButton}
//           onPress={() => signInWithFacebook()}
//           disabled={!fbRequest}
//         >
//           <Text style={styles.socialButtonText}>Continue with Facebook</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.loginLink}>
//         Already have an account?{" "}
//         <Link href="/login" style={styles.link}>
//           Log In
//         </Link>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f4f7",
//     justifyContent: "center",
//     paddingHorizontal: 25,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 25,
//     color: "#333",
//     textAlign: "center",
//   },
//   input: {
//     height: 50,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   signupButton: {
//     backgroundColor: "#6C63FF",
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   or: {
//     textAlign: "center",
//     marginVertical: 10,
//     color: "#999",
//   },
//   socialButtons: {
//     gap: 10,
//     marginBottom: 20,
//   },
//   googleButton: {
//     backgroundColor: "#DB4437",
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   facebookButton: {
//     backgroundColor: "#4267B2",
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   socialButtonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   loginLink: {
//     textAlign: "center",
//     color: "#666",
//   },
//   link: {
//     color: "#6C63FF",
//     fontWeight: "600",
//   },
// });
