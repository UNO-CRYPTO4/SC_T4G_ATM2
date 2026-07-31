// VISUAL ATM SYSTEM
// INSTRUCTIONS: Fill in the missing logic pieces inside where there are Task comments!

// 1. Selecting the visual HTML pieces
const messageBox = document.getElementById("screen-text");
const titleBox = document.getElementById("screen-title");
const inputBox = document.getElementById("atm-input");
const submitBtn = document.getElementById("atm-btn");

// TASK 1: State Initialization
let accountBalance = 880000000;   // starting balance
let correctPin = "4040";          // your custom PIN
let currentSystemStep = "PIN";    // track ATM state

// 3. THE TRIGGER: Runs every time the user clicks the SUBMIT button
submitBtn.addEventListener("click", function () {
    if (currentSystemStep === "PIN") {
        // TASK 2: Security Validation Check
        let userPin = inputBox.value;
        if (userPin === correctPin) {
            currentSystemStep = "WITHDRAW";
            titleBox.innerText = "PIN Accepted ✅";
            messageBox.innerText = `Welcome! Your balance is $${accountBalance}. Enter withdrawal amount:`;
            inputBox.value = ""; // clear input
        } else {
            titleBox.innerText = "Error ❌";
            messageBox.innerText = "Incorrect PIN. Please try again.";
        }
    } else if (currentSystemStep === "WITHDRAW") {
        // TASK 3: Availability of Funds Validation
        let withdrawAmount = inputBox.value; // still a string, but JS will coerce

        if (withdrawAmount <= accountBalance) {
            // TASK 4: Ledger Deductions and Balances
            accountBalance -= withdrawAmount; // subtraction forces numeric conversion
            titleBox.innerText = "Transaction Successful ✅";
            messageBox.innerText = `You withdrew $${withdrawAmount}. Remaining balance: $${accountBalance}`;
        } else {
            // TASK 5: Overdraft Error Handling
            titleBox.innerText = "Transaction Declined ❌";
            messageBox.innerText = `You requested $${withdrawAmount}, but only $${accountBalance} is available.`;
        }
        inputBox.value = ""; // clear input
    }
});
