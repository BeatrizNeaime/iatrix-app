import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: Colors.purple.lighter,
          tabBarActiveTintColor: Colors.purple.dark,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.purple.bar,
            borderTopColor: Colors.purple.dark,
            borderTopWidth: 2,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Início",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="storefront-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="checkin"
          options={{
            title: "Checkin",
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
