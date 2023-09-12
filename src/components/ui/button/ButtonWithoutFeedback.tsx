import React, {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';
import {Pressable, PressableProps, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";

export type ButtonPropsType = {
    text?: ReactNode
    icon?: ReactNode
    fullWidth?: boolean
    style?: StyleProp<ViewStyle>
} & PressableProps
export const ButtonWithoutFeedback = (props: ButtonPropsType) => {
    const{
        text,
        icon,
        fullWidth,
        style,
        ...rest
    } = props
    return (
            <Pressable {...rest} style={style}>
                <Text>{text}</Text>
                <View>{icon}</View>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
});