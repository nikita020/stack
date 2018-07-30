import ScaleSheet from 'react-native-scalesheet'
import * as constants from '../../../../constants';

const styles = ScaleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: constants.colorGreen,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  textWhite: {
    color: constants.colorWhite
  },
  borderButton: {
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: constants.colorWhite,
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderButtonText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: constants.colorWhite,
  },
  descriptionText: {
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 30,
    color: constants.colorSecondaryViolet,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '700',
    color: constants.colorWhite,
    backgroundColor: 'transparent'
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 7,
    color: constants.colorWhite,
    textAlign: 'center',
    marginBottom: 12
  },
  cardDescription: {
    fontSize: 15.5,
    fontWeight: '600',
    textAlign: 'center',
    color: constants.colorBlueSecondary2,
    textAlign: 'center'
  }
})

export default styles
