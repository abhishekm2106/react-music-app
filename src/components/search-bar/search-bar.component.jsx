import React,{useState,useEffect} from 'react';
import './search-bar.style.scss';

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {search: ''};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({search: event.target.value},()=>{        
//           this.handleSubmit();
//         });
//         console.log(window.innerWidth)

//       }
    
//       handleSubmit() {
//         var str = this.state.search
//         var replaced = str.replace(' ', '+');
//             fetch(`https://api.spotify.com/v1/search?q=${replaced}&type=track`, {
//               method: 'GET',
//               headers: { 
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json',
//                   'Authorization' : 'Bearer ' + this.props.token}
//           }).then(response => response.json()).then(output => (output.tracks!==undefined) ? this.props.updateItems(output.tracks.items):this.props.updateItems([]));

//       }
    
//       render() {
//         return (
//             <div className="search-bar">
//                 <input className="input" placeholder="Search you Favourite Music" type="text" value={this.state.search} onChange={this.handleChange} />
//                 <h2 className="title" style={{display : (this.state.search.length>0 && window.innerWidth<=920)? 'none': 'block'}}>Search In from the wide range of collections.</h2>
//             </div>

//         );
//       }
// }


function SearchBar({token,updateItems}) {

  const [input,changeInput] = useState('')

  useEffect(()=>{
        var replaced = input.replace(' ', '+');
        
        fetch(`https://api.spotify.com/v1/search?q=${replaced}&type=track`, {
              method: 'GET',
              headers: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer ' + token}
          }).then(response => response.json())
          .then(output => (output.tracks!==undefined) ? updateItems(output.tracks.items):updateItems([]));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[input])

  return (
            <div className="search-bar">
              <input className="input" placeholder="Search you Favourite Music" type="text" value={input} onChange={e=>changeInput(e.target.value)} />
              <h2 className="title" style={{display : (input.length>0 && window.innerWidth<=920)? 'none': 'block'}}>Search In from the wide range of collections.</h2>
            </div>
  )
}


export default SearchBar;