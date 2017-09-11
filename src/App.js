import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import EditPanel from './EditPanel'
import PlayerPanel from './PlayerPanel'

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <EditPanel />
                <PlayerPanel />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2017 Created by Limichange
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;