import React, { useState } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios'




export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`${process.env.REACT_APP_API_URL}blog/`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
    state2 = {
      id: '',
    }
  

    handleChange = event => {
      const id = event.target.value;
      console.log(event.target.value)
        this.setState({ id: event.target.value });
      }
      handleDelete = event => {
        event.preventDefault();
        alert(this.state.id)
        axios.delete(`${process.env.REACT_APP_API_URL}blog/delete/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
  
    render() {
      return (
        <ul>
          <p>home</p>
        </ul>
      )
    }
  }