var Stack = function(){
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    size += 1;
  };

  someInstance.pop = function(){
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
