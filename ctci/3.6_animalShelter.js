export class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
    this.id = 0;
  }

  enqueueDog(dog) {
    this.dogs.push([dog, this.id++]);
  }

  enqueueCat(cat) {
    this.cats.push([cat, this.id++]);
  }

  dequeueAny() {
    const firstCatId = this.cats.length ? this.cats[0][1] : Number.POSITIVE_INFINITY;
    const firstDogId = this.dogs.length ? this.dogs[0][1] : Number.POSITIVE_INFINITY;
    if (firstCatId === firstDogId) return undefined;
    return firstCatId < firstDogId ? this.cats.shift()[0] : this.dogs.shift()[0];
  }

  dequeueCat() {
    return this.cats.length ? this.cats.shift()[0] : undefined;
  }

  dequeueDog() {
    return this.dogs.length ? this.dogs.shift()[0] : undefined;
  }
}
