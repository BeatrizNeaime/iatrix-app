import {} from "react-native";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import UserData from "./UserData";

const MenuBtn = ({ label, handlePress, icon, iconColor, otherStyles }) => {
  return (
    <TouchableOpacity
      className={`w-full ${otherStyles}`}
      style={{
        borderTopColor: Colors.gray.light,
        borderTopWidth: 1,
        paddingTop: 10,
        borderBottomColor: Colors.gray.light,
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}
      onPress={handlePress}
    >
      <UserData data={label} icon={icon} iconColor={iconColor} />
    </TouchableOpacity>
  );
};

export default MenuBtn;
