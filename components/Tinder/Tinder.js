import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; //TouchableHighlight = button

class Card extends React.Component {
    render() {
        return(
            <View style={styles.card}>
                <Text>{this.props.jokes}</Text>
            </View>
        )
    }
}

class noMoreCards extends React.Component {
    render() {
        return(
            <View style={styles.card}>
                No More Jokes..go and get more!
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: 'Red',
        borderWidth: 2,
        backgroundColor: '#04b1ff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})