import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreen from "../screens/RegistroScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome"component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registro" component={RegistroScreen}/>
            <Stack.Screen name="Perfil" component={PerfilScreen}/>
        </Stack.Navigator>
    )
}

export default function MainNav(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}