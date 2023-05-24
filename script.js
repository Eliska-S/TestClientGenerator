const maleFirstNames = [
  "Jan",
  "Petr",
  "Jiří",
  "Michal",
  "Tomáš",
  "Miroslav",
  "Martin",
  "Lukáš",
  "Jakub",
  "Josef",
  "David",
  "Daniel",
  "Karel",
  "Vladimír",
  "Radek",
  "Filip",
  "Adam",
  "Jiří",
  "Pavel",
  "František",
  "Jaroslav",
  "Stanislav",
  "Milan"
];

const femaleFirstNames = [
  "Jana",
  "Petra",
  "Eva",
  "Hana",
  "Kateřina",
  "Lucie",
  "Lenka",
  "Marie",
  "Jitka",
  "Alena",
  "Barbora",
  "Simona",
  "Věra",
  "Adéla",
  "Zuzana",
  "Veronika",
  "Iveta",
  "Monika",
  "Tereza",
  "Kristýna",
  "Petra",
  "Anežka",
];

const maleSurnames = [
  "Novák",
  "Svoboda",
  "Novotný",
  "Dvořák",
  "Černý",
  "Procházka",
  "Kučera",
  "Veselý",
  "Horák",
  "Němec",
  "Krejčí",
  "Malý",
  "Bartoš",
  "Pokorný",
  "Holub",
  "Růžička",
  "Beneš",
  "Fiala",
  "Kolář",
  "Pospíšil",
  "Skočil",
  "Líbal",
  "Kroupa",
  "Jesenský",
  "Klučina",
  "Beran",
  "Prokeš",
  "Burian",
  "Spurný",
  "Konopík",
  "Strýček"
];

const femaleSurnames = [
  "Adamovská",
  "Kalivodová",
  "Burianová",
  "Voříšková",
  "Rožňovská",
  "Lipovská",
  "Beranová",
  "Horáková",
  "Zemanová",
  "Pokorná",
  "Nováková",
  "Kubíčková",
  "Pacovská",
  "Bubnová",
  "Dvořáková",
  "Červená",
  "Smutná",
  "Petrovská",
  "Lehečková",
  "Zimová",
  "Králová",
  "Dubská",
  "Kroupová",
  "Vomáčková",
  "Malá",
  "Křenková",
  "Černá",
  "Prokešová",
  "Laštůvková",
  "Nováčková"
];

const citiesOfBirth = [
  "Praha",
  "Brno",
  "Ostrava",
  "Plzeň",
  "Liberec",
  "Olomouc",
  "Hradec Králové",
  "Ústí nad Labem",
  "Zlín",
  "Pardubice",
  "Domažlice",
  "Most",
  "Poděbrady",
  "Třeboň",
  "České Budějovice",
  "Klatovy",
  "Kutná Hora",
  "Kolín",
  "Příbram",
  "Frýdek Místek",
  "Kaplice",
  "Český Krumlov",
  "Trutnov",
  "Karlovy Vary",
  "Plasy",
  "Tachov",
  "Kunovice",
  "Jihlava",
  "Beroun",
  "Rokycany",
  "Nepomuk",
  "Polička",
  "Kralovice"
];

const addresses = [
  {
    Street: "Krameriova",
    SequenceNumber: 70,
    OrientationNumber: '',
    City: "Klatovy I",
    ZipCode: 33901
  },
  {
    Street: "Myslbekova",
    SequenceNumber: 357,
    OrientationNumber: 36,
    City: "Nový Jičín",
    ZipCode: 74101
  },
  {
    Street: "Coufalova",
    SequenceNumber: 970,
    OrientationNumber: 2,
    City: "Znojmo",
    ZipCode: 66902
  },
  {
    Street: "Erbenova",
    SequenceNumber: 221,
    OrientationNumber: 5,
    City: "Praha 5",
    ZipCode: 15000
  },
  {
    Street: "Dvorní",
    SequenceNumber: 70,
    OrientationNumber: 9,
    City: "Plzeň 1",
    ZipCode: 30100
  },
  {
    Street: "Pražská",
    SequenceNumber: 16,
    OrientationNumber: 4,
    City: "Poděbrady I",
    ZipCode: 29001
  },
];

const amounts = [
  "100",
  "200",
  "300",
  "500",
  "700",
  "1000",
  "1500",
  "2000",
  "2500",
  "3000",
];

// Generate random Czech name
function getRandomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

function generateFirstName(gender) {
  const names = gender === 'M' ? maleFirstNames : femaleFirstNames;
  return getRandomName(names);
}

function generateLastName(gender) {
  const names = gender === 'M' ? maleSurnames : femaleSurnames;
  return getRandomName(names);
}

