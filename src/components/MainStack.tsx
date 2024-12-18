import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { MenuScreen } from "../screens/MenuScreen";
import { CartScreen } from "../screens/CartScreen";
import { OrderSummaryScreen } from "../screens/OrderSummaryScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    title: "Food Menu"
                }}
            />
            <StackNavigator.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Shopping Cart"
                }}
            />
            <StackNavigator.Screen
                name="OrderSummary"
                component={OrderSummaryScreen}
                options={{
                    title: "Order Summary"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);