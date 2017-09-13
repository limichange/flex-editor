import React, { Component } from 'react';
import { message, Form, Menu, Dropdown, Icon } from 'antd';
import copy from '../utils/copy'
import { observer } from 'mobx-react'

@observer
export default class PanelMenu extends Component {
  constructor (props) {
    super(props)
  }
  copyCSS() {
    message.success('copy css ok')
    copy(this.props.object.getStyleToCopyCSS())
  }
  copyJS() {
    message.success('copy js ok')
    copy(this.props.object.getStyleToCopyJS())
  }
  resetStyle () {
    message.success('reset ok')
    this.props.object.resetStyle()
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

    let result

    if (this.props.object.resetStyle === undefined) {
      result = <div></div>
    } else {
      result = (
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            More <Icon type="down" />
          </a>
        </Dropdown>
      )
    }

    return result
  }
}
