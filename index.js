/**
 * @format
 */

// https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/
import {AppRegistry, Text} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => App);
