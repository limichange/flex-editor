import { observable, action } from 'mobx'
import camelCase from '../utils/camelCase'

export default class Container {
  constructor() {
    this.resetStyle()
  }

  @observable style = {}

  @action resetStyle() {
    this.style = {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: '30px',
      display: 'flex',
      background: '#ddd',
      minHeight: 350
    }
  }

  @action getStyleToCopyJS() {
    const style = Object.assign({}, this.style)

    delete style.minHeight
    delete style.background
    delete style.marginTop

    return JSON.stringify(style, null, 2)
  }

  @action getStyleToCopyCSS() {
    const style = Object.assign({}, this.style)
    let retCSS = '.container {\n'
    Object.keys(style)
      .forEach(key => {
        const val = style[key]
        retCSS += `  ${camelCase(key)}: ${val};\n`
      })
    retCSS += '}\n'
    return retCSS
  }

  @action setStyle(style) {
    this.style = style
  }

  @action updateStyle(style) {
    Object.assign(this.style, style)
  }
}
