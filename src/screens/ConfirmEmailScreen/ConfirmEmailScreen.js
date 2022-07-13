import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomButtom from '../../components/CustomButtom';
import CustomInput from '../../components/CustomInput';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');


    const { height } = useWindowDimensions();

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
    }

    const onRessendPressed = () => {
        console.warn(" onRessendPressed");
    }

    const onBackPressed = () => {
        console.warn("onBackPressed")
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirme seu email</Text>
                <CustomInput
                    placeholder="Codigo de Confirmacao"
                    value={code}
                    setValue={setCode} />

                <CustomButtom text="Confirmar" onPress={onConfirmPressed} />

                <CustomButtom
                    text="Reenviar o Codigo"
                    onPress={onRessendPressed}
                    type='SECONDARY'
                />

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

export default ConfirmEmailScreen