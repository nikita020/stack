import React from 'react'
import { StyleSheet, Dimensions, Platform } from 'react-native'
import ScaleSheet from 'react-native-scalesheet'
const {width: SCREEN_WIDTH} = Dimensions.get('window');

import * as constants from '../../constants'

export const styles = ScaleSheet.create(
  {
    headerStyle: {
      backgroundColor: constants.headerColorViolet,
      borderBottomWidth: 0,
      elevation: 0,
      ...Platform.select({
        android: {
          marginTop: constants.statusBarHeight
        }
      })
    },
    titleHeader: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center'
    },
    iconHeaderComponent: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    iconHeaderLeft: {
      paddingLeft: 20
    },
    iconHeaderRight: {
      paddingRight: 20
    },
    ViewContainer: {
      flex: 1,
      width: 100 + 'vw',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: constants.colorViolet,
      position: 'relative'
    },
    viewContainerWithHeader: {
      backgroundColor: constants.colorViolet,
      width: constants.windowWidth,
      paddingVertical: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    spaceAroundContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 5 + 'vh'
    },
    authenticationButtons: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 35 + 'vh',
      marginBottom: 10 + 'vh',
      width: 100 + 'vw'
    },

    signUpStep4: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 45 + 'vh',
      marginBottom: 10 + 'vh',
      width: 100 + 'vw'
    },
    pinContainer: {
      flex: 1,
      alignItems: 'center',
      width: 100 + 'vw'
    },
    containerCenter: {
      justifyContent: 'center',
      alignItems: 'center'
    },

    logoStack: {
      width: 0.25 * 100 + 'vw',
      height: 424 / 282 * 0.25 * 100 + 'vw',
      marginTop: 10 + 'vh'
    },
    backgroundWhite: {
      backgroundColor: constants.colorWhite
    },
    backgroundBottom: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      width: 100 + 'vw',
      height: 896 / 1125 * 100 + 'vw',
      zIndex: -1
    },
    backgroundTop: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      width: 100 + 'vw',
      zIndex: -1
    },

    scrollContainer: {
      flex: 1,
      backgroundColor: constants.colorViolet
    },
    pinRegisterContainer: {
      flex: 1,
      paddingVertical: 30,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    dotsBox: {
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dotElement: {
      marginHorizontal: 10,
      width: 16,
      height: 16,
      borderWidth: 1,
      borderColor: constants.colorWhite,
      borderRadius: 8,
    },
    activeDotElement: {
      marginHorizontal: 10,
      width: 16,
      height: 16,
      borderWidth: 1,
      backgroundColor: constants.colorWhite,
      borderColor: constants.colorWhite,
      borderRadius: 8,
    },
    dotOpacity: {
      marginHorizontal: 4,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: constants.colorOpacity
    },
    StatusbarBackground: {
      height: 25
    },
    progressContainer: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    logo: {
      resizeMode: 'contain',
      height: 40 + 'vh',
      width: 40 + 'vw',
      marginTop: 25 + 'vh',
    },
    logoHomeView: {
      alignItems: 'center',
    },
    logoHome: {
      resizeMode: 'contain',
      height: 12 + 'vh',
      width: 40 + 'vw',
    },
    logoPortfolio: {
      resizeMode: 'contain',
      height: 40 + 'vh',
      width: 40 + 'vw',
    },
    logoIncrease: {
      resizeMode: 'contain',
      height: 20 + 'vh',
      width: 20 + 'vw',
    },
    logoIncreaseBank: {
      resizeMode: 'contain',
      height: 30 + 'vh',
      width: 30 + 'vw',
    },

    button: {
      backgroundColor: constants.colorGreen,
      borderRadius: 8,
      height: {ignored: true, value: 50}
    },
    buttonBlue: {
      backgroundColor: constants.colorBluePrimary,
    },

    buttonCircle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: constants.colorViolet1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    buttonHistoryCardContainer: {
      position: 'absolute',
      bottom: 36 - 20,
      right: 25 - 15,
      width: 40,
      height: 40,
    },
    buttonHistoryCard: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: constants.colorWhite,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: constants.colorWhite
    },

    buttonCustom: {
      width: 90 + 'vw',
      height: 151 / 965 * 90 + 'vw',
      flexDirection: 'row',
      justifyContent: 'center',
      ...Platform.select({
        android: {
          alignItems: 'center'
        }
      }),
      backgroundColor: 'transparent'
    },

    btnText: {
      paddingLeft: 5,
      ...Platform.select({
        ios: {
          lineHeight: 151 / 965 * 90 + 'vw',
        }
      }),
      textAlign: 'center',
      color: constants.colorWhite,
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: 'transparent'
    },
    disabled: {
      backgroundColor: '#FF5252',
      borderRadius: 8
    },
    buttonPortfolio: {
      width: 90 + 'vw',
      backgroundColor: constants.colorGreen,
      marginBottom: 10 + 'vh',
    },
    buttonForm: {
      width: 90 + 'vw',
      backgroundColor: constants.colorGreen,
    },
    authenticationText: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textGray: {
      color: constants.colorGray,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textWhiteBig: {
      color: constants.colorWhite,
      fontSize: 35,
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    textWhite: {
      color: constants.colorWhite,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textOpacityBig: {
      color: constants.colorOpacity,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 35,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textOpacity: {
      color: constants.colorOpacity,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textOpacitySmall: {
      color: constants.colorOpacity,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textOpacityVerySmall: {
      color: constants.colorOpacity,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 12,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },

    textGreenBig: {
      color: constants.colorGreen,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 40,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textGreen: {
      color: constants.colorGreen,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textGreenSmall: {
      color: constants.colorGreen,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textGreenVerySmall: {
      color: constants.colorGreen,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 12,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },

    textVioletBig: {
      color: constants.colorViolet2,
      fontSize: 40,
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    textViolet: {
      color: constants.colorViolet1,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textViolet2: {
      color: constants.colorViolet2,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textVioletSmall: {
      color: constants.colorBlueSecondary2,
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textVioletVerySmall: {
      color: constants.colorViolet1,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 12,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    textWhiteSmall: {
      color: constants.colorWhite,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    authenticationTextBig: {
      color: constants.colorViolet1,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 20,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    authenticationTextSmall: {
      color: constants.colorGreen,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },
    signUpTextBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    cancelText: {
      color: constants.colorViolet1,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: '500',
      backgroundColor: 'transparent'
    },

    input: {
      width: 90 + 'vw',
      padding: 18,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: constants.colorViolet1,
      color: constants.colorViolet1,
    },

    vw90: {
      width: 90 + 'vw',
    },
    vw100: {
      width: 100 + 'vw',
    },

    forms: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    formsInput: {
      width: 90 + 'vw'
    },
    formsPortfolio: {
      flex: 1,
      width: 100 + 'vw',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    KeyboardAvoidingView: {
      paddingTop: 3 + 'vh',
      width: 100 + 'vw',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    registerPlaid: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
      width: 80 + 'vw',
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    textSmall: {
      width: 80 + 'vw',
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      fontSize: 12,
      backgroundColor: 'transparent'
    },
    textTitle: {
      width: 80 + 'vw',
      fontSize: 25,
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    stackBoxText: {
      fontFamily: 'Avenir',
      fontSize: 12,
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    stackBoxTitle: {
      fontSize: 25,
      fontWeight: '200',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    stackBoxWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stackBoxCheck: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    stackBoxTextContainer: {
      justifyContent: 'space-around',
    },
    cardStyle: {
      width: 90 + 'vw',
      backgroundColor: 'transparent',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    cardStyleSmall: {
      backgroundColor: 'transparent',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    textBalanceImage: {
      width: 85 + 'vw',
      marginBottom: 5,
      fontSize: 15,
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    textBalance: {
      width: 80 + 'vw',
      marginBottom: 5,
      fontSize: 20,
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    textBalanceSmall: {
      marginBottom: 5,
      marginTop: 5,
      fontSize: 15,
      fontFamily: 'Avenir',
      textAlign: 'center',
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    balanceView: {
      fontWeight: '700',
      flexDirection: 'row',
      textAlign: 'center',
      backgroundColor: 'transparent'
    },
    textBalanceDollarSign: {
      fontSize: 55,
      color: constants.colorGreen,
      backgroundColor: 'transparent'
    },
    textBalanceDollarValue: {
      fontSize: 55,
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    textBalanceCentValue: {
      fontSize: 55,
      color: constants.colorWhite + '90',
      backgroundColor: 'transparent',
    },
    stackBoxTextHome: {
      fontSize: 20,
      fontFamily: 'Avenir',
      fontWeight: '500',
      color: constants.colorGreen,
      backgroundColor: 'transparent'
    },
    balanceViewUntil: {
      flexDirection: 'row',
      fontFamily: 'Avenir',
      justifyContent: 'flex-start',
      fontSize: 25,
      color: constants.colorWhite,
      backgroundColor: 'transparent'
    },
    list: {
      backgroundColor: 'transparent',
    },
    listItem: {
      fontFamily: 'Avenir',
      color: constants.colorGreen,
      borderColor: constants.colorGreen,
      backgroundColor: 'transparent'
    },
    coinsItemContainer: {
      width: 100 + 'vw',
      alignItems: 'center',
    },
    coinsItemContainerActive: {
      width: 100 + 'vw',
      alignItems: 'center',
      backgroundColor: constants.colorViolet3
    },
    coinsItem: {
      width: 90 + 'vw',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1.5,
      borderBottomColor: constants.colorViolet2,
    },
    coinsItemLeft: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    coinsItemRight: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    coinsItemRightCustom: {
      flexDirection: 'column',
    },
    coinsAvatar: {
      height: 30,
      width: 30,
    },
    coinsItemName: {
      paddingHorizontal: 15,
      flexDirection: 'column',
    },

    socalIcons: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    socialIcon: {
      height: {ignored: true, value: 30},
      width: {ignored: true, value: 30}
    },
    divider: {
      backgroundColor: '#6d6d6d'
    },
    noDivider: {
      height: 0
    },
    buttonGroupContainer: {
      height: 50,
      backgroundColor: 'transparent',
    },
    buttonGroupContainerSmall: {
      height: 41,
      backgroundColor: 'transparent',
      margin: 0,
      borderWidth: 0
    },
    buttonGroupText: {
      color: constants.colorGreen,
      backgroundColor: 'transparent'
    },
    buttonGroupSelected: {
      backgroundColor: constants.colorWhite,
      height: 41
    },
    buttonGroupTextSelected: {
      color: constants.colorWhite,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    ProgressBarBankText: {
      marginTop: 5,
      textAlign: 'right',
      marginRight: 5,
      color: constants.colorGreen,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    investBar: {
      width: 100 + 'vw',
    },
    investBarStack: {
      width: 100 + 'vw',
      marginBottom: -5 + 'vh'
    },
    gridView: {
      justifyContent: 'space-around',
      width: 100 + 'vw'
    },
    gridViewNumberPad: {
      paddingTop: {value: 32, ignored: true},
      marginBottom: {value: 12, ignored: true}
    },
    numberPadButtonsSquare: {
      backgroundColor: '#320E7C',
      width: {ignored: true, value: (SCREEN_WIDTH - 70) / 3},
      height: {ignored: true, value: (SCREEN_WIDTH - 70) / 3 - 5},
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    numberPadButtonsSquareSelected: {
      backgroundColor: constants.colorWhite,
      width: {ignored: true, value: (SCREEN_WIDTH - 70) / 3},
      height: {ignored: true, value: (SCREEN_WIDTH - 70) / 3 - 5},
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    numberPadButtonsSquareText: {
      color: constants.colorVioletSecondary2,
      fontSize: 30,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    numberPadButtonsSquareTextSelected: {
      color: constants.colorVioletPrimary1
    },
    numberPadButtons: {
      backgroundColor: 'transparent',
      paddingVertical: 6.5
    },
    pinNumberPadButtons: {
      backgroundColor: 'transparent',
    },
    pinNumberPadButtonsText: {
      color: constants.colorWhite,
      fontSize: 35,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    numberPadButtonsText: {
      color: constants.colorWhite,
      fontSize: 36,
      backgroundColor: 'transparent'
    },
    numberPadButtonsTextSmall: {
      color: constants.colorGreen,
      fontSize: 25,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    numberPadButtonsTextOpacitySmall: {
      color: constants.colorOpacity,
      fontSize: 25,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    recurringText: {
      color: constants.colorGreen,
      fontSize: 20,
      fontFamily: 'Avenir',
      backgroundColor: 'transparent'
    },
    numberPadValue: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: -3 + 'vh',
      marginTop: -2 + 'vh',
    },
    numberPadValuePad: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: {
        ignored: true,
        value: 36
      }
      // marginTop: -3 + 'vh',
    },
    numberPadValuePadButtons: {
      marginTop: -20,
      // alignItems: 'center'
    },
    cardStyleNumberPad: {
      elevation: 0,
      margin: 0,
      paddingTop: 0,
      backgroundColor: constants.headerColorViolet,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    cardStyleNumberPadBlue: {
      backgroundColor: constants.colorBlue,
    },
    numberPadButtonsTextValue: {
      width: 100 + 'vw',
      color: constants.colorWhite,
      fontSize: 46,
      fontWeight: '700',
      textAlign: 'center',
      backgroundColor: 'transparent'
    },
    exitButtonStyle: {
      alignSelf: 'flex-end',
      marginRight: 10,
      marginBottom: 2 + 'vh',
    },
    numberPadExitButtonStyle: {
      position: 'absolute',
      top: {ignored: true, value: 25},
      right: {ignored: true, value: 10}
    },
    imgContain: {
      resizeMode: 'contain',
      width: 100 + 'vw',
    },
    backgroundTransparent: {
      backgroundColor: 'transparent'
    },
    infoTip: {
      position: 'absolute',
      top: 8 + 'vh',
      right: 8 + 'vw'
    },
    settingsSection: {
      width: 100 + 'vw',
      alignItems: 'center'
    },
    settingsRow: {
      width: 90 + 'vw',
      borderBottomWidth: 1.5,
      paddingVertical: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: constants.colorViolet3
    },
    settingsRowLeft: {
      flexDirection: 'row',
    },
    settingsRowIcon: {
      width: 30,
      height: 30,
      marginRight: 20,
    },
    settingsSectionTitle: {
      color: constants.colorWhite,
      textAlign: 'center',
      fontFamily: 'Avenir',
      fontSize: 20,
      fontWeight: '500',
      marginVertical: 30,
      backgroundColor: 'transparent'
    },
    labelInput: {
      fontSize: 18,
      fontWeight: '500',
      color: constants.colorViolet1,
      marginTop: 0,
      marginBottom: 10,
      marginHorizontal: 0,
    },

    customHeaderContainer: {
      width: 100 + 'vw',
      paddingTop: constants.statusBarHeight,
      backgroundColor: constants.headerColorViolet,
    },
    customHeaderContent: {
      width: 100 + 'vw',
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    customHeaderTitle: {
      color: constants.colorWhite,
      fontFamily: 'Avenir',
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      backgroundColor: 'transparent'
    },
    customHeaderLeftBtn: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center'
    },
    customHeaderRightBtn: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: constants.colorViolet1,
    },
    searchBoxIcon: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchInput: {
      padding: 16,
      fontFamily: 'Avenir',
      fontSize: 16,
      fontWeight: '500',
      color: constants.colorViolet1,
    },
    historyCardBox: {
      width: 100 + 'vw',
      justifyContent: 'center',
      alignItems: 'center'
    },
    historyCardBoxTitle: {
      width: 100 + 'vw',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 25
    },
    historyCard: {
      width: 100 + 'vw',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginBottom: 15
    },
    historyCardContent: {
      borderRadius: 4,
      flexDirection: 'column'
    },
    historyCardHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    historyCardHeadCustom: {
      flexDirection: 'column',
      padding: 20,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    historyCardBody: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 36,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    },
    modalOpacityContainer: {
      margin: 0,
      backgroundColor: constants.colorVioletOpacity,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    modalOpacityContent: {
      flex: 1,
      width: 100 + 'vw',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    modalOpacityCloseBtn: {
      position: 'absolute',
      zIndex: 9,
      right: 20,
      top: constants.statusBarHeight + 15,
      backgroundColor: 'transparent'
    },
    historyDetailHeader: {
      position: 'relative',
      alignItems: 'center'
    },
    historyDetailBody: {
      position: 'relative',
      alignItems: 'center'
    },
    historyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    historyRowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      borderBottomWidth: 1.5,
      borderBottomColor: constants.colorViolet3
    },
    logoCoinSmall: {
      width: 20,
      height: 20,
    },
    withdrawHeader: {
      width: 100 + 'vw',
      height: 20 + 'vh',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonWithdraw: {
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeIcon: {
      width: 20,
      height: 20
    },
    bottomTabNavigator: {
      borderBottomColor: constants.colorVioletPrimary2,
      height: 55,
      backgroundColor: constants.headerColorViolet
    }
  }
)
