import { FlatList, Image, SafeAreaView, View } from "react-native";
import logo from "../../assets/images/logo laranja.png";
import HomeDemand from "./../../components/HomeDemand";
import { data } from "./../../constants/data";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-start items-center h-full px-4 my-6">
        <View className="items-start justify-start w-full mb-4">
          <Image
            source={logo}
            className="w-[60px] h-[44.4px] mt-4"
            resizeMode="contain"
          />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <HomeDemand demand={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
