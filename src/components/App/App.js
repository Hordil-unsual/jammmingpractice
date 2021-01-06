import React from 'react';
import './App.css';

import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";


class App extends React.Component {
// constructor(props) {
  // super(props);

  // this.
  state = {
    searchResults: [
      {name: 'Smile', artist: 'Wizkid', album: 'Made in Lagos', id: 1},
      {name: 'Jowo', artist: 'Davido', album: 'ABT', id: 2},
      {name: 'Wetin man go do', artist: 'Burna Boy', album: 'African giant', id: 3}
    ],

    playlistName: "My Playlist",

    playlistTracks: [
      {name: "Bad Commando", artist: "Rema", album: "Bad Commando", id: 4},
      {name: "Lady", artist: "Rema", album: "Bad Commando", id: 5},
      {name: "Spaceship Jocelyn", artist: "Rema", album: "Bad Commando", id: 6},
    ]
  }

  // this.addTrack = this.addTrack.bind(this);
  // this.removeTrack = this.removeTrack.bind(this);
  // this.updatePlaylistName = this.updatePlaylistName.bind(this);
// }

  addTrack = (track) => {
    // let tracks = this.state.playlistTracks;
    if (track.id !== this.state.playlistTracks) {
      this.state.playlistTracks.push(track);

      this.setState({playlistTracks: this.state.playlistTracks});
      }
  }

  removeTrack = (track) =>{
    // let tracks = this.state.playlistTracks;

    // tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: this.state.playlistTracks.filter(
      currentTrack => currentTrack.id !== track.id)})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search} />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
        <Playlist playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
      </div>
    </div>
  </div>
    );
   };
};

export default App;
 