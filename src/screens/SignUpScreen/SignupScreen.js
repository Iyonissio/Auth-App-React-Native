import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';
import SigninSocialButtons from '../SignInSocialButtons/SigninSocialButtons';


const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { height } = useWindowDimensions();

    const onSignUpPressed = () => {
        console.warn("Sign Up");
    }
    
    const onSignUpPress = () => {
        console.warn(" onSignUpPress");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    }

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
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
                <CustomButtom text="Cadastrar" onPress={onSignUpPressed} />

                <Text style={styles.text}>Ao se registrar, você confirma que aceita nossos{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}> Termos de uso</Text>  {' '}e{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}> Privacidade.</Text>
                </Text>

                

                <CustomButtom
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />

                <SigninSocialButtons />
                
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
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default SignupScreen