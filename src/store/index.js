import { useStrict } from 'mobx'
import App from './App'

useStrict(true)

export default {
  app: new App(),
} 
