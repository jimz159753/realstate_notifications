import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import axios from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMessages, removeMessage } from '../../redux/actions';

function Item({ title, description, removeAdv, id, date, navigation }) {
    return (
        <View style={styles.item}>
            <View style={styles.iconsContainer}>
                <FontAwesomeIcon icon={faEdit} onPress={() => navigation.navigate('Modify', { id })} />
                <FontAwesomeIcon icon={faFolderMinus} onPress={() => removeAdv(id)} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.date}>{moment(date).format('DD/MM/YYYY')}</Text>
        </View>
    );
}

class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
        this.removeAdv = this.removeAdv.bind(this)
    }

    componentDidMount() {
        this.props.actions.showMessages()
    }

    removeAdv(id) {
        this.props.actions.removeMessage(id)
        this.props.actions.showMessages()
    }

    render() {
        const { navigation, messages } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Avisos</Text>
                {messages && <FlatList
                    data={messages}
                    renderItem={({ item }) => <Item
                        date={item.createdAt}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        removeAdv={this.removeAdv}
                        navigation={navigation} />}
                    keyExtractor={item => item._id}
                />}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.user_information.messages
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        showMessages,
        removeMessage
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Show);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E8EA'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 15
    },
    item: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#F2F2F2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        marginBottom: 10
    },
    description: {
        fontSize: 10
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 45,
        alignSelf: 'flex-end'
    },
    date: {
        alignSelf: 'flex-end',
        fontSize: 10,
        marginTop: 15
    }
});
