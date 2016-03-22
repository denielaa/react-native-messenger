'use strict';

import React from 'react-native';
import styles from '../styles';

const { Component, Text, View } = React;

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.statusbar}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default StatusBar;
