const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const wagonStateReducer = (state = initialWagonState, action) => {
    switch(action.type){
  
      case 'gather' : {
        let {supplies, distance, days} = state;
        supplies += 15;
        days += 1;
        return {supplies, distance, days};
      }
  
      case 'travel': {
      let {supplies, distance, days} = state;
     let checkSupplies = supplies - (20*action.payload);
  
     if(checkSupplies < 0){
       return {supplies, distance, days};
     }
     else{
     distance += (10*action.payload);
     days += action.payload;
     supplies -= (20*action.payload);
     return {supplies, distance, days};
     }
      }
  
      case 'tippedWagon': {
        let {supplies, distance, days} = state;
        supplies -= 30;
        days += 1;
        return {supplies, distance, days};
      }
  
      default: {
        return state;
      }
    }
  }
  
  let wagon = wagonStateReducer(undefined, '');
  console.log(wagon);
  wagon = wagonStateReducer(wagon, {type: 'travel', payload: 1});
  console.log(wagon);
  wagon = wagonStateReducer(wagon, {type: 'gather'});
  console.log(wagon);
  wagon = wagonStateReducer(wagon, {type: 'tippedWagon'});
  console.log(wagon);
  
  wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3});
  console.log(wagon);
  
  
  
  