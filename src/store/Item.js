import { observable, action } from 'mobx'
import camelCase from '../utils/camelCase'

export default class Item {
  constructor() {
    this.resetStyle()
  }

  @observable style = {}
  @observable id = 0

  @action setId(id) {
    this.id = id
  }

  @action getStyleToCopyCSS() {
    const style = Object.assign({}, this.style)
    let retCSS = `.div${this.id} {\n`
    Object.keys(style)
      .forEach(key => {
        const val = style[key]
        retCSS += `  ${camelCase(key)}: ${val};\n`
      })
    retCSS += '}\n'
    return retCSS
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

  @action resetStyle() {
    this.style = {
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto'
    }
  }
}
