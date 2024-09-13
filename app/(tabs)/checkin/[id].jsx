import { Stack, useLocalSearchParams } from "expo-router";
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
import { demandMock } from "../../../mocks/demand";

const CheckinDetail = () => {
  const { id } = useLocalSearchParams();
  const ck = demandMock[id - 1];

  return (
    <SafeAreaView className="h-full w-full bg-primary">
      <Stack.Screen options={{ headerShown: false }} />
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
          <Tag value={ck.vehicleTag} />
        </View>
        <View className="absolute top-[160px] left-0 bg-primary p-2 z-50 w-full h-full rounded-3xl m-0">
          <View className="w-full items-center justify-center">
            <Text className="text-gray-150 text-base text-center">
              {ck.vehicle?.model || "Modelo não informado"}
            </Text>
            <Divider width={"w-[90%]"} />
          </View>

          <View className="items-end px-5">
            <Text className="text-gray-150 text-center font-bold text-xl">
              {ck.clientName}
            </Text>
            <Text className="text-gray-100 opacity-75 text-center  text-sm">
              {ck.clientPhone}
            </Text>
          </View>

          <View className="w-full px-5">
            <Text className="text-white font-bold text-2xl text-left">
              Necessidade
            </Text>
            <Text className="text-white opacity-80 text-lg ">
              {ck.demand?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckinDetail;
