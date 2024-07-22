import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverViewScreen from "./screens/MealOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/FavoriteContext";
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="heart" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
    <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealOverViewScreen"
            component={MealOverViewScreen}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoriteContextProvider>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({});
