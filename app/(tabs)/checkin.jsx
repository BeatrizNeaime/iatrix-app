import { SafeAreaView, Image, View } from "react-native";
import carro from "../../assets/images/carro.png";

const Checkin = () => {
  return (
    <SafeAreaView className="h-full bg-primary justify-center items-center relative">
      <View className="bg-white w-full h-[180px] absolute top-0 p-0 -z-50 items-center justify-center">
        <Image
          source={carro}
          className="-z-40 absolute left-0 top-0"
          resizeMode="contain"
        />
        <View className="w-2/3 bg-orange h-2/3"></View>
      </View>
      <View className="absolute top-[180px] bg-primary z-50 w-full h-full rounded-t-3xl"></View>
    </SafeAreaView>
  );
};

export default Checkin;
