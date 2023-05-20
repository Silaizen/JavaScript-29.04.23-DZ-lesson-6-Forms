/*1 task
const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");
messageList.style.whiteSpace = "pre-wrap";

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const authorInput = document.getElementById("author");
  const contentInput = document.getElementById("content");
  const author = authorInput.value;
  const content = contentInput.value;

  const message = document.createElement("div");
  message.classList.add("message");

  const column1 = document.createElement("div");
  column1.classList.add("column");
  const messageAuthor = document.createElement("h3");
  messageAuthor.textContent = author;
  const messageDate = document.createElement("div");
  messageDate.classList.add("date");
  const currentDate = new Date();
  messageDate.textContent = currentDate.toLocaleString();
  column1.appendChild(messageAuthor);
  column1.appendChild(messageDate);

  const separator = document.createElement("hr");

  const column2 = document.createElement("div");
  column2.classList.add("column");
  const messageContent = document.createElement("p");
  messageContent.textContent = content;
  column2.appendChild(messageContent);

  message.appendChild(column1);
  message.appendChild(separator);
  message.appendChild(column2);

  messageList.appendChild(message);

  authorInput.value = "";
  contentInput.value = "";
});
*/

/*2 task
function checkAnswers() {
  const answer1 = document.querySelector('input[name="question1"]:checked');
  const answer2 = document.querySelector('input[name="question2"]:checked');

  let score = 0;
  if (answer1 && answer1.value === "a") {
    score++;
  }
  if (answer2 && answer2.value === "a") {
    score++;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Кількість правильних відповідей: " + score;
}
*/

/*3 task
const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const boldCheckbox = document.getElementById('boldCheckbox');
const underlineCheckbox = document.getElementById('underlineCheckbox');
const italicsCheckbox = document.getElementById('italicsCheckbox');
const alignmentLeft = document.getElementById('alignmentLeft');
const alignmentRight = document.getElementById('alignmentRight');
const alignmentJustify = document.getElementById('alignmentJustify');
const textPreview = document.getElementById('textPreview');

textForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const text = textInput.value;

  let styles = '';

  if (boldCheckbox.checked) {
    styles += 'font-weight: bold; ';
  }

  if (underlineCheckbox.checked) {
    styles += 'text-decoration: underline; ';
  }

  if (italicsCheckbox.checked) {
    styles += 'font-style: italic; ';
  }

  let alignment = '';
  if (alignmentLeft.checked) {
    alignment = 'left';
  } else if (alignmentRight.checked) {
    alignment = 'right';
  } else if (alignmentJustify.checked) {
    alignment = 'justify';
  }

  
  textPreview.style.textAlign = alignment;

  styles += `text-align: ${alignment};`;

  textPreview.innerHTML = `<p style="${styles}">${text}</p>`;
});*/

/*4 task

document.addEventListener("DOMContentLoaded", (event) => {
  const orderForm = document.getElementById("orderForm");
  const orderResultContainer = document.getElementById("orderResultContainer");
  const bookSelects = document.querySelectorAll('input[name="book"]');

  const selectButtons = document.querySelectorAll(".select-button");
  const selectedBookLabel = document.getElementById("selectedBookLabel");
  const bookInput = document.getElementById("books");

  bookSelects.forEach((bookSelect) => {
    bookSelect.addEventListener("click", (event) => {
      const selectedBook = document.querySelector('input[name="book"]:checked');
      const selectedBookName = selectedBook.getAttribute("data-book-title");

      selectedBookLabel.textContent = selectedBookName;
      bookInput.value = selectedBookName;
    });
  });

  selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedBookName = this.getAttribute("data-book-title");
      bookInput.value = selectedBookName;
    });
  });

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedBook = document.getElementById("books");

    const quantity = document.getElementById("quantityInput").value;
    const name = document.getElementById("nameInput").value;
    const date = document.getElementById("dateInput").value;
    const address = document.getElementById("addressInput").value;

    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, "0");
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = formattedDate.getFullYear();

    const formattedDateString = `${day}.${month}.${year}`;
    const message = `${name}, дякуємо за замовлення.
     ${quantity} товар(ів) книга: "${selectedBook.value}" буде доставлено: ${formattedDateString} за адресою: ${address}.`;

    orderResultContainer.childNodes[1].textContent = message;
    orderResultContainer.style.display = "block";
  });
});*/

