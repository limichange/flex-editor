import React, { Component } from 'react';
import { Layout, Select, InputNumber, Card, Row, Col, Form, Menu, Dropdown, Icon } from 'antd';
import store from '../store'
import { observer } from 'mobx-react'
import ContainerPanel from './ContainerPanel'
import ItemsPanel from './ItemsPanel'
const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <ContainerPanel />
          </Col>
          <Col span={8}>
            <ItemsPanel />
          </Col>
          <Col span={8}>
            <Card title="Models">
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
