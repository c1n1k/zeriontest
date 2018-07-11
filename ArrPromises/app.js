class ArrPromise {
  constructor() {
    this.arr = [];
  }

  push(el) {
    this.arr.push(el);
  }

  run() {
    const arr = this.arr;

    arr.reduce((prevPromise, curPromise) => {
      return prevPromise.then(() => {
        setTimeout(() => {
          curPromise.then(res => console.log(res));
        }, 3000);
        return curPromise;
      });
    }, Promise.resolve());
  }
}

const arr = new ArrPromise();

const p1 = new Promise(res => setTimeout(() => res("r1"), 2000));
const p2 = new Promise(res => setTimeout(() => res("r2"), 5000));
const p3 = new Promise(res => setTimeout(() => res("r3"), 0));

arr.push(p1);
arr.push(p2);
arr.push(p3);

arr.run();
