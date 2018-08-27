import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'; //TouchableHighlight = button

export default class Input extends React.Component {

    fetchData = () => {
        console.log('this is the value from props:', this.props.value);
        fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
        .then((response) => { return response.json() })
        //we want to share this data with another component via parent state
        .then((data) => this.props.updateJokes(data.value))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    keyboardType={'numeric'}
                    value={this.props.value}
                    style={styles.input}
                    //track changes in text below
                    onChangeText={(text) => this.props.onChange(text)}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => {this.fetchData()}}
                >
                    <Text style={styles.text}>Search</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
    },
    button: {
        backgroundColor: 'green',
        height: 40,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    } 
})
