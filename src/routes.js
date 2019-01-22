import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'

// import Home from '~/scenes/Home'
import List from '~/scenes/List'
import Details from '~/scenes/Details'

const Routes = createAppContainer(
  createSwitchNavigator({
    // Home,
    Books: createStackNavigator(
      {
        List,
        Details,
      }, {
        headerMode: 'none',
      },
    ),
  }),
)

export default Routes
