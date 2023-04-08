import React from 'react';
import Navigator from '_navigations';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import { CombinedDefaultTheme, CombinedDarkTheme } from './styles/theme';
import PreferencesContext from '_utils/preferences-context';


const App = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Navigator/>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;