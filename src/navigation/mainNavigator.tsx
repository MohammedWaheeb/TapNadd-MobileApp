import {ScreenNames} from "../config/screenNames";
import HomeStack from './homeStack';
import AuthStack from "./authStack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useEffect, useState} from "react";
import MainSettingsScreen from "../screens/settings/mainSettingScreen";


const Tab = createBottomTabNavigator();


const MainNavigator = () => {
    const [loggedIn] = useState(false)
    useEffect(() => {

    }, [])
    return (
        <>
            {
                loggedIn ? (
                        <Tab.Navigator screenOptions={{headerShown: false}}>
                            <Tab.Screen name={ScreenNames.HomeStack}
                                        component={HomeStack}/>
                            <Tab.Screen name={ScreenNames.MainSettingsScreen}
                                        component={MainSettingsScreen}/>
                        </Tab.Navigator>) :
                    <Tab.Screen name={ScreenNames.AuthStack}
                                component={AuthStack}/>

            }

        </>);
}
export default MainNavigator
