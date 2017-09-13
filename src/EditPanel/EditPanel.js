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
  onChange(e) {
    store.app.setNum(e)
  }
  handleChange(value) {
    store.app.updateContainerStyle({
      flexDirection: value
    })
  }
  handleFlexWrapChange(value) {
    store.app.updateContainerStyle({
      flexWrap: value
    })
  }
  handleJustifyContentChange(value) {
    store.app.updateContainerStyle({
      justifyContent: value
    })
  }
  handleAlignItemsChange(value) {
    store.app.updateContainerStyle({
      alignItems: value
    })
  }
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
