import React from 'react'
import { View, Text, Image, TextInput, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/user_image.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/user.png')}
                    />
                    <TextInput
                        placeholder='Nombres'
                        style={styles.formTextInput}
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/my_user.png')}
                    />
                    <TextInput
                        placeholder='Apellidos'
                        style={styles.formTextInput}
                        keyboardType='default'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/email.png')}
                    />
                    <TextInput
                        placeholder='Correo Electrónico'
                        style={styles.formTextInput}
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/phone.png')}
                    />
                    <TextInput
                        placeholder='Teléfono'
                        style={styles.formTextInput}
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/password.png')}
                    />
                    <TextInput
                        placeholder='Contraseña'
                        style={styles.formTextInput}
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/confirm_password.png')}
                    />
                    <TextInput
                        placeholder='Confirmar Contraseña'
                        style={styles.formTextInput}
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text='CONFIRMAR'
                        onPress={() => ToastAndroid.show('Click', ToastAndroid.LONG)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    form: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft: 15
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '3%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },

});
