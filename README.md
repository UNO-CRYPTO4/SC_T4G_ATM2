# Day 6 Assignment: Visual ATM System Interaction 🏦

Welcome to your Day 6 assignment! In this challenge, you will combine your understanding of variables, conditional statements, mathematical operations, and the modern `.addEventListener()` system to build an interactive, working digital bank terminal.

## ⚠️ Getting Started
1. **Fork** this repository to your personal GitHub account.
2. **Clone** your personal fork to your computer using `git clone <your-forked-repo-url>`.
3. Open the folder in VS Code and build your application algorithms.
4. **DO NOT create a Pull Request (PR)** back to the main classroom repository.

## 📝 Learning Objectives
* Bind user interface buttons to running scripts using modern event handlers.
* Read values from live text input boxes dynamically using text field properties.
* Manage changing steps or states inside a running web application.
* Perform secure logic checks and mathematical deductions inside an event click function.

## 🛠️ Assignment Tasks

Open your local `script.js` file and fill in the missing logic blocks to complete the following five required tasks:

### TASK 1: State Initialization
Set up your baseline banking vault parameters. Assign the `accountBalance` variable to any numerical starting balance you prefer, and assign the `correctPin` string variable to your own custom 4-digit security code.

### TASK 2: Security Validation Check
Navigate to the `PIN` processing block. Replace the `false` condition inside the `if` statement to strictly check whether the user's typed input variable matches your correct security code variable.

### TASK 3: Availability of Funds Validation
Navigate to the `WITHDRAW` processing block. Convert the user input string into a standard calculating number format. Then, replace the `false` condition inside the nested conditional check to verify whether their requested cash withdrawal amount is less than or equal to their available account balance.

### TASK 4: Ledger Deductions and Balances
Inside the successful withdrawal block, perform a mathematical subtraction operation to deduct the requested withdrawal cash amount from your main account balance variable. Save the new calculation total back into your account balance state.

### TASK 5: Overdraft Error Handling
Complete the `else` block pathway to safely handle overdraft attempts. Write an error statement using template literal string interpolation to warn the user that their transaction was declined, showing them exactly how much money they requested versus their actual available balance.

***

## 🚀 Running and Testing Your Work
Save all your script additions, launch your local `index.html` file within a browser window, and test your terminal logic pipelines:
* Type your correct security code and press **SUBMIT**. Verify the screen swaps instantly to show your balance.
* Test an overdraft attempt (e.g., requesting a withdrawal higher than your starting balance) and ensure the screen blocks the payment with an intentional error display message.
* Refresh your page, run a successful withdrawal under your limit, and confirm the digital monitor subtracts the cash and updates your balance total accurately!
