import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LogoImage = require('../../assets/images/service-logo.png');

export default function SignInScreen() {

    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');

    const onSignInPressed = () => {
        console.info("Sign In");
    }

    const onForgotPaswordPressed = () => {
        console.info("Forgot Pasword");
    }

    const onSignWithGoogle = () => {
        console.info("Sign in with google");
    }

    const onSignWithFacebook = () => {
        console.info("Sign in with facebook");
    }

    const onSignUpPressed = () => {
        console.info("Redirect to registration screen");
    }

    return (
        <View style={styles.root}>
            <Image
                source={LogoImage}
                style={styles.logo}
                resizeMode="contain"
            />
            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton
                text="Sign In"
                onPress={onSignInPressed}
            />
            <CustomButton
                text="Forgot password?"
                onPress={onForgotPaswordPressed}
                type="tetriary"
            />
            <CustomButton
                text="Sign in with Google"
                onPress={onSignWithGoogle}
                bgColor="#FAE9EA"
                fgCollor="#DD4D44"
            />
            <CustomButton
                text="Sign in with Facebook"
                onPress={onSignWithFacebook}
                bgColor="#E7EAF4"
                fgCollor="#4765A9"
            />

            <View style={styles.footerContainer}>


                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type="tetriary"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        flex: 2 / 3,
        marginTop: 28,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
});