
function introduce(city,year) {
  console.log(this.name + " from " + city + " in year " + year);
}

const person = {
    name: "Javascript"
}
introduce.apply(person, ["Hyderabad", 2026]);
introduce.call(person, "Hyderabad", 2026);
const res = introduce.bind(person, "Hyderabad", 2026);
res();
