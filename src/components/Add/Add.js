import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMessages, addMessage } from '../../redux/actions';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }

        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setTitle(title) {
        this.setState({
            title
        })
    }

    setDescription(description) {
        this.setState({
            description
        })
    }

    onSubmit() {
        const { title, description } = this.state
        
        this.props.actions.addMessage({ title, description });
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        const { title, description } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Agregar</Text>
                <TextInput name='title' onChangeText={this.setTitle} value={title} style={styles.input} placeholder='titulo' />
                <TextInput name='description' onChangeText={this.setDescription} value={description} style={{ ...styles.input, height: 80, textAlignVertical: 'top' }} placeholder='mensaje' />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}>
                    <Text style={{ color: 'white' }}>Agregar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.user_information.messages
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addMessage,
        showMessages
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Add);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E8EA'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 15
    },
    input: {
        borderRadius: 4,
        borderBottomColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginVertical: 10
    },
    button: {
        backgroundColor: '#0B4C5F',
        height: 40,
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});