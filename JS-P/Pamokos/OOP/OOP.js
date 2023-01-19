//funtion constructor  tokiu atveju pavadinimas is didziosios raides

function Phone(hardware, processor, screenSize) {
  this.hardware = hardware;
  this.processor = processor;
  this.screenSize = screenSize;
}

const tehnology = "Intel";

const iphone = new Phone(tehnologe, "2,4GHz", 7.1);

console.log({ iphone });

const phones = [];

for (let i = 0; i < 5; i++) {
  const phone = new Phone(tehnology, `${i}GHz`, i * 2);

  phones.push(phone);
}

console.log(phones);
