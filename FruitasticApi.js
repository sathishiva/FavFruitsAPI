(function(container) {
  var names = [
    'Chris', 'Svetla', 'Duncan', 'Vlad', 'Dennis', 'Amir', 'Kunjan', 'Aaron', 'Kirby', 'Michael',
    'Bryan', 'Edward', 'Stan', 'Eric', 'Jennifer', 'Kristy', 'Jason', 'Phoebe', 'Kate', 'Denise',
    'Abigail', 'Ethan', 'Lucia', 'Harry', 'David', 'Cameron', 'Erica', 'Sophie', 'Francis', 'Brian',
    'Paco', 'Luke', 'Margie', 'Sacha', 'Desmond', 'Ruby', 'Wanda', 'Rosalie', 'Angel', 'Layla', 'Flynn',
    'Anthony', 'Jasmine', 'Janie', 'Debbie', 'Keith', 'Porter', 'Francisco', 'Javier', 'Rudolph'
  ];
  var letters = 'ABCDEFGHIJKLMNOPRSTVWY'.split('');
  var fruits = [
    'blackberries', 'apple', 'orange', 'banana', 'pear', 'watermelon', 'cherries', 'mango',
    'grapes', 'apple', 'orange', 'cantaloupe', 'strawberries', 'kiwi', 'pineapple', 'pomegranate'
  ];

  var fruitsAPI = {
    get: function(callback) {
      var iter = 30 + Math.round(Math.random()*50);

      var fruitIter = 3 + Math.ceil(Math.random()*4);
      var availFruits = pickFruits(fruitIter);

      var arr = [];
      for (var i=0; i<iter; i++) {
        var randF = Math.floor(Math.random() * names.length);
        var randL = Math.floor(Math.random() * letters.length);
        var randFruit = Math.floor(Math.random() * availFruits.length);
        arr[i] = {
          name: names[randF] + ' ' + letters[randL] + '.',
          favoriteFruit: availFruits[randFruit]
        }
      }
      var timeout = Math.floor(Math.random()*500) + 100;
      setTimeout(function(){
        if (callback) {
          callback(arr);
        }
      }, timeout);
    }
  };

  function pickFruits(num) {
    var availFruits = [];
    var rerun = true;
    while(rerun) {
      for (var j = 0; j < num; j++) {
        var index = Math.floor(Math.random() * fruits.length);
        availFruits.push(fruits[index]);
      }
      var seen = availFruits[0];
      for (var i = 1; i < availFruits.length; i++) {
        if (availFruits[i] != seen) {
          rerun = false;
        }
      }
    }
    return availFruits;
  }

  container.FruitasticApi = fruitsAPI;
})(window);
