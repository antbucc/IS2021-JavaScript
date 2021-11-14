// Esercizio 1
const pesoPippo = 90;
const altezzaPippo = 1.95;
const pesoPluto = 92;
const altezzaPluto = 1.95;

const BMIPippo = pesoPippo / altezzaPippo ** 2;
const BMIPluto = pesoPluto / (altezzaPluto * altezzaPluto);
console.log(BMIPippo, BMIPluto);
if (BMIPippo > BMIPluto) {
  console.log(
    `Pippo's BMI (${BMIPippo}) is higher than Pluto's (${BMIPluto})!`
  );
} else {
  console.log(
    `Pluto's BMI (${BMIPluto}) is higher than Pippo's (${BMIPippo})!`
  );
}
