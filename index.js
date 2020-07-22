/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Navigation/navigation';
//import App from './src/Dashboard/dashboard';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
