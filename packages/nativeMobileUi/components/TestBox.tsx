import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export type ButtonProps = {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'flex-start',
        flex: 1,
        border: '1px solid black',
        color: "red"
    },
});

const TestBox = () => (
    <View style={styles.container}>
        <Text>Testing</Text>
    </View>
);

export default TestBox