import React from 'react';

export default class WrappedIframe extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (<iframe {...this.props} />);
  }
}