import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');


    const { height } = useWindowDimensions();

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
    }

    const onBackPressed = () => {
        console.warn("onBackPressed")
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Esqueci a Password</Text>
                <CustomInput
                    placeholder="Insira nome de Usuario"
                    value={username}
                    setValue={setUsername} />
                <CustomButtom text="Confirmar" onPress={onConfirmPressed} />

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

export default ForgotPasswordScreen