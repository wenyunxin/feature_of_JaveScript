// arrow function and lexical this
const kebo = {
  name: "kebo",
  friends: ["fisher", "Oneal"],
  printFriends () {
    this.friends.forEach(f =>
      console.log(this.name + " knows " + f)
    )
  }
}

console.log(kebo.printFriends())

// lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  }

  return example();
}

console.log(square(1, 4, 1.1));