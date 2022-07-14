import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/cumbezalogo.png';
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';
import SigninSocialButtons from '../SignInSocialButtons/SigninSocialButtons';
import { useNavigation } from '@react-navigation/native';


const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        // Validacao de Usuario
        navigation.navigate('HomeScreen');
    }

    const onSignUpPress = () => {
        console.warn(" onSignUpPress");
        navigation.navigate('SignUp');
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername} />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButtom text="Sign In" onPress={onSignInPressed} />
                <CustomButtom
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />

                <SigninSocialButtons />

                <CustomButtom
                    text="Não tem uma conta? Crie uma"
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
        padding: 90,
        width: '70%',
        maxWidth: 150,
        maxHeight: 150,
    }
});

export default SigninScreen