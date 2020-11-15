import { Dimensions } from 'react-native';
import { moderateScale, verticalScale } from '../../constants/functions';
import {
  backgroundColor,
  primaryColorRed,
  textColor
} from '../../constants/styles';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileSectionContainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(20)
  },
  profileNameText: {
    fontSize: moderateScale(20),
    color: primaryColorRed,
    fontWeight: 'bold'
  },
  profileEmailText: {
    fontSize: moderateScale(15),
    color: textColor,
  },
  horizontalLine: {
    height: 2,
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
    borderColor: 'grey',
    opacity: 0.5
  },
  footerContainer: {
    position: 'relative'
  },
  navItemStyle: {
    paddingTop: moderateScale(20),
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(10),
  },
  navTextStyle: {
    paddingLeft: moderateScale(10),
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    color: textColor
  },
  navIconStyle: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain'
  },
  navSectionStyle: {
    // marginLeft: moderateScale(10),
    flex: 1,
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerImageStyle: {
    flex: 1,
    width: width * 0.35,
    height: height * 0.05,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
    bottom: 15
  },
  headerText: {
    color: '#464646',
    fontSize: width * 0.04
  },
  footerText: {
    position: 'absolute',
    bottom: height * 0.075,
    right: 10,
    color: 'gray',
    fontSize: width * 0.03,
    opacity: 0.4
  }
};
