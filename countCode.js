function countCode(letter, codes) {
  // Loome regex, mis otsib antud algustähega algavaid koode
  const regex = new RegExp(`^${letter}`, 'i'); // 'i' teeb otsingu tõstutundlikuks

  // Loeme, mitu koodi vastavad antud regex-ile
  const count = codes.filter(code => regex.test(code)).length;

  return count;
}

// Näide koodide massiivist
const koodid = ["Apple", "banana", "Code", "Dog", "Elephant", "Ice", "igloo", "Igloo"];
const koodid = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
const tulemus = countCode("i", koodid);
console.log(`Koodide arv, mis algavad "i" tähega: ${tulemus}`);