// Generate random Czech birthnumber
function formatDate(sex, date) {
  const year = date.getFullYear().toString().substr(-2);
  const day = date.getDate().toString().padStart(2, '0');
  let month;
  if (sex === 'M') {
    month = (date.getMonth() + 1).toString().padStart(2, '0');
  } else {
    month = (date.getMonth() + 51).toString().padStart(2, '0');
  }
  return `${year}${month}${day}`;
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function testRc(strRc, oldBirthNumber) {
  return oldBirthNumber || parseInt(strRc) % 11 == 0;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateLastPart(oldBirthNumber) {
  return randomIntFromInterval(0, oldBirthNumber ? 999 : 9999).toLocaleString('en-US', {
    minimumIntegerDigits: oldBirthNumber ? 3 : 4,
    useGrouping: false
  });
}

function generateBirthNumber(sex, birthDate) {
  const oldBirthNumber = birthDate.getFullYear() < 1954;
  let lastPart = generateLastPart(oldBirthNumber);
  let firstPart = formatDate(sex, birthDate);
  console.log(firstPart)

  let birthNumber = firstPart + lastPart;

  while (!testRc(birthNumber, oldBirthNumber)) {
    lastPart = generateLastPart(oldBirthNumber);
    birthNumber = firstPart + lastPart;
  }

  return birthNumber;
}

// Generate an e-mail address
function generateEmailAddress(firstName, lastName) {
  const domains = ["gmail.com", "seznam.cz", "outlook.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const cleanLastName = lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '');
  const email = `${firstName
    .substr(0, 1)
    .toLowerCase()}${cleanLastName.toLowerCase()}@${randomDomain}`;
  return email;
}

// Generate a phone number
function generatePhoneNumber() {
  const numbers = ["777", "776", "608", "775", "604", "680"];
  const firstPart = numbers[Math.floor(Math.random() * numbers.length)];
  let secondPart = "";
  for (let i = 0; i < 6; i++) {
    secondPart += Math.floor(Math.random() * 10);
  }
  const phoneNumber = `${firstPart}${secondPart}`;

  return phoneNumber;
}

// Generate a random Czech city of birth
function generateCityOfBirth() {
  return citiesOfBirth[Math.floor(Math.random() * citiesOfBirth.length)];
}

// Generate a random nine-digit ID card number
function generateIDNumber() {
  let idNumber = "";
  for (let i = 0; i < 9; i++) {
    idNumber += Math.floor(Math.random() * 10);
  }
  return idNumber;
}

// Get an address
function getAddress() {
  const address = addresses[Math.floor(Math.random() * addresses.length)]
  return address;
}

// Generate a contribution amount
function generateContribution() {
  const contributionAmount =
    amounts[Math.floor(Math.random() * amounts.length)];

  return contributionAmount;
}

// Get today's date
function getDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}.${month}.${year}`;

  return currentDate;
}

// Generate random due date
function generateRandomDate() {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() + 1);
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 6);
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  const day = randomDate.getDate().toString().padStart(2, '0');
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
  const year = randomDate.getFullYear().toString();

  return `${day}.${month}.${year}`;
}

function generateFakePeople() {
  const minAge = parseInt(document.getElementById("minAge").value);
  const maxAge = parseInt(document.getElementById("maxAge").value);
  const count = parseInt(document.getElementById("count").value);
  
  generateFakeCzechPeople(minAge, maxAge, count);
}

// Generate 50 fake Czech people
function generateFakeCzechPeople(minAge, maxAge, count) {
  const fakePeople = [];
  for (let i = 0; i < count; i++) {
    const sex = Math.random() < 0.5 ? "M" : "F";
    const birthDate = randomDate(new Date(2023 - maxAge, 0, 1), new Date(2023 - minAge, 0, 1))
    const firstName = generateFirstName(sex);
    const lastName = generateLastName(sex);
    const birthNumber = generateBirthNumber(
      sex,
      birthDate
    );
    const cityOfBirth = generateCityOfBirth();
    const email = generateEmailAddress(firstName, lastName);
    const phoneNumber = generatePhoneNumber();
    const address = getAddress();
    const street = address.Street;
    const sequenceNumber = address.SequenceNumber;
    const orientationNumber = address.OrientationNumber;
    const city = address.City;
    const zipCode = address.ZipCode;
    const idNumber = generateIDNumber();
    const idIssuer = `MěÚ ${city}`;
    const idValid = generateRandomDate();
    const contribution = generateContribution();
    const dateReceived = getDate();

    fakePeople.push({
      firstName: firstName,
      lastName: lastName,
      sex: sex,
      birthNumber: birthNumber,
      cityOfBirth: cityOfBirth,
      idNumber: idNumber,
      idIssuer: idIssuer,
      idValid: idValid,
      email: email,
      phoneNumber: phoneNumber,
      street: street,
      sequenceNumber: sequenceNumber,
      orientationNumber: orientationNumber,
      city: city,
      zipCode: zipCode,
      contribution: contribution,
      received: dateReceived,
    });
  }

  const peopleTable = document.getElementById("people-table");
  peopleTable.style.display = "block";
  const tbody = peopleTable.querySelector("tbody");
  tbody.innerHTML = "";

  fakePeople.forEach((person) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.birthNumber}</td>
            <td>${person.cityOfBirth}</td>
            <td>${person.phoneNumber}</td>
            <td>${person.email}</td>
            <td>${person.zipCode}</td>
            <td>${person.city}</td>
            <td>${person.street}</td>
            <td>${person.sequenceNumber}</td>
            <td>${person.orientationNumber}</td>
            <td>${person.idNumber}</td>
            <td>${person.idIssuer}</td>
            <td>${person.idValid}</td>
            <td>${person.contribution}</td>
            <td>${person.received}</td>
          `;
    tbody.appendChild(row);
  });
}

function exportToExcel(tableID) {
  const filename = 'clients.xlsx';

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');
  const table = document.getElementById(tableID);

  // Get table header
  const headerRow = table.querySelector("thead tr");
  const headerCells = headerRow.getElementsByTagName("th");
  const headerValues = [];

  for (let j = 0; j < headerCells.length; j++) {
    headerValues.push(headerCells[j].innerText);
  }

  worksheet.addRow(headerValues);

  // Get all table rows
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    const values = [];

    for (let j = 0; j < cells.length; j++) {
      values.push(cells[j].innerText);
    }

    worksheet.addRow(values);
  }

  // Save the workbook as an Excel file
  workbook.xlsx.writeBuffer().then(function(buffer) {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    if (typeof window.navigator.msSaveBlob === 'function') {
      // For IE and Edge browsers
      window.navigator.msSaveBlob(blob, filename);
    } else {
      // For other browsers
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  });
}

