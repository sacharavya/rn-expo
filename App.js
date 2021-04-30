import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [outputText, setOutputText] = useState('Hello Guys')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Change Text' onPress={() => setOutputText('Bye Guys')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
