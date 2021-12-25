import {ScreenNames} from "../config/screenNames";
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from "../config/Screens";


const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={ScreenNames.HomeScreen}
                component={Screens.HomeScreen}
            />
        </Stack.Navigator>
    );
}
export default HomeStack
