const inputAge = document.querySelector("#age");
const studentGroup = document.querySelector("#student-group");
const addTicket = document.querySelector(".add-btn");
const errorMessage = document.querySelector("#error-message");
const ticketsBody = document.querySelector("#tickets-body");
const emptyMessage = document.querySelector("#empty-message");
const clearBtn = document.querySelector(".clear-btn");
const totalPrice = document.querySelector("#total-price");

addTicket.addEventListener("click", function () {
  const age = Number(inputAge.value);
  errorMessage.textContent = "";

  let isValid = true;

  if (inputAge.value === "") {
    errorMessage.textContent = "Please enter your age.";
    isValid = false;
  }

  if (age < 0) {
    errorMessage.textContent = "Your age cannot be negative.";
    isValid = false;
  }

  if (!Number.isInteger(age) || age > 120) {
    errorMessage.textContent = "Please enter a valid age between 0 and 120.";
    isValid = false;
  }

  if (isValid === false) {
    inputAge.classList.add("invalid");
    return;
  }

  const ticketType = document.querySelector(
    'input[name="ticket-type"]:checked',
  ).value;
  let price = 0;
  if (ticketType === "standard") {
    price = 12;
  } else {
    price = 20;
  }

  let discountPercent = 0;

  if (age < 12) {
    price = price / 2;
    discountPercent = 50;
  }

  if (age >= 65) {
    let discountPensioner = (price * 30) / 100;
    price = price - discountPensioner;
    discountPercent = 30;
  }

  const student = document.querySelector('input[name="student"]:checked');
  if (age >= 18 && age <= 64 && student === null) {
    errorMessage.textContent = "Please select your student status.";
    return;
  }

  if (age >= 18 && age <= 64 && student.value === "yes") {
    let discountStudent = (price * 20) / 100;
    price = price - discountStudent;
    discountPercent = 20;
  }

  const newRow = document.createElement("tr");
  const numberCell = document.createElement("td");
  const ageCell = document.createElement("td");
  const ticketCell = document.createElement("td");
  const discountCell = document.createElement("td");
  const priceCell = document.createElement("td");
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");

  ticketsBody.append(newRow);
  emptyMessage.style.display = "none";
  newRow.append(numberCell);
  newRow.append(ageCell);
  newRow.append(ticketCell);
  newRow.append(discountCell);
  newRow.append(priceCell);
  newRow.append(deleteCell);
  deleteCell.append(deleteBtn);

  numberCell.textContent = ticketsBody.children.length;
  ageCell.textContent = age;
  ticketCell.textContent = ticketType;
  discountCell.textContent = `${discountPercent}%`;
  priceCell.textContent = `£${price.toFixed(2)}`;
  deleteBtn.textContent = "🗑️";
  calculateTotal();

  inputAge.value = "";
  if (student !== null) {
    student.checked = false;
  }
  studentGroup.style.display = "none";
  document.querySelector(
    'input[name = "ticket-type"][value = "standard"]',
  ).checked = true;

  deleteBtn.addEventListener("click", function () {
    newRow.remove();
    calculateTotal();
    const rows = ticketsBody.querySelectorAll("tr");
    rows.forEach(function (row, index) {
      let numberCell = row.querySelector("td");
      numberCell.textContent = index + 1;
    });
    if (ticketsBody.children.length === 0) {
      emptyMessage.style.display = "block";
    }
  });
});

clearBtn.addEventListener("click", function () {
  ticketsBody.innerHTML = "";
  emptyMessage.style.display = "block";
  calculateTotal();
});

function calculateTotal() {
  let total = 0;
  const rows = ticketsBody.querySelectorAll("tr");
  rows.forEach(function (row, index) {
    let priceCell = row.querySelectorAll("td")[4];
    let price = Number(priceCell.textContent.replace("£", ""));
    total += price;
  });
  totalPrice.textContent = `£${total.toFixed(2)}`;
}

inputAge.addEventListener("input", function () {
  const age = Number(inputAge.value);
  if (Number.isInteger(age) && age >= 18 && age <= 64) {
    studentGroup.style.display = "block";
  } else {
    studentGroup.style.display = "none";
    const student = document.querySelector('input[name="student"]:checked');
    if (student !== null) {
      student.checked = false;
    }
  }
  if (
    inputAge.value === "" ||
    (age >= 0 && age <= 120 && Number.isInteger(age))
  ) {
    inputAge.classList.remove("invalid");
  } else {
    inputAge.classList.add("invalid");
  }

  errorMessage.textContent = "";
});
