import {StyleSheet} from 'react-native';
import theme from '~/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 100,
    borderRadius: theme.sizeBorderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.FontSize.m,
    color: theme.colors.lime,
  },
  timerText: {
    color: theme.colors.white,
    fontSize: theme.FontSize.l,
    marginBottom: theme.sizeMargin.m,
  },
  buttonReset: {
    marginTop: theme.sizeMargin.m,
    borderColor: theme.colors.orange,
  },
  buttonTextReset: {
    color: theme.colors.orange,
  },
});
