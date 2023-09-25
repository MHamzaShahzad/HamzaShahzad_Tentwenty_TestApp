import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from '../utils/constants'

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBackgroundColor: {
        backgroundColor: Constants.Colors.BACKGROUND
    },
    appFont: {
        fontFamily: Constants.Fonts.FAMILY,
    },
    appFontRegular: {
        fontFamily: Constants.Fonts.FAMILY_REGULAR,
    },
    textColorWhite: {
        color: Constants.Colors.WHITE
    },
    textColorPrimary: {
        color: Constants.Colors.PRIMARY
    },
    smallBoxSyle: {
        height: 18,
        width: 18,
        borderWidth: 0.4,
        borderRadius: 3,
        margin: 5,
        justifyContent: 'center'
    }
});

export default AppStyles