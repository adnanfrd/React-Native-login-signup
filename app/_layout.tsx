import { Button, Image, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Image
      source={require('../assets/images/splash-icon.png')}
      />
      <Text>LoginSignup App</Text>
      <Button title="Get Started"/>
    </View>
  );
}