/* 5 task

const attendanceData = [];


const studentsByGroup = {
  'Група V318': ['Михайло Шкварюк', 'Зиновьев Евстахий', 'Филатов Марк'],
  'Група B210': ['Киселёв Леонард', 'Алчевский Емельян', 'Пономаренко Харитон'],
  'Група G121': ['Морозов Лукьян', 'Фокин Игнатий', 'Толочко Огюст'],
};


function createStudentsList() {
  const groupSelect = document.getElementById('groupSelect');
  const selectedGroup = groupSelect.value;

  const studentsList = document.getElementById('studentsList');
  studentsList.innerHTML = '';

  if (selectedGroup) {
    const students = studentsByGroup[selectedGroup];

    students.forEach(student => {
      const studentLabel = document.createElement('label');
      studentLabel.innerHTML = `
        <input type="checkbox" name="student" value="${student}" />
        ${student}
      `;
      studentsList.appendChild(studentLabel);
    });
  }
}


const groupSelect = document.getElementById('groupSelect');
groupSelect.addEventListener('change', createStudentsList);

const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addPair);


function addPair(event) {
  event.preventDefault();

  const group = document.getElementById('groupSelect').value;
  const lesson = document.getElementById('lessonSelect').value;
  const topic = document.getElementById('topicInput').value;

  const attendance = Array.from(document.querySelectorAll('input[name="student"]')).map(student => ({
    name: student.value,
    present: student.checked,
  }));

  const pair = {
    group,
    lesson,
    topic,
    attendance,
  };

  attendanceData.push(pair);

  
  document.getElementById('groupSelect').selectedIndex = 0;
  document.getElementById('lessonSelect').selectedIndex = 0;
  document.getElementById('topicInput').value = '';

  
  const students = document.querySelectorAll('input[name="student"]');
  students.forEach(student => {
    student.checked = false;
  });

  alert('Пара успішно збережена!');
}


function viewPairs() {
  const attendanceList = document.getElementById('attendanceList');

  attendanceList.innerHTML = '';

  if (attendanceData.length === 0) {
    attendanceList.textContent = 'Немає відмічених пар.';
    return;
  }

  attendanceData.forEach(pair => {
    const pairElement = document.createElement('div');
    pairElement.innerHTML = `
      <h3>${pair.group} - ${pair.lesson}</h3>
      <p>Тема: ${pair.topic}</p>
      <ul>
        ${pair.attendance.map(student => `<li>${student.name}: ${student.present ? 'Присутній' : 'Відсутній'}</li>`).join('')}
      </ul>
    `;
    attendanceList.appendChild(pairElement);
  });
}

const viewButton = document.getElementById('viewButton');
viewButton.addEventListener('click', viewPairs);

createStudentsList();
*/

/*6 task

const bookings = [];

const bookingForm = document.getElementById('bookingForm');
const seatsTable = document.getElementById('seatsTable');
const bookingTable = document.getElementById('bookingTable');

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const date = new Date(document.getElementById('date').value);
  const checkboxes = Array.from(seatsTable.querySelectorAll('input[name="seat"]:checked'));
  const seats = checkboxes.map(checkbox => checkbox.value);

  if (origin === destination) {
    alert("Неможливо обрати одне і теж саме мiсто для виїзду, так і для прибуття.");
    return;
  }

  const isAlreadyBooked = bookings.some(booking =>
    booking.origin === origin &&
    booking.destination === destination &&
    booking.date === date.toLocaleDateString('uk-UA') &&
    seats.some(seat => booking.seat === seat)
  );

  if (isAlreadyBooked) {
    alert("Ви вже забронювали ці місця на цей день.");
    return;
  }

  for (let i = 0; i < seats.length; i++) {
    const booking = {
      origin: origin,
      destination: destination,
      date: date.toLocaleDateString('uk-UA'), 
      seat: seats[i]
    };
    bookings.push(booking);
  }

  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  
  updateBookingTable();
});

function updateBookingTable() {
 
  while (bookingTable.rows.length > 1) {
    bookingTable.deleteRow(1);
  }
 
  for (let i = 0; i < bookings.length; i++) {
    const row = bookingTable.insertRow();
    const originCell = row.insertCell(0);
    const destinationCell = row.insertCell(1);
    const dateCell = row.insertCell(2);
    const seatCell = row.insertCell(3);

    originCell.innerHTML = bookings[i].origin;
    destinationCell.innerHTML = bookings[i].destination;
    dateCell.innerHTML = bookings[i].date;
    seatCell.innerHTML = bookings[i].seat;
  }
}

function updateSeatAvailability() {
  const checkboxes = Array.from(seatsTable.querySelectorAll('input[name="seat"]'));
  checkboxes.forEach(checkbox => {
    const seat = checkbox.value;
    const isBooked = bookings.some(booking => booking.date === getCurrentDate() && booking.seat === seat);
    checkbox.disabled = isBooked;
    checkbox.parentNode.style.backgroundColor = isBooked ? 'gray' : '';
  });
}

function getCurrentDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}-${month}-${year}`;
}

document.getElementById('date').addEventListener('change', updateSeatAvailability);


updateSeatAvailability();*/
