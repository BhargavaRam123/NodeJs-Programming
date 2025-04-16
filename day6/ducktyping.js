//ducktyping in js
function isDuck(obj) {
    return obj.quack && obj.waddle;
}

const duck = {
    quack: function() { console.log("Quack!"); },
    waddle: function() { console.log("Waddle!"); }
};
const notADuck = {
    quack: function() { console.log("Quack!"); }
};
const notADuck2 = {
    waddle: function() { console.log("Waddle!"); }
};
const notADuck3 = {
    quack: function() { console.log("Quack!"); },
    waddle: function() { console.log("Waddle!"); },
    swim: function() { console.log("Swim!"); }
};
const notADuck4 = {
    swim: function() { console.log("Swim!"); }
};
const notADuck5 = {
    quack: function() { console.log("Quack!"); },
    swim: function() { console.log("Swim!"); }
};

isDuck(duck); // true
isDuck(notADuck); // false
isDuck(notADuck2); // false
isDuck(notADuck3); // true
isDuck(notADuck4); // false
isDuck(notADuck5); // false