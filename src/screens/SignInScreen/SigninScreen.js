import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions , ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo.png';
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';
import SigninSocialButtons from '../SignInSocialButtons/SigninSocialButtons';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
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
    }
});

export default SigninScreen