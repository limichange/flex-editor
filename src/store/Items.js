import { observable, action, computed } from 'mobx';
import Item from './Item'

export default class Items {
  @observable _item = []
}
