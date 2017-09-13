import React, { Component } from 'react';
import { message, Form, Menu, Dropdown, Icon } from 'antd';
import copy from '../utils/copy'

export default class PanelMenu extends Component {
  object = {}
  constructor (props) {
    super(props)
    this.object = props.object
  }
  copyCSS() {
    message.success('copy css ok')
    copy(this.object.getStyleToCopyCSS())
  }
  copyJS() {
    message.success('copy js ok')
    copy(this.object.getStyleToCopyJS())
  }
  resetStyle () {
    message.success('reset ok')
    this.object.resetStyle()
  }
  render () {
    const menu = (
      <Menu>
        <Menu.Item>
          <div onClick={e => this.copyCSS()}>Copy CSS</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={e => this.copyJS()}>Copy JS</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={e => this.resetStyle()}>Reset</div>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          More <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}
