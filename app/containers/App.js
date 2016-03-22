'use strict';

import React from 'react-native';
import { connect } from 'react-redux/native';
import { addMessage } from '../actions';
import NewMessage from '../components/NewMessage';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
import Firebase from 'firebase';
import styles from '../styles';
import StatusBar from '../components/StatusBar';

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} = React;

class reactNativeMessanger extends Component {
  constructor(props) {
    super(props);

    var firebaseRef = new Firebase('https://simple-chat-deniel.firebaseio.com');
    this.messagesRef = firebaseRef.child('messages');
    this.usersRef = firebaseRef.child('users');

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Test' }])
    })
  }

  render() {
    const { dispatch } = this.props;
    return (
      <View style={styles.appContainer}>
        <StatusBar title="Chat App" />
        <View>
          <NewMessage
            onAddClick={text =>
              dispatch(addTodo(text))
            }
            />
          <AddButton title="Send" onPress={() => {}} />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            style={styles.listview}/>
        </View>
      </View>
    )
  }
}

export default reactNativeMessanger;
