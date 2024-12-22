import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoal() {
    setModalVisible(true);
  }
  function endAddGoal() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredText) {
    setGoals(prevState => [...prevState, { text: enteredText, id: Math.random().toString(8) }]);
    endAddGoal();
  }

  function removeGoalHandler(id) {
    setGoals(prevState => prevState.filter((goal) => goal.id !== id));
  }

  return (<>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Новая цель' color={'#a065ec'} onPress={startAddGoal} />
      <GoalInput addGoalHandler={addGoalHandler} modalVisible={modalVisible} endAddGoal={endAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GoalItem text={item.text} id={item.id} onDelete={removeGoalHandler} />}
          alwaysBounceVertical={false}
        />

      </View>
    </View>
  </>);
}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '65%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',

  },
  goalText: {
    color: 'white'
  }
});
