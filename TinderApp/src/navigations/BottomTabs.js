import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Chat, Profile } from '../screens';
import Colors from '../themes/Colors';
import Icons from '../themes/Icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    width: '60%',
                    marginBottom: 20,
                    alignSelf: 'center',
                    borderRadius: 30.5,
                    backgroundColor: Colors.white,
                    shadowColor: Colors.black,
                    shadowOpacity: 0.2,
                    shadowRadius: 12
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'card_focus' : 'card', height: 23.1, width: 18.42 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'chat_focus' : 'chat', height: 18.75, width: 20 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'profile_focus' : 'profile', height: 20, width: 20 })}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}