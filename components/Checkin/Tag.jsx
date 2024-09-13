import { View, Text, Image } from "react-native";
import mercosul from "../../assets/images/mercosul.png";
import brasil from "../../assets/images/brasil.png";

const Tag = ({ value }) => {
  return (
    <View className="w-2/3 bg-white h-[80px] m-0 mt-5 relative rounded-2xl items-center justify-center shadow-xl border-gray-400 border-[1px]">
      <View className="bg-blue-600 w-full h-[28px] rounded-t-2xl flex-row items-center justify-between px-4">
        <Image source={mercosul} resizeMode="contain" />
        <Text className="text-white text-lg font-bold uppercase">Brasil</Text>
        <Image source={brasil} className="h-4" resizeMode="contain" />
      </View>
      <View className="w-full h-[65px] relative ">
        <Text className="font-bold text-[40px] text-center">{value}</Text>
        <Text className="uppercase font-bold absolute bottom-2 left-3">br</Text>
      </View>
    </View>
  );
};

export default Tag;
