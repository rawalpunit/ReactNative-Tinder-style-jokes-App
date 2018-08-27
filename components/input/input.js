import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'; //TouchableHighlight = button

export default class Input extends React.Component {

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
        
    } 
})
