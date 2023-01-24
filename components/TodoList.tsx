/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import AddGoal from './AddGoal';

type ArrayItemType = {
  id: string;
  text: string;
};

function TodoList(): JSX.Element {
  const [goalList, setgoalList] = useState<Array<ArrayItemType>>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [enteredGoals, setEnteredGoals] = useState<string>('');

  const onTextChange = (enetredText: string) => {
    setEnteredGoals(enetredText);
  };



  console.log(enteredGoals,"enteredGoals")
  const handleGoalAdd = () => {
    setgoalList(currentGoals => [
      {text: enteredGoals, id: Math.random().toString()},
      ...currentGoals,
    ]);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const handleDelete = (id: string) => {
    let temp = goalList.filter(res => res.id !== id);
    setgoalList(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Button color="red" onPress={toggleModal} title="add goal" />
        <AddGoal
          onTextChange={onTextChange}
          enteredGoals={enteredGoals}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleGoalAdd={handleGoalAdd}
        />
      </View>

      <View style={styles.listView}>
        <Text style={styles.listTitle}>Goal List</Text>

        <View style={styles.flatlistView}>
          <FlatList
            data={goalList}
            renderItem={({item}) => (
              <Pressable
                android_ripple={{color: 'red'}}
                style={styles.text}
                onPress={() => handleDelete(item.id)}>
                <Text>{item.text}</Text>
              </Pressable>
            )}
            keyExtractor={(item: ArrayItemType) => item.id}
          />
        </View>

        {/* <ScrollView contentContainerStyle={styles.contentContainer}>
            {goalList.map((item: ArrayItemType) => (
              <Text key={item.id} onPress={() => handleDelete(item.id)} style={styles.text}>
                {item.text}
              </Text>
            ))}
          </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: '5%',
    // height: (Dimensions.get('window').height / 100) * 90,
    borderWidth: 2,
    borderColor: 'red',
    display: 'flex',
    padding: '5%',
  },

  inputView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7286D3',
    width: '80%',
    flex: 2,
  },
  button: {
    color: 'white',
    backgroundColor: '#7286D3',
  },

  listView: {
    marginTop: 20,
  },
  flatlistView: {
    //flex: 20
    height: 500,
  },

  contentContainer: {
    paddingBottom: 40,
  },
  listTitle: {
    fontSize: 20,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderTopColor: 'black',
  },

  text: {
    color: 'white',
    fontSize: 18,
    padding: 12,
    backgroundColor: '#7286D3',
    marginTop: 12,
  },
});

export default TodoList;
