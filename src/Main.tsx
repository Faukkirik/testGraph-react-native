import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStack} from "./screens/types/type";
import {GraphScreen} from "./screens/graph-screen/GraphScreen";
import {JournalScreen} from "./screens/journal-screen/JournalScreen";
import {MainScreen} from "./screens/main-screen/MainScreen";
import {MainSvg} from "./svg/tab-svg/MainSVG";
import {JournalSvg} from "./svg/tab-svg/JournalSVG";
import {GraphSvg} from "./svg/tab-svg/GraphSVG";


const Tab = createBottomTabNavigator<RootStack>();
export const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Graph'}
            screenOptions={{
                tabBarActiveTintColor: 'black',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={'Main'}
                component={MainScreen}
                options={{
                    tabBarLabel: 'Главная',
                    tabBarIcon: ({color='grey', size=24})=>(
                        <MainSvg color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name={'Journal'}
                component={JournalScreen}
                options={{
                    tabBarLabel: 'Дневник',
                    tabBarIcon: ({color='grey', size=24})=>(
                        <JournalSvg color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name={'Graph'}
                component={GraphScreen}
                options={{
                    tabBarLabel: 'Графики',
                    tabBarIcon: ({color='grey', size=24})=>(
                        <GraphSvg color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});