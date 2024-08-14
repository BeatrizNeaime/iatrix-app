import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {} from "react-native";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.orange,
          tabBarInactiveTintColor: Colors.gray.light,
          tabBarStyle: {
            backgroundColor: Colors.purple.light,
            paddingVertical: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Início",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="checkin"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
