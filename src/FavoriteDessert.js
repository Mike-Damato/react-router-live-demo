import React from "react";

function FavoriteDessert(props) {
  const myFavoriteDessert = {
    1: "https://images-gmi-pmc.edge-generalmills.com/fe558022-4544-458f-aaa0-eda0de1bcf99.jpg",
    2: "https://myfrenchrecipe.com/wp-content/uploads/2018/11/french-madeleine-honey-lemon-my-french-recipe.jpg",
    3: "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
    4: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2FHD-200912-r-raspberry-macarons.jpg&w=400&q=85",
    5: "https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/tart1.jpg?crop=1.0xw:1xh;center,top&resize=480:*"

  };
  return (
    <div className="container">
      <img src={myFavoriteDessert[props.match.params.dessertId]} alt="random desserts" className="favorite-dessert" />
    </div>
  );
}

export default FavoriteDessert;
