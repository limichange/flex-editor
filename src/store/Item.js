import { observable, action, computed } from 'mobx';

export default class Item {
  constructor () {
    this.resetStyle();
  }

  @observable style = {}

  @action resetStyle () {
    this.style = {
      order: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'flex-start'
    }
  }
}
