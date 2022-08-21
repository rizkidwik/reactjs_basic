import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios from "axios";
export default class App extends Component {
  state={
    data:[
      // {id:1,nama:'paijo'},
      // {id:2,nama:'paimen'},

    ],
    activeItem:{
      nama:"",
      complated:false
    },
    editItem:false
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData=()=>{
    // axios.get("url").then((res)=>this.setState())
    // axios.get("http://localhost:3002/apiRouter")
    axios.get("https://dummyjson.com/todos?limit=10")
    .then((res)=>
    // console.log(res.data.todos)
      this.setState({data:res.data.todos})
    )
    .catch(
      (err)=>console.log(err)
    )
    
  }
  handleChange=(e)=>{
    let {name,value}=e.target;
 
    if(e.target.type==="checkbox"){
      value=e.target.checked;
    }
 
    const activeItem={...this.state.activeItem, [name]:value};
    this.setState({activeItem});
  }
  handleSubmit=(item)=>{
    console.log('item',item)
    console.log(this.state.activeItem)
  }
  handleEdit = (item) => {
    console.log(item)
    this.setState({ activeItem: item, editItem: true });
  };
  handleDelete = (item) => {
    alert("Delete :: " + JSON.stringify(item));
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo App</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto mt-2">
            <TodoInput 
              activeItem={this.state.activeItem}
              editItem={this.state.editItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList 
              data={this.state.data}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
 