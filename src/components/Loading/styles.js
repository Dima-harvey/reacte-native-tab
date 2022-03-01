import {StyleSheet} from 'react-native';
import theme from '~/theme';

export const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: theme.colors.white,
  },
  largeText: {
    fontSize: theme.FontSize.m,
  },
  smallText: {
    fontSize: theme.FontSize.s,
  },
});
