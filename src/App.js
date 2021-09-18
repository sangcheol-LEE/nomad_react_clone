import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 후에 많은 요소들로 채울 예정.
  };

  getMovies = async () => {  
                                                          // async await 을 하는 것은 우리가 기본적으로 JS에게 getMovies 함수에게  
    const {                                               // 조금 시간이 필요하고 우리는 그걸 기다려야한다 라는 것을 의미합니다.
      data: {
        data: { movies }
      }

    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
     this.setState({ movies, isLoading: false }); 
  };

  componentDidMount() {
    this.getMovies();    
  };

  render() {
    const { isLoading, movies } = this.state;
     return (
      <section className="container">  
        { isLoading ? (
        <div className='loader'>
          <span className="loader__text">Loading...</span>
        </div> 
        ): ( 
          <div className="movies">
            {movies.map(movie => (
            <Movie
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              /> 
          ))}
          </div>
        )}
        </section>
     );
  }
}




 
export default App;
