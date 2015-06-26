// window.hello = 'hello';
// console.log(this.hello);

// var helloWorld = function () {
//   console.log(this);
// };

// helloWorld();

// var human = {
//   name: 'Alexa',
//   getName: function () {
//     console.log('getName', this.name);
//   }
// };

// human.getName();

// var Mail = function () {
//   this.letter  ='This is my letter';
//   console.log(this);
// };

// Mail.prototype.getLetter = function () {
//   console.log(this);
// };

// var mail = new Mail();
// mail.getLetter();

// $('.button').click(human.getName.bind(human));

var sport = {
  tournament: 'The Master',
  players: [
    {
      name: 'Wood',
      age: 37
    },
    {
      name: 'Mike',
      age: 43
    }
  ],
  show: function () {
    console.log(this);
    var self = this;
    this.players.forEach(function (person) {
      console.log(person.name + ' is playing ' + self.tournament);
    });
  }
};


sport.show();
