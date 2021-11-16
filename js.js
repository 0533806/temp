class Calculator {
    constructor(currentNumbers, previousNumbers) {
        this.currentNumbers = currentNumbers;
        this.previousNumbers = previousNumbers;
        this.clear();
        this.numberDisplay();
    }

    addNumber(number) {
      if(this.currentOperand==="0") this.currentOperand = number;
      else this.currentOperand += number; 

  }
  
    addPoint() { 
      if(this.currentOperand.includes(".")) return;
      this.currentOperand += ".";
  }

    clear() {
        this.operation = "";
        this.currentOperand = "0";
        this.previousOperand = "0";
        
      }

      delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
        if(!this.currentOperand) this.currentOperand = '0';
      }

    chooseOperation(operation) { 
      if(this.currentOperand === "0" && this.previousOperand ==="0"){
        this.operation = "";
        return;
      } 
      if(this.previousOperand ==="0" && this.currentOperand !=="0") this.previousOperand = this.currentOperand, this.currentOperand = "0";
      this.operation = operation;  
  }

    counting() {
        let result;
        let numberPrevious = Number(this.currentOperand);
        let numberCurrent = Number(this.previousOperand);
        if (!numberPrevious || !numberCurrent) return;
        else if (this.operation==="+") result = numberPrevious + numberCurrent;
        else if (this.operation==="-") result = numberCurrent - numberPrevious;
        else if (this.operation==="*") result = numberPrevious * numberCurrent;
        else if (this.operation==="÷") result = numberCurrent / numberPrevious;
        this.previousOperand = result.toString();
        this.currentOperand = '0';
    }
   
    

    numberDisplay() {
      currentNumbers.innerText = this.currentOperand;
      previousNumbers.innerText = this.previousOperand;
  }

    operationDisplay() {
      currentOperation.innerText = this.operation; 
    }
  }
  let numberButtons = document.querySelectorAll('[data-number]');
  let operationButtons = document.querySelectorAll('[data-operation]')
  let previousNumbers = document.querySelector('[data-previous-operand]');
  let currentNumbers = document.querySelector('[data-current-operand]');
  let currentOperation = document.querySelector('[data-current-operation]');                 
  let allClearButton = document.querySelector('[data-allclear]')
  let pointButton = document.querySelector('[data-point]');
  let deleteButton = document.querySelector('[data-delete]');
  let countButton = document.querySelector('[data-count]');
  let calculator = new Calculator(currentNumbers, previousNumbers);



  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.addNumber(button.innerText);
      calculator.numberDisplay();
    })
  })

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.operationDisplay();
      calculator.numberDisplay();
      
  
    })
  })

  pointButton.addEventListener('click', button => {
    calculator.addPoint();
    calculator.numberDisplay();

  })

  allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.operationDisplay();
    calculator.numberDisplay();
  })

  deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.numberDisplay();
  })

  countButton.addEventListener('click', button => {
    calculator.counting();
    calculator.operationDisplay();
    calculator.numberDisplay();
  })