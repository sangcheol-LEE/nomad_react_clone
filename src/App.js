import React from "react";
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: 'https://www.stylec.co.kr/data/item/1624435688/thumb-7J206647KeA1_500x500.jpg',
    rating: 5
  },

  {
    id: 2,
    name: "mandu",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/05/4b62f0a6efa9e108a912869a011108e81.jpg",
    rating: 5.5

  } ,

  {
    id: 3,
    name: "ramen",
    image:  "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg",
    rating: 4.5

  },

  {
    id: 4,
    name: "rice",
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/How-to-Cook-Rice-7.jpg",
    rating: 6

  }
]

function Food ({name, picture,rating}) {           //자식 컨포넌트
  return (
  <div>
    <h2> I like {name} </h2>
    <h3> {rating}/5.0 </h3>
    <img src={ picture } alt={name}/>
  </div>

  )};

   Food.propTypes = {
   name : PropTypes.string.isRequired,
   picture : PropTypes.string.isRequired,
   rating : PropTypes.number.isRequired
  };

function App() {                            //부모 컨포넌트
  return (
        <div>
         { foodILike.map(dish => (
         <Food 
         key={dish.id} 
         name={dish.name} 
         picture={dish.image}
         rating={dish.rating}
         /> 
         ))}
        </div> 
  );
}

export default App;
