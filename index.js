/**
 * @format
 */

// https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/
import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
