import { Colors } from "@/constants/Colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeDemand = ({ demand }) => {
  return (
    <View className="w-full bg-white rounded-2xl px-2 pb-4 pt-2 gap-2 mt-2">
      <View className="flex-row justify-between p-0 m-0">
        <Text className="text-xl font-bold">{demand.vehicleTag}</Text>
        <Text className="text-base text-gray-500">{demand.clientName}</Text>
      </View>
      <View className="flex-row gap-2 w-full justify-between px-4">
        <Link href={"/(tabs)/checkin"}>
          <FontAwesome
            name="dollar"
            size={22}
            color={demand.os ? Colors.green : Colors.gray.dark}
          />
        </Link>
        <Link href={"/(tabs)/checkin"}>
          <FontAwesome5
            name="car"
            size={24}
            color={demand.checkin ? Colors.green : Colors.gray.dark}
          />
        </Link>
        <FontAwesome5
          name="wrench"
          size={24}
          color={demand.checkup ? Colors.green : Colors.gray.dark}
        />
        <FontAwesome5
          name="sign-out-alt"
          size={24}
          color={demand.checkout ? Colors.green : Colors.gray.dark}
        />
        <FontAwesome5
          name="list"
          size={24}
          color={demand.tecDelivery ? Colors.green : Colors.gray.dark}
        />
      </View>
    </View>
  );
};

export default HomeDemand;
