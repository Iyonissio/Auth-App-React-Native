import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButtom from '../../components/CustomButtom';


const SigninSocialButtons = () => {

    const onSignInFacebook = () => {
        console.warn("Sign in Facebook");
    }

    const onSignInGoogle = () => {
        console.warn("Sign in Google");
    }

    const onSignInApple = () => {
        console.warn("Sign in Apple");
    }

    return (
        <>
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
        </>
    );
};

export default SigninSocialButtons