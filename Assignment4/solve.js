let ratingData = [
    { restaurant: "KFC", rating: 5 },
    { restaurant: "Burger King", rating: 4 },
    { restaurant: "KFC", rating: 3 },
    { restaurant: "Domino", rating: 2 },
    { restaurant: "Subway", rating: 3 },
    { restaurant: "Domino", rating: 1 },
    { restaurant: "Subway", rating: 4 },
    { restaurant: "Pizza Hut", rating: 5 },
  ];

  // a
  const uniqueRestaurants= Array.from(new Set(ratingData.map(({restaurant})=>restaurant)));
  var arr=[];
  uniqueRestaurants.map(restaurantName=>{
    const filteredRatingData=ratingData.filter(obj=>obj.restaurant == restaurantName);
    let outputObj={
      restaurant:restaurantName,
      averageRating:filteredRatingData.reduce((prev,next)=>prev+next.rating,0)/filteredRatingData.length
    }
    arr.push(outputObj);
  });
  console.log(arr);
  
  // b 
  const secondOutput = arr.filter(item=>item.averageRating>=4);
  console.log(secondOutput);
 