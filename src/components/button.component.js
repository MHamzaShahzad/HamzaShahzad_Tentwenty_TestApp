import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Constants from '../utils/constants'


const Button = (props) => {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.customClick} disabled={props.gone}>
            {props?.child}
            <Text style={{ color: props.tColor, fontFamily: props.tFF, fontSize: props.tfz, textTransform: props.tt }}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
    }
});

export default Button;