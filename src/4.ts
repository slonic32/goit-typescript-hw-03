class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(k: Key) {
    this.key = k;
  }
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[] = [];
  public comeIn(p: Person): void {
    if (this.door) {
      this.tenants.push(p);
    }
  }
  constructor(k: Key) {
    this.door = false;
    this.key = k;
  }
  public abstract openDoor(k: Key);
}

class MyHouse extends House {
  public openDoor(k: Key) {
    if (k.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
