import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
    state = {
        monsters: [],
        searchField: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Monsters Search</h1>
                <SearchBox handleChange={this.handleSearch} />
                <CardList monsters={filteredMonster} />
            </div>
        );
    }
}

export default App;
