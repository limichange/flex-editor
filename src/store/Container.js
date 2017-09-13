import { observable, action, computed } from 'mobx';
import camelCase from '../utils/camelCase'

export default class Container {
  @observable style = {}

  @action resetContainerStyle() {
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
    let style = Object.assign({}, this.Style)

    delete style.minHeight;
    delete style.background;
    delete style.marginTop;

    return JSON.stringify(style, null, 2)
  }

  @action getStyleToCopyCSS() {
    return camelCase(this.getStyleToCopyJS())
  }
}
