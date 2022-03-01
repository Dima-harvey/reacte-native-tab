import {StyleSheet} from 'react-native';
import theme from '~/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
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
    color: theme.colors.white,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.shadow,
    alignItems: 'center',
  },
  largeText: {
    fontSize: theme.FontSize.m,
  },
  smallText: {
    fontSize: theme.FontSize.s,
  },
});
