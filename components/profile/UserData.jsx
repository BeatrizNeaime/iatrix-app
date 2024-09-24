import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const UserData = ({ icon, iconColor, data, otherStyles }) => {
  return (
    <View className={`w-full flex flex-row gap-2 items-center ${otherStyles}`}>
      <MaterialCommunityIcons
        name={icon}
        size={16}
        color={iconColor || "black"}
        className="m-0 p-0"
      />
      <Text>{data}</Text>
    </View>
  );
};

export default UserData;
