import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { observer } from 'mobx-react'
import ContainerPanel from './ContainerPanel'
import ItemsPanel from './ItemsPanel'
import ItemPanel from './ItemPanel'

@observer
export default class EditPanel extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <ContainerPanel />
        </Col>
        <Col span={8}>
          <ItemsPanel />
        </Col>
        <Col span={8}>
          <ItemPanel />
        </Col>
      </Row>
    )
  }
}
