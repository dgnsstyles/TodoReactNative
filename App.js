// import stuff
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
//create stuff
class App extends React.Component{
  state = {
    text: " ",
    todo: []
  }
  addTodo= () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return(
        <TouchableOpacity key={t}>
        <Text
        style={styles.todo}
        onPress={()=>{this.deleteTodo(t)}}>{t}</Text>
        </TouchableOpacity>
      )
    }) 
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.Header}>Tareas por hacer</Text>
          <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
          />
          <Button 
          title="Agregar tareas"
          color="#673AB7"
          backgroundColor="#333"
          onPress={this.addTodo}
          />
          <View style={{marginBottom: 100}} />
        { this.renderTodos()}
        </View>
      </View>
    )
  }
}
const styles ={
  wholeStyle:{
    backgroundColor: "#EDE7F6",
    flex: 1
  },
  viewStyle: {
    marginTop: 40,
    alignItems:'center',
    justifyContent: 'center',
    margin: 10,
    },
  inputStyle: { 
    height: 40,
    width: 350,
    borderColor: "#673AB7",
    borderWidth: 1
  },
  Header:{
    fontSize: 30,
    color: "#673AB7",
    fontWeight: "bold"
  },
  todo: {
    fontSize: 22,
    color: '#673AB7'
  }
}
//export stuff
export default App;