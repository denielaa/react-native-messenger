'use strict';

const React = require('react-native');
const { StyleSheet } = React;

const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listview: {
    flex: 1,
    top: 64
  },
  inputMessage: {
    height: 40,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    top: 44
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: '#333',
    fontSize: 16
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#ff3333',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 54,
    flexDirection: 'row',
    paddingTop: 20
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#ff3333',
    height: 22
  },
  center: {
    textAlign: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    top: 30
  }
});

module.exports = styles;
module.exports.constants = constants;
