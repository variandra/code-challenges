function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for(i=0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == true){
        sheep++;
      }
      }
    return(sheep);
  }