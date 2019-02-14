import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'

// import Home from '~/scenes/Home'
import List from '~/scenes/List'
import Details from '~/scenes/Details'

const Routes = createAppContainer(
  createSwitchNavigator({
    // Home: { screen: Home },
    Books: createStackNavigator({
      List: { screen: List },
      Details: { screen: Details },
    }),
  }),
)

export default Routes
