import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.contentStyl}>
                <Image
                    source={require('../../images/logoinicont.png')}
                    style={styles.logoImg}
                />
                <View style={styles.viewContent}>

                    <TextInput
                        autoFocus={true}
                        email-address={'email-address'}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoCapitalize={'none'}
                        style={styles.textInputStyl}
                        placeholder="Usuario" />
                    <TextInput
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        style={styles.textInputStyl}
                        placeholder="Contraseña" />
                </View>
                <View style={styles.btnContent}>
                    <TouchableOpacity onPress={() => this.authenticate(this)} style={styles.btnStyl}>
                        <Text style={styles.textBtn}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.register(this)} style={styles.btnStyl}>
                        <Text style={styles.textBtn}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentStyl: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    btnContent: {
        marginTop: 20,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    textInputStyl: {
        height: 50,
        marginVertical: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: .5,
        fontSize: 18,
        fontFamily: 'Montserrat-ExtraLight'
    },
    btnStyl: {
        width: '45%',
        height: 50,
        padding: 5,
        borderColor: '#229ac8',
        borderWidth: 1,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewContent: {
        width: '80%',
    },
    textBtn: {
        fontSize: 18,
        fontFamily: 'Montserrat-ExtraLight'
    },
    logoImg: {
        width: 300,
        height: 70,
        marginBottom: 50
    }
});