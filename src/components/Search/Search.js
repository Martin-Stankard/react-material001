import React, { Component } from "react";
import axios from 'axios';

//components
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../ImageResults/ImageResults'


export default class Search extends Component {
  state = {
      searchText:'',
      amount: 5,
      apiUrl:'https://pixabay.com/api',
      apiKey:'9490113-5089b9183c6e79d5028cc8e39',
      images:[]
  };

  render() {
      
    return (
      <div>
        <TextField
            name='searchText'
            value={this.state.searchText}
            onChange={this.onTextChange}
            floatingLabelText='Search For Images'
            fullWidth={true}
        />
        <br/>
        <SelectField
        name="amount"
        floatingLabelText="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
        >
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={10} primaryText="10"/>
            <MenuItem value={15} primaryText="15"/>
            <MenuItem value={30} primaryText="30"/>
            <MenuItem value={50} primaryText="50"/>
        </SelectField>
        <br/>
        {this.imageResultConditional()}
      </div>
     
    
    );
  }

  onTextChange = (e) => {
      //generic to the control, with same name in state
      this.setState({[e.target.name]:e.target.value} );
      this.queryPixabayApi();
  };

  onAmountChange = (e , index, value)  =>{ 
      this.setState({amount:value});
      this.queryPixabayApi();
    };

  queryPixabayApi =() => {
    axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
    .then(res => this.setState({images: res.data.hits}))
    .catch(err => console.log(err));

    console.log(this.state.images);
  }

  imageResultConditional = () =>{
      if(this.state.images.length>0){
        return(<ImageResults images = {this.state.images}/>);
      }else{
        return (null);
      }
  }
}
