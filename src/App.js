import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import EditPanel from './EditPanel/EditPanel'
import PlayerPanel from './PlayerPanel'
import WrappedIframe from './WrappedIframe'

const { Header, Footer, Content } = Layout;

const headerStyle = {
  background: '#fff', 
  padding: 0,
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex"
}

const titleStyle = {
  fontSize: 24,
  marginLeft: 40
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Layout>
            <Header style={headerStyle}>
              <div style={titleStyle}>Flex Editor</div>
              <WrappedIframe src="https://ghbtns.com/github-btn.html?user=limichange&repo=flex-abc&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" />
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <EditPanel />
                <PlayerPanel />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2017 Created by <a rel="noopener noreferrer" target="_blank" href="https://github.com/limichange">Limichange</a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;