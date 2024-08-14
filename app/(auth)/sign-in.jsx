import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo laranja.png";
import FormField from "./../../components/FormField";
import { useState } from "react";
import Button from "./../../components/Button";
import { router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    credential: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    if (form.credential === "gp@audax.com") {
      if (form.password === "1234") {
        console.log("Login realizado com sucesso");
      }
    } else {
      console.log("Usuário não encontrado");
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(tabs)/home");
    }, 2000);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-start h-full px-4 my-6">
          <View className="justify-center items-center">
            <Image
              source={logo}
              className="w-[110px] h-[74px]"
              resizeMode="contain"
            />
          </View>

          <Text className="text-white text-2xl text-semibold mt-5 ">
            Entrar
          </Text>

          <FormField
            label={"Credencial"}
            value={form.credential}
            placeholder={"e-mail ou CPF"}
            handleChangeText={(e) => {
              setForm({ ...form, credential: e });
            }}
            otherStyles="mt-9"
          />
          <FormField
            label={"Senha"}
            value={form.password}
            placeholder={"****"}
            secureText={true}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-3"
          />

          <Button
            otherStyles={"mt-7"}
            label={"Entrar"}
            isLoading={isSubmitting}
            handleClick={() => router.push("/(tabs)/home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
