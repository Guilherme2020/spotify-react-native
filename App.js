import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/pages/Main';
import TabBar from './src/components/TabBar';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Main />
      <TabBar />
    </React.Fragment>
  );
};

export default App;
