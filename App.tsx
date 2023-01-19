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
  TextInput
} from 'react-native';


function App(): JSX.Element {

  const [item , setItem] = useState<Array<string>>([""]);
  const [value , setValue] = useState<string>("");

  const handleChange = (val:string)=>{
    setValue(val)
  }

  const handleAdd = ()=>{
    setItem([...item, value])
    setValue("")
  }

  const handleDelete=(val:string)=>{
    let temp = item.filter(res=>res !== val)
    setItem(temp)
  }
  

  return (
   <View style={styles.container}>
      
      <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="enter your input"
        onChangeText={handleChange}
        value={value}
      />
       <Button color="red"  onPress={handleAdd}  title="press here" />
      </View>
      
      <View style={styles.listView}>
        {item.map((res:string)=>(
          <Text onPress={()=>handleDelete(res)}>
             {res}
          </Text>
        ))}
          
       </View>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    padding:30
  },

  inputView:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    gap:10
  },
  input:{
    borderWidth:1,
    borderColor:"blue",
    width:"80%"
    
  },
  button:{
    padding:10,
    color:"white",
    backgroundColor:"black"
  },
  
  listView:{
    marginTop:10,
  }
  
});

export default App;
