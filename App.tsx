import React from "react";
import {NativeBaseProvider,} from "native-base";
import {theme} from "./src/config/theme";
import MainNavigator from "./src/navigation/mainNavigator";
import {NavigationContainer} from "@react-navigation/native";


const App = () => {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <MainNavigator/>
            </NavigationContainer>
        </NativeBaseProvider>

    );
}

// // Color Switch Component
// const ToggleDarkMode = () => {
//     const {colorMode, toggleColorMode} = useColorMode();
//     return (
//         <HStack space={2} alignItems="center">
//             <Text>Dark</Text>
//             <Switch
//                 isChecked={colorMode === "light"}
//                 onToggle={toggleColorMode}
//             />
//             <Text>Light</Text>
//         </HStack>
//     );
// }

export default App
