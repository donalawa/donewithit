import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen 
        name="Feed" 
        component={FeedNavigator}
        options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" color={color} size={size}/>
        }}
        />
        <Tab.Screen 
        name="ListingEdit" 
        component={ListingEditScreen}
        options={({ navigation }) => ({
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")}/>,
            tabBarIcon: ({ size, color}) => <MaterialCommunityIcons name="plus-circle" size={size} color={color}/>
        })}
        />
        <Tab.Screen name="AccountNavigator" component={AccountNavigator}/>
    </Tab.Navigator>
)

export default AppNavigator;