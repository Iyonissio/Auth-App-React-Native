import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();


    const onSubmitPressed = () => {
        console.warn('onSubmitPressed')
        navigation.navigate("SignIn")
    }

    const onBackPressed = () => {
        console.warn("onBackPressed")
        navigation.navigate("ForgotPassword")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset de Password</Text>
                <CustomInput
                    placeholder="Insira codigo de validacao"
                    value={code}
                    setValue={setCode} />
                <CustomInput
                    placeholder="Insira nova Password"
                    value={newPassword}
                    setValue={setNewPassword} />
                <CustomButtom text="Submeter" onPress={onSubmitPressed} />

                <CustomButtom
                    text="Voltar"
                    onPress={onBackPressed}
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

export default NewPasswordScreen