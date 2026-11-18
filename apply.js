function introduce(city) {
  console.log(this.name + " from " + city);
}
 const person = {name:"Javascript"};
introduce.apply(person, ["Hyderabad"]);
// Error in strict mode (cannot read 'name' of null)
// "undefined from Hyderabad" in non-strict mod

function Movie(name, year) {
    const m4 = {
  name: "Inception",
  year: 2010,
  getDetails() {
    return this.name + " was released in " + this.year;
  },
};

console.log(m4.getDetails()); // Inception was released in 2010
}

