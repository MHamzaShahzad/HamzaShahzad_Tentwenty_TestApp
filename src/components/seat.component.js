import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles from '../styles/app.style'
import Constants from '../utils/constants'

export const Box = (props) => {
    return (
        <TouchableOpacity style={[Styles.smallBoxSyle, props.style]} onPress={props.onPress}>
            <Text style={[ { textAlign: 'center', color: props?.style?.color ?? 'white', fontFamily: Constants.Fonts.MONTSERAA_REGUAR, fontSize: 9 }, props.textStyle ]} >{props.text}</Text>
        </TouchableOpacity>
    )
}
