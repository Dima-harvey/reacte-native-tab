import {StyleSheet} from 'react-native';
import theme from '~/theme';

export const styles = StyleSheet.create({
    container: {
      height: 40,
      width: 300,
      backgroundColor: theme.colors.green,
      marginHorizontal: theme.sizeMargin.m,
      paddingHorizontal: theme.sizePadding.m,
      borderRadius: theme.sizeBorderRadius.s,
    },
    textInput: {
      flex: 1,
      color: theme.colors.white,
    },
  });

