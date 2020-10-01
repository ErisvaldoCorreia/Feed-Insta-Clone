import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '../pages/Feed'
import Header from '../components/Header'

const AppStack = createStackNavigator()

function Routes() {

    return (
      <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen
                name='Feed'
                component={Feed}
                options={{
                    headerTitle: () => <Header />
                }}
                
            />
        </AppStack.Navigator>
    </NavigationContainer>  
    )
    
}

export default Routes;