import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Input from "./components/Input/Input";

export default class App extends React.Component {
  state = {
    value: '',
    jokes: [],
  };

  //function syntax
  IncreaseByOne = () => {
    console.log("pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          updateJokes={(jokes) => this.setState( { jokes: jokes } )} 
          value={this.state.value}
          onChange={(value) => this.setState( { value: value } )}
        />
        {/* access state from here for whichever Component we want */}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 100,
    height: 50
  }
});
