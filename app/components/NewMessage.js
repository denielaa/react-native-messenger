'use strict';

import React, { Text, View, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';

let NewMessage = React.createClass({

  propTypes: {
    onAddClick: React.PropTypes.func.isRequired
  },

  getInitialState(){
    return { text: ""};
  },

  _handlePress(){
    this.props.onAddClick(this.state.text);
    this.setState({text: ""});
  },

  render(){
    return(
      <View>
        <TextInput
          style={styles.inputMessage}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Enter new message'}
          />
        <TouchableHighlight
          onPress={this.props._handlePress}>
          <Text style={styles.actionText}>{'test'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

export default NewMessage;
