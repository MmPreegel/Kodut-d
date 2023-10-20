var tellimus = {
    "id": 2113,
    "orderNumber": "E210126001",
    "createdAt": "2021-01-26 16:04:24",
    "clientName": "Kalle Tali",
    "deliveryType": "Omniva smartpost",
    "deliveryValue": 178,
    "rows": [
      {
        "article_id": 31,
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
        "product_code": "257549",
        "price": 49.1666666667,
        "amount": 1,
        "vat": 0.2
      },
      {
        "article_id": 23420,
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
        "product_code": "355836",
        "price": 5.0666666667,
        "amount": 2,
        "vat": 0.2
      },
      {
        "article_id": 23421,
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
        "product_code": "000000000501267301",
        "price": 5.825,
        "amount": 1,
        "vat": 0.2
      }
    ]
  };
  
  console.log("Tellimuse objekti sisu:");
  
  // Käi läbi iga kauba rida tellimuses
  tellimus.rows.forEach(function(kaup, index) {
    console.log("------------------------------------------------");
    console.log("Kaubanimi: " + kaup.name);
    console.log("Kogus: " + kaup.amount);
    console.log("Hind: " + kaup.price);
    var summa = kaup.price * kaup.amount * (1 + kaup.vat); // Summa koos käibemaksuga
    console.log("Summa: " + summa.toFixed(2)); // Kahekohaarvutusega summa
  });
  
  // Arvuta ja prindi tellimuse kogusumma
  var tellimuseSumma = tellimus.rows.reduce(function(sum, kaup) {
    return sum + kaup.price * kaup.amount * (1 + kaup.vat);
  }, 0);
  
  console.log("------------------------------------------------");
  console.log("Tellimuse kogusumma: " + tellimuseSumma.toFixed(2));
