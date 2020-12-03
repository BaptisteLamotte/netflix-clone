import React from 'react'
import './App.css';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import NavBar from './NavBar'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
