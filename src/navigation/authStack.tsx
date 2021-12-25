import {ScreenNames} from "../config/screenNames";
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from "../config/Screens";


const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={ScreenNames.LoginScreen}
                component={Screens.LoginScreen}
            />
        </Stack.Navigator>
    );
}
export default AuthStack
