import React from 'react';
import './App.css';

import Search from './components/Search';
import Table from './components/Table';

const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan   Peele',
      num_comments: 83,
      points: 44,
      objectID: 0
    },
    {
      title: 'GraphQL',
      url: 'https://reactjs.org/',
      author: 'Jo We',
      num_comments: 43,
      points: 4,
      objectID: 1
    },
    {
      title: 'Redux',
      url: 'https://reactjs.org/',
      author: 'Walke Po',
      num_comments: 23,
      points: 4,
      objectID: 2
    }
  ];

  function isSearched(searchTerm) {
    return function (item) {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  }  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      list,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    }

    onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
    }

    onDismiss(id) {
      const updatedList = this.state.list.filter(item => item.objectID !== id);
      this.setState({ list: updatedList });
    }

  render(){
    const { searchTerm, list } = this.state;
    return (

      <div className="page">
        <div className="interactions">
        <Search 
          value={searchTerm}
          onChange={this.onSearchChange}  
        >Search </Search>
        </div>
        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
          isSearched={isSearched}
        />
      </div>
    );
  }
}

export default App;
