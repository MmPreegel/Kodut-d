function countCode(letter, codes) {
  // Loome regex, mis otsib antud algustähega algavaid koode
  const regex = new RegExp(`^${letter}`, 'i'); // 'i' teeb otsingu tõstutundlikuks

  // Loeme, mitu koodi vastavad antud regex-ile
  const count = codes.filter(code => regex.test(code)).length;

  return count;
}

// Näide koodide massiivist
const koodid = ["Apple", "banana", "Code", "Dog", "Elephant", "Ice", "igloo", "Igloo"];

// Näide funktsiooni kasutamisest
const tulemus = countCode("i", koodid);
console.log(`Koodide arv, mis algavad "i" tähega: ${tulemus}`);
