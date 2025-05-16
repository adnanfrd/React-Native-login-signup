import { useRouter } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function RootLayout() {

  const router = useRouter();
  return (
    <View>
      <Image
      source={require('../assets/images/splash-icon.png')}
      />
      <Text>LoginSignup App</Text>
      <View>
        <Button title="Get Started"/>
      </View>
    </View>
  );
}
