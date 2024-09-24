import { View } from "react-native";
import LottieView from "lottie-react-native";
import animate from "../../../assets/lottie/loading.json";

const AppLoading = () => {
  return (
    <View className="h-full w-full bg-white items-center justify-center">
      <LottieView
        source={animate}
        autoPlay
        loop
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
};

export default AppLoading;
