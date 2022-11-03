import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import FlatScreen from "./src/screens/FlatScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Flat: FlatScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
