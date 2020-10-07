import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings132221Navigator from '../features/Settings132221/navigator';
import UserProfile132214Navigator from '../features/UserProfile132214/navigator';
import Settings132213Navigator from '../features/Settings132213/navigator';
import Settings132211Navigator from '../features/Settings132211/navigator';
import SignIn2132209Navigator from '../features/SignIn2132209/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings132221: { screen: Settings132221Navigator },
UserProfile132214: { screen: UserProfile132214Navigator },
Settings132213: { screen: Settings132213Navigator },
Settings132211: { screen: Settings132211Navigator },
SignIn2132209: { screen: SignIn2132209Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
