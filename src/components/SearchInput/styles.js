import {StyleSheet} from 'react-native';
import theme from 'src/theme/theme';

export const styles = StyleSheet.create({
    container: {
      height: 40,
      width: 300,
      marginTop: 20,
      backgroundColor: theme.GREEN_COLOR,
      marginHorizontal: 40,
      paddingHorizontal: theme.PADDING_SIZE,
      borderRadius: theme.BORDER_RADIUS_MINI,
    },
    textInput: {
      flex: 1,
      color: theme.WHITE_COLOR,
    },
  });

