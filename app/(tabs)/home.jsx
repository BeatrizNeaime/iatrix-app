import { FlatList, SafeAreaView, Text, View } from "react-native";
import HomeDemand from "./../../components/HomeDemand";
import { demandMock } from "../../mocks/demand";
import FormField from "@/components/FormField";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SafeAreaView className="bg-white h-full py-4">
      <View className="bg-primary h-1/5 rounded-b-3xl w-full items-center justify-center">
        <View className="items-start w-full px-4 gap-0">
          <Text className="text-white font-bold shadow m-0 p-0 text-[32px]">
            Pesquisar
          </Text>
          <FormField
            value={search}
            handleChangeText={(e) => handleChange(e)}
            placeholder={"Pesquisar por nome"}
          />
        </View>
      </View>
      <View className="w-full h-full px-4 my-6">
        <FlatList
          data={demandMock}
          renderItem={({ item }) => <HomeDemand demand={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
