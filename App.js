/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


const App: () => React$Node = () => {
  const [ result, setResult ] = useState( '' );
  const ping = () => {
    setResult( '' )
    setTimeout( () =>
      fetch( 'https://google.com/', {
        method: 'HEAD'
      } ).then( r => setResult( r.status ) )
        .catch( e => setResult( e.message ) ), 500 );
  }
  return (
    <>
      <View style={styles.view}>
        <Button onPress={ping} title="Ping" />
        <Text style={styles.text}>{result}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create( {
  view: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 50,
    textAlign: 'center',
  }
} );

export default App;
