import {StyleSheet} from 'react-native';
import theme from 'src/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.GREEN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 100,
    borderRadius: theme.BORDER_RADIUS_SMALL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.LIME_COLOR,
  },
  timerText: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    marginBottom: theme.MARGIN_SIZE_SMALL,
  },
  buttonReset: {
    marginTop: theme.MARGIN_SIZE_SMALL,
    borderColor: theme.ORANGE_COLOR,
  },
  buttonTextReset: {
    color: theme.ORANGE_COLOR,
  },
});
