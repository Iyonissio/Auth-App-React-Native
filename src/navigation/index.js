import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens ou routes
import SigninScreen from '../screens/SignInScreen/SigninScreen';
import SignupScreen from '../screens/SignUpScreen/SignupScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOption={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SigninScreen} />
                <Stack.Screen name="SignUp" component={SignupScreen} />
                <Stack.Screen name="ConfirmPassword" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation