import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo laranja.png";
import note from "../assets/images/note.png";
import Button from "../components/Button";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={logo}
            style={{ width: 110, height: 71 }}
            resizeMode="contain"
          />
          <Image
            source={note}
            style={{ height: 300 }}
            className="w-full"
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text className="text-3xl text-white font-bold text-center">
              Eleve a qualidade do seu negócio!
            </Text>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Tenha controle dos carros que entram na sua oficina com facilidade
              e praticidade.
            </Text>
          </View>
          <Button
            label={"Quero conhecer!"}
            handleClick={() => router.push("/sign-in")}
            otherStyles={"mt-7"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
