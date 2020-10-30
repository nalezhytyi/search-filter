import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
    state = {
        persons: [],
        searchField: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ persons: users }))
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { persons, searchField } = this.state;
        const filteredPerson = persons.filter(person =>
            person.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Kittens Search</h1>
                <SearchBox handleChange={this.handleSearch} />
                <CardList persons={filteredPerson} />
            </div>
        );
    }
}

export default App;
