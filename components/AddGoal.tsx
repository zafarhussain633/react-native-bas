import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable,Image, View,TextInput, Button} from 'react-native';
const icon = require("./../assets/images/cloudy.png")

type propType = {
  onTextChange: any,
  enteredGoals:string,
  modalVisible:boolean,
  setModalVisible:any
  handleGoalAdd: any
}

const AddGoal= ({onTextChange,enteredGoals,modalVisible,setModalVisible,handleGoalAdd}:propType) => {
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width:40, height:30}} source={icon} />
          <TextInput
          style={styles.input}
          placeholder="enter your input"
          onChangeText={onTextChange}
          value={enteredGoals}
        />
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}

            <Button onPress={handleGoalAdd} title={"add your goal"}/>
            <Button onPress={()=> setModalVisible(!modalVisible)} title={"close"}/>
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    borderWidth: 1,
    borderColor:"#7286D3",
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 400,
    height: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddGoal;