import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Add to the List'
        style={styles.inputHolder}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputHolder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    margin: 5,
    padding: 5,
  },
})

export default GoalInput
