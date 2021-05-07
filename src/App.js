import React,{useState,useEffect} from 'react';
import SearchBar from './components/search-bar/search-bar.component';
import MusicList from './components/music-list/music-list.component';
import './App.css';


// class App extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       token:'',
//       searchedItems:[]
//     }
//   }

//   updateItems = (newItems) => {
//       this.setState({searchedItems:newItems},()=>{console.log(this.state)})
//   }

//   componentDidMount(){
//    }




//   render(){
//     return (
//       <div className="App">
//         <div className="main-body">
//           <SearchBar token={this.state.token} updateItems={this.updateItems}/>
//           <MusicList items={this.state.searchedItems}/>
//         </div>
        
//         <a href="https://www.linkedin.com/in/abhishekm2106/" target="_blank" rel="noopener noreferrer" className="credits">Abhishek Mohanty</a>
//       </div>
//     );
//   }

// }


function App() {

  const [token,setToken] = useState('')
  const [items,changeItems] = useState([])
  const clientId = 'a0405fea39d946258aa3f328bc0e3a71';
  const clientSecret = '0c68d04ade504af69422c9d52ae4480a';

  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    }).then(response => response.json()).then(output => setToken(output.access_token))
  },[])

  return (
    <div className='App'>
      <div className='main-body'>
        <SearchBar token={token} updateItems={changeItems}/>
        <MusicList items={items}/>
      </div>
      
      <a href="https://www.linkedin.com/in/abhishekm2106/" target="_blank" rel="noopener noreferrer" className="credits">Abhishek Mohanty</a>
      
    </div>
  )
}

export default App


