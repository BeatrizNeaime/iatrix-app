import { SafeAreaView, ScrollView, Text } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <Text className="text-white">Perfil</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
