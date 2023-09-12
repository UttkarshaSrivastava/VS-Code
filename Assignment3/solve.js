class restaurantManager {
    restaurantList = [
      {
        id: 1,
        restaurantName: "KFC",
        address: "Anand Vihar",
        city: "Delhi"
      },
      {
        id: 2,
        restaurantName: "Dominos",
        address: "Savita Vihar",
        city: "Delhi"
      },
      {
        id: 3,
        restaurantName: "Burger King",
        address: "Civil Lines",
        city: "Pune"
      },
      {
        id: 4,
        restaurantName: "Subway",
        address: "Cantonment",
        city: "Mumbai"
      }
    ];
    // 1
    
    printAllRestaurantNames = () => {
      return this.restaurantList.map(restaurant=> restaurant.restaurantName) 
      }
  
  
    filterRestaurantByCity = (cityName) => {
      return this.restaurantList.filter(restaurant=>restaurant.city == cityName) 
        }
    }
    
    const restaurantObject = new restaurantManager();

    const output1=restaurantObject.printAllRestaurantNames();
    console.log(output1);

    console.log(restaurantObject.filterRestaurantByCity("Delhi"));
   
    // 2
    orderData = {
      "Below 500": 20,
      "500-1000": 29,
      "1000-1500": 30,
      "1500-2000": 44,
      "Above 2000": 76,
    };

    // a
    const total = Object.values(orderData).reduce((prev,next) => prev + next);
    console.log(total);

    // b
    const headers=Object.keys(orderData);
    console.log(headers);

    // c
    let arr=[];
    const response=headers.map((item,index)=>{
      const obj = {
        'id':index+1,
        'order':item,
        'orderPercentage':((orderData[item]/total)*100).toFixed(2),
        'restaurant':'Punjabi Tadka',
      }
      arr.push(obj);
    })
    console.log(arr);



