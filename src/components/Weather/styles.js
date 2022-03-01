import {StyleSheet} from 'react-native';
import theme from 'src/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: theme.WHITE_COLOR,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  largeText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  smallText: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
});
