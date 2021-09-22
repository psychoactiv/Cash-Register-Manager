const cashGiven = document.querySelector(".cashGiven");
const billAmount = document.querySelector(".billAmount");
const checkBtn = document.querySelector(".checkBtn");
const output = document.querySelector(".output");
const hidden = document.querySelector(".Hidden");
const proceed = document.querySelector(".proceed");

const notes = [2000, 500, 100, 20, 10, 5, 1];
const MoreNotes = document.querySelectorAll(".notes");
hidden.style.display = "none";

proceed.addEventListener("click", function forward() {
  if(billAmount.value.length > 0){
    hidden.style.display = "block";
    }
});

checkBtn.addEventListener("click", function pressBtn() {
  reset();
  displayHidden();
  const cash = Number(cashGiven.value);
  const bill = Number(billAmount.value);

  function finalProccessing(amount) {
    for (var i = 0; i < notes.length; i++) {
      const newAmount = Math.trunc(amount / notes[i]);
      amount %= notes[i];
      MoreNotes[i].innerHTML = newAmount;
    }
  }

  function reset() {
    for (i = 0; i < notes.length; i++) {
      MoreNotes[i].innerHTML = 0;
    }
  }

  function Message(Message) {
    output.style.display = "block";
    output.innerHTML = Message;
  }

  function displayHidden() {
    output.style.display = "none";
  }

  if (typeof cash === "number" && typeof bill === "number") {
    if (cash > 0) {
      if (cash >= bill) {
        const amountToBeReturned = cash - bill;
        finalProccessing(amountToBeReturned);
      } else {
        Message("Do you wanna do the dishes ?");
      }
    } else {
      Message(
        "Please eneter only a valid number not alphabets or other charachters"
      );
    }
  } else {
    Message("Please enter a number");
  }
});
