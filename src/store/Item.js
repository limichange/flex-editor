import { observable, action, computed } from 'mobx';
import camelCase from '../utils/camelCase'

export default class Item {
  constructor () {
    this.resetStyle();
  }

  @observable style = {}
  @observable id = 0

  @action setId (id) {
    this.id = id
  } 

  @action getStyleToCopyCSS() {
    let style = Object.assign({}, this.style)
    return camelCase(`.div${this.id} ` + JSON.stringify(style, null, 2))
  }

  @action getStyleToCopyJS() {
    let style = Object.assign({}, this.style)
    return JSON.stringify(style, null, 2)
  }

  @action setStyle(style) {
    this.style = style
  }

  @action updateStyle(style) {
    Object.assign(this.style, style)
  }

  @action resetStyle () {
    this.style = {
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto'
    }
  }
}
