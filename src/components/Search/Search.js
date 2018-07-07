import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem'

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

        <SelectField>
            <MenuItem value={1} primaryText="Never"/>
        </SelectField>
      </div>
    
    );
  }

  onTextChange = (e) => {
      console.log(this.state.searchText);
  }
}
