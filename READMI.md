# 🎬 Cinema Ticket Calculator

A responsive cinema ticket calculator built with **HTML, CSS, and JavaScript**. Users can select ticket types, apply age-based or student discounts, add multiple tickets, and calculate the total price automatically.

## 🚀 Features

- **Ticket Selection:** Choose between Standard (£12) and VIP (£20) tickets.
- **Automatic Discounts:**
  - Children under 12: 50% discount.
  - Students aged 18–64: 20% discount.
  - Seniors aged 65 and over: 30% discount.
- **Dynamic Student Options:** Student status appears automatically for eligible ages.
- **Input Validation:** Prevents empty, negative, decimal, and out-of-range ages (0–120).
- **Visual Error Feedback:** Displays error messages and highlights invalid age inputs.
- **Dynamic Ticket Table:** Add and remove tickets without reloading the page.
- **Automatic Total Calculation:** Updates the total when tickets are added or removed.
- **Clear All:** Removes all tickets and resets the total.
- **Form Reset:** Clears the form after successfully adding a ticket.

## 🛠️ Technologies Used

- **HTML5** — Page structure and form elements.
- **CSS3** — Layout, styling, and responsive design.
- **JavaScript (ES6)** — DOM manipulation, event handling, input validation, and price calculations.

## 💰 Ticket Prices and Discounts

| Category | Standard | VIP |
|---|---:|---:|
| Regular | £12.00 | £20.00 |
| Child (under 12) | £6.00 | £10.00 |
| Student (18–64) | £9.60 | £16.00 |
| Senior (65+) | £8.40 | £14.00 |

Discounts are applied individually and cannot be combined.

## 📖 How to Use

1. Enter the customer's age.
2. Select Standard or VIP.
3. Choose student status when applicable.
4. Click **Add Ticket**.
5. Repeat to add more tickets.
6. View the automatically calculated total.
7. Remove individual tickets using the 🗑️ button or select **Clear All** to start again.

## 🧠 What I Practised

This project helped me improve my understanding of:

- JavaScript conditional statements (`if / else`).
- DOM manipulation with `querySelector()` and `createElement()`.
- Event listeners and dynamic user interactions.
- Input validation using `Number.isInteger()`.
- Working with radio buttons and the `checked` property.
- Iterating through DOM elements with `forEach()`.
- Using functions to avoid repeating code.
- Updating the user interface dynamically.

## 📂 Project Structure

```text
cinema-ticket-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ Getting Started

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

No installation or external dependencies are required.

## 👨‍💻 Author

Developed by [aledjan1](https://github.com/aledjan1) as part of my JavaScript learning journey.

## My demo project

https://aledjan1.github.io/Cinema-Ticket-Calculator/

The project focuses on building practical frontend development skills through hands-on practice.
