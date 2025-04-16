// Abstraction in JavaScript

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._fuelLevel = 100; // Private property (by convention)
        this._engineStarted = false;
    }

    // Public methods (the interface)
    start() {
        if (this._fuelLevel > 0) {
            this._engineStarted = true;
            this._decreaseFuel(1);
            return `${this.make} ${this.model} engine started`;
        } else {
            return `Cannot start: no fuel`;
        }
    }

    drive(distance) {
        if (!this._engineStarted) {
            return `Start the engine first`;
        }
        
        const fuelNeeded = this._calculateFuelConsumption(distance);
        
        if (this._fuelLevel >= fuelNeeded) {
            this._decreaseFuel(fuelNeeded);
            return `Drove ${distance} miles`;
        } else {
            return `Not enough fuel to drive that far`;
        }
    }

    refuel(amount) {
        this._fuelLevel = Math.min(100, this._fuelLevel + amount);
        return `Fuel level: ${this._fuelLevel}%`;
    }

    // Private methods (implementation details hidden from users)
    _decreaseFuel(amount) {
        this._fuelLevel = Math.max(0, this._fuelLevel - amount);
    }

    _calculateFuelConsumption(distance) {
        // Simplified calculation
        return distance * 0.5;
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar._decreaseFuel(10)
console.log(myCar.start());
console.log(myCar.drive(50));
console.log(myCar.refuel(20));


// Users don't need to know how fuel is calculated or engine is managed
// They just use the simple public interface