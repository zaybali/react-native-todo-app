import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function Helloworld() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const [counter, setCounter] = useState(0);

  const add = () => {

    todo != '' && setTodoList([...todoList, todo]);
    setTodo('');
  }

  const reset = () => {
    setTodoList([]);
  }

  const addCounter = () => {
    setCounter(counter + 1);
  }

  const minusCounter = () => {
    counter > 0 && setCounter(counter - 1);
  }

  const resetCounter = () => {
    setCounter(0);
  }

  useEffect(() => {
    console.log(todo);
  }, [todoList])

  return (
    <ScrollView
    >
      <View
        style={{ width: '80%', margin: 'auto', marginTop: 20 }}
      >
        <Text style={{ fontSize: 90, fontWeight: 100, marginTop: 50, textAlign: 'center' }}>hola</Text>
        <Text style={{ fontSize: 40, fontWeight: 500, marginTop: 50, textAlign: 'center', textDecorationLine: 'underline' }}>Expo Todo App</Text>

        <TextInput
          value={todo}
          onChangeText={(text) => { setTodo(text) }
          }
          style={{ borderColor: 'black', borderWidth: 1, marginTop: 20, marginBottom: 20 }}
        />
        <View
          style={{ display: 'flex', gap: 10, justifyContent: 'center' }}
        >
          <Button
            title="Add to List"
            onPress={add}
          />
          <Button
            title='Reset List'
            color='#ff4477'
            onPress={reset}
          />
        </View>
        {
          todoList.length > 0 && todoList.map((todos, i) => {
            return <View key={i}>
              <Text style={{ margin: 'auto', marginTop: 4, fontSize: 20 }}>
                {todos}
              </Text>
            </View>
          })
        }

        <Text style={{ fontSize: 45, fontWeight: 500, marginTop: 20, textAlign: 'center', textDecorationLine: 'underline' }}>Counter</Text>

        <Text style={{ fontSize: 35, fontWeight: 500, marginTop: 20, textAlign: 'center', textDecorationLine: 'underline' }}>{counter}</Text>

        <View
          style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 20 }}

        >
          <TouchableOpacity
            onPress={addCounter}
          ><Text style={{ fontWeight: 700, fontSize: 20, color: 'navy' }}
          >Add</Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={minusCounter}
          >
            <Text style={{ fontWeight: 700, fontSize: 20, color: 'navy' }}
            >Minus</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={resetCounter}
          >
            <Text style={{ fontWeight: 700, fontSize: 20, color: 'navy' }}
            >Reset</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView >

  )
}
