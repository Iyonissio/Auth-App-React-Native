import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/logo.png';
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onSignInFacebook = () => {
        console.warn("Sign in Facebook");
    }

    const onSignInGoogle = () => {
        console.warn("Sign in Google");
    }

    const onSignInApple = () => {
        console.warn("Sign in Apple");
    }

    const onSignUpPress = () => {
        console.warn(" onSignUpPress");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Criar uma conta</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername} />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />
                <CustomButtom text="Sign In" onPress={onSignInPressed} />
                <CustomButtom
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />
                <CustomButtom
                    text="Sign In Facebook"
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButtom
                    text="Sign In Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButtom
                    text="Sign In Apple"
                    onPress={onSignInApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                />

                <CustomButtom
                    text="Don't have an account? Create One"
                    onPress={onSignUpPress}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxWidth: 200,
    },

    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }


});

export default SignupScreen