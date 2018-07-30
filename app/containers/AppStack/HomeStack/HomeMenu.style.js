import ScaleSheet from 'react-native-scalesheet'
import * as constants from '../../../../constants';

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colorVioletPrimary1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  closeIcon: {
    width: 20,
    height: 20
  },
  contentContainer: {
    flex: 1
  },
  contentContainerStyle: {
    marginTop: 40
  },
  item: {
    height: 100,
    alignItems: 'center'
  },
  itemText: {
    color: constants.colorVioletSecondary2,
    fontSize: 40,
    fontWeight: '400'
  },
  selectedItemText: {
    color: constants.colorWhite
  }
})

export default styles
