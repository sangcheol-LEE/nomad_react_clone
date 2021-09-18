import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 후에 많은 요소들로 채울 예정.
  };

  getMovies = async () => {                                                         // async await 을 하는 것은 우리가 기본적으로 JS에게 getMovies 함수에게  
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");    // 조금 시간이 필요하고 우리는 그걸 기다려야한다 라는 것을 의미합니다.
  }

  componentDidMount() {
    this.getMovies();    
  }

  render() {
    const { isLoading } = this.state;
     return  <div> { isLoading ? "Loading..." : "We are ready" } </div>
        
      
    }
}


 
export default App;
