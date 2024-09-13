import {
  SafeAreaView,
  Image,
  View,
  ScrollView,
  StatusBar,
  Text,
} from "react-native";
import carro from "../../../assets/images/carro.png";
import Tag from "../../../components/Checkin/Tag";
import Divider from "../../../components/Divider";

const Checkin = () => {
  return (
    <SafeAreaView className="h-full w-full bg-primary">
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <View className="bg-white w-full h-[180px] absolute top-0 p-0 -z-50 items-center justify-center">
          <Image
            source={carro}
            className="-z-40 absolute left-0 top-0"
            resizeMode="contain"
          />
          <Tag value={"STM1E71"} />
        </View>
        <View className="absolute top-[160px] left-0 bg-primary py-2 z-50 w-full h-full rounded-3xl m-0">
          <View className="w-full items-center justify-center">
            <Text className="text-gray-150 text-base text-center">
              RENAULT/KWID INTENS 10MT
            </Text>
            <Divider width={"w-2/3"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkin;
