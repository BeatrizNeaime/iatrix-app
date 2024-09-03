import { Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const HomeDemand = ({ demand }) => {
  return (
    <TouchableOpacity
      className="w-full bg-white rounded-2xl border-primary border shadow-xl h-[110px] px-2 pb-4 pt-2 gap-2 m-0 mt-2"
      onPress={() => router.push(`/(tabs)/checkin`)}
    >
      <View className="flex-row justify-between px-2 w-100 shadow-xl ">
        <View className="relative bg-gray-200 rounded-lg w-1/2 items-center justify-center h-full">
          <View className="bg-primary rounded-t-lg h-3 w-full absolute top-0"></View>
          <Text className="text-2xl font-extrabold">{demand.vehicleTag}</Text>
        </View>

        <View className="items-end w-1/2">
          <Text className="text-base font-bold shadow">
            {demand.clientName}
          </Text>
          <Text className="text-xs font-bold shadow text-primary">
            {demand.clientPhone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeDemand;
