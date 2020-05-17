import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMessages, updateMessage } from '../../redux/actions';

class Modify extends Component {
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
        const { route, navigation } = this.props
        const id = route.params.id;
        if (title !== '' && description !== '') {
            this.props.actions.updateMessage({ id, title, description });
            this.props.actions.showMessages();
            this.setState({
                title: '',
                description: ''
            });
            navigation.goBack()
        }
    }

    render() {

        const { title, description } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Modificar</Text>
                <TextInput name='title' onChangeText={this.setTitle} value={title} style={styles.input} placeholder='titulo' />
                <TextInput name='description' onChangeText={this.setDescription} value={description} style={{ ...styles.input, height: 80, textAlignVertical: 'top' }} placeholder='mensaje' />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}>
                    <Text style={{ color: 'white' }}>Modificar</Text>
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
        updateMessage,
        showMessages
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Modify);

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