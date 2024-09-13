import { View } from "react-native";

const Divider = ({ width }) => {
  return <View className={`${width} bg-white h-[1px] my-1`}></View>;
};

export default Divider;
