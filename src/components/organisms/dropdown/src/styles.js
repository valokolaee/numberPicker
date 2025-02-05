import { StyleSheet, Dimensions, I18nManager } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  dropdownButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2,
    // height: 50,
    overflow: 'hidden',
  },
  searchViewStyle: {
    height: 50,
    paddingHorizontal: 0,
  },
  dropdownButtonText: {
    // flex: 1,
    // fontSize: 18,
    // color: '#000000',
    textAlign: 'center',
    // borderWidth: 1
    // marginHorizontal: 8,
  },
  dropdownCustomizedButtonParent: {
    flex: 1,
    overflow: 'hidden',
  },
  //////////////////////////////////////
  dropdownOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  dropdownOverlayView: {
    backgroundColor: '#EFEFEF',
  },
  dropdownActivityIndicatorView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //////////////////////////////////////
  dropdownRow: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: ColorSystem.White,
    // borderBottomWidth: 1,
  },
  dropdownRowText: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  dropdownCustomizedRowParent: {
    flex: 1,
    overflow: 'hidden',
  },
  //////////////////////////////////////
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default styles;
