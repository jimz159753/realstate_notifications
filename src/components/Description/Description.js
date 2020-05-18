import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default class Description extends Component {
    render() {
        return (
            <View style={styles.descContainer}>
                <Text style={styles.header}>Descripción</Text>
                <Text style={styles.desc}> Este portal fue desarrollado con el propósito de informar sugerencias, quejas y noticias de manera óptima para mantener a la comunidad alerta. </Text>
                <View style={styles.reg}>
                    <Text>Luis Jiménez</Text>
                    <FontAwesomeIcon icon={faCopyright} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    descContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E7E8EA'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 15
    },
    desc: {
        textAlign: 'center',
        marginHorizontal: 5
    },
    reg: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        justifyContent: 'space-between'
    }
});