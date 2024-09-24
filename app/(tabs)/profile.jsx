import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import axios from "axios";
import AppLoading from "./loading/appLoading";
import { Colors } from "@/constants/Colors";
import UserData from "./../../components/profile/UserData";
import { BoxShadow } from "@/constants/BoxShadow";
import MenuBtn from "./../../components/profile/MenuBtn";

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/?results=1&nat=br")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <View className="h-full w-full relative items-center">
          <View className="bg-primary absolute top-0 w-full h-[40%] items-center justify-center">
            <Image
              source={{ uri: user.picture.large }}
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
                borderColor: Colors.white,
                borderWidth: 5,
                borderRadius: 100,
                marginBottom: 20,
              }}
            />
            <Text className="text-white font-semibold text-2xl">
              {user.name.first} {user.name.last}
            </Text>
          </View>
          <View
            className="bg-white absolute top-[35%] w-[80%] items-center justify-center rounded-xl py-3 px-5"
            style={BoxShadow}
          >
            <UserData
              data={user.email}
              otherStyles={"mb-2"}
              icon={"email-outline"}
            />
            <UserData
              data={user.phone}
              icon={"card-account-phone-outline"}
              otherStyles={"mb-2"}
            />
            <UserData
              data={user.location.city + ", " + user.location.state}
              icon={"city"}
              otherStyles={"mb-2"}
            />

            <MenuBtn
              label={"Editar Perfil"}
              icon={"account-cog-outline"}
              otherStyles={"mt-3"}
            />
            <MenuBtn label={"Sair"} icon={"logout-variant"} iconColor={"red"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
