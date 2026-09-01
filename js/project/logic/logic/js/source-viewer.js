/* Source Viewer & Code Runner Sandbox */
(function() {
  const ORIGINAL_SOURCE_CODE = `console.log("1) Positive, Negative, or Zero");

let number = 8;
if (number < 0) {
  console.log("Negative number ");
} else {
  console.log(" Positive number ");
}

console.log("2)Find the Largest of Three Numbers");

let a1 = 56;
let a2 = 90;
let a3 = 89;
if (a1 > a2) {
  console.log(" the a1 value larger ");
}
if (a2 > a3) {
  console.log("The a2 value thhe larger number ");
} else {
  console.log(" The a3 value islarger number ");
}

console.log("3)Count Even Numbers");

let numbers = [10, 15, 20, 25, 30, 35];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

console.log("4)Find the Sum of Digits");

let value = 12345;
let sum = 0;

let numberString = String(value);

for (let i = 0; i < numberString.length; i++) {
  sum = sum + Number(numberString[i]);
}

console.log(sum);

console.log("5) Find the sum of number in array");

let num = [10, 20, 10, 30, 20, 40];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log(sum1);

console.log("6)Find whether a number is prime");
let prime = 50;
let counter = 0;
for (let i = 1; i <= prime; i++) {
  if (prime % i == 0) {
    counter++;
  }
  console.log(prime);
}
if (counter == 2) {
  console.log("prime");
} else {
  console.log(" Not a prime");
}

console.log("7)Find common elements in two arrays");

let a = [10, 20, 60, 40];
let b = [20, 40, 50, 60];
for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i]);
    }
  }
}


console.log("8)Find how many times a particular value occurs");
let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
countnum=0

for (let i=1; i<arr.length;i++){
    if (arr[i]==target){
        countnum++;
    }
    
}
 console.log(countnum);

 
console.log("Count vowels");

 let text = "javascript";
 let count = 0;

 for (let i = 0; i < text.length; i++) {
   if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
     count++;
   }
 }

 console.log(count);`;

  document.addEventListener('DOMContentLoaded', () => {
    const codeContainer = document.getElementById('sourceCodeDisplay');
    const lineNumbersContainer = document.getElementById('lineNumbersDisplay');

    if (codeContainer && lineNumbersContainer) {
      renderCode(ORIGINAL_SOURCE_CODE);

      // Search filter inside code editor
      const searchBox = document.getElementById('codeSearchBox');
      if (searchBox) {
        searchBox.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase();
          if (!query) {
            renderCode(ORIGINAL_SOURCE_CODE);
            return;
          }
          const lines = ORIGINAL_SOURCE_CODE.split('\n');
          const filtered = lines.map(line => {
            if (line.toLowerCase().includes(query)) {
              return line;
            }
            return '';
          }).join('\n');
          renderCode(filtered);
        });
      }

      // Copy Source Code button
      const copyBtn = document.getElementById('copySourceBtn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(ORIGINAL_SOURCE_CODE).then(() => {
            copyBtn.innerText = '✓ Copied!';
            setTimeout(() => { copyBtn.innerText = 'Copy Code'; }, 2000);
          });
        });
      }

      // Download Source Code button
      const downloadBtn = document.getElementById('downloadSourceBtn');
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
          const blob = new Blob([ORIGINAL_SOURCE_CODE], { type: 'text/javascript' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'index.js';
          a.click();
          URL.revokeObjectURL(url);
        });
      }
    }

    // Program Execution Runners on javascript.html
    setupInteractiveRunners();
  });

  function renderCode(codeText) {
    const codeContainer = document.getElementById('sourceCodeDisplay');
    const lineNumbersContainer = document.getElementById('lineNumbersDisplay');
    if (!codeContainer || !lineNumbersContainer) return;

    const lines = codeText.split('\n');
    const lineNums = lines.map((_, i) => i + 1).join('\n');
    lineNumbersContainer.innerText = lineNums;

    // Simple syntax highlighter
    const escaped = codeText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const highlighted = escaped
      .replace(/(".*?"|'.*?'|`.*?`/g), '<span class="token-string">$1</span>')
      .replace(/\b(let|const|var|if|else|for|while|function|return)\b/g, '<span class="token-keyword">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>')
      .replace(/console\.log/g, '<span class="token-function">console.log</span>');

    codeContainer.innerHTML = highlighted;
  }

  function setupInteractiveRunners() {
    const programCodes = {
      'prog-1': `let number = 8;
if (number < 0) {
  console.log("Negative number ");
} else {
  console.log(" Positive number ");
}`,
      'prog-2': `let a1 = 56, a2 = 90, a3 = 89;
if (a1 > a2) {
  console.log(" the a1 value larger ");
}
if (a2 > a3) {
  console.log("The a2 value thhe larger number ");
} else {
  console.log(" The a3 value islarger number ");
}`,
      'prog-3': `let numbers = [10, 15, 20, 25, 30, 35];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}`,
      'prog-4': `let value = 12345;
let sum = 0;
let numberString = String(value);
for (let i = 0; i < numberString.length; i++) {
  sum = sum + Number(numberString[i]);
}
console.log("Sum of digits:", sum);`,
      'prog-5': `let num = [10, 20, 10, 30, 20, 40];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log("Array sum:", sum1);`,
      'prog-6': `let prime = 50;
let counter = 0;
for (let i = 1; i <= prime; i++) {
  if (prime % i == 0) {
    counter++;
  }
}
if (counter == 2) {
  console.log("prime");
} else {
  console.log(" Not a prime");
}`,
      'prog-7': `let a = [10, 20, 60, 40];
let b = [20, 40, 50, 60];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log("Common element:", a[i]);
    }
  }
}`,
      'prog-8': `let arr = [10, 20, 10, 30, 10, 40];
let target = 10;
let countnum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    countnum++;
  }
}
console.log("Target count:", countnum);`,
      'prog-9': `let text = "javascript";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (["a","e","i","o","u"].includes(text[i])) {
    count++;
  }
}
console.log("Vowel count:", count);`
    };

    document.querySelectorAll('.run-program-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const progId = btn.getAttribute('data-prog-id');
        const outputBox = document.getElementById(`console-${progId}`);
        if (!outputBox) return;

        outputBox.innerText = "Executing program...\n";
        const logs = [];

        // Intercept console.log safely
        const originalLog = console.log;
        console.log = function(...args) {
          logs.push(args.join(' '));
        };

        try {
          const codeToRun = programCodes[progId] || "console.log('No code found');";
          new Function(codeToRun)();
          outputBox.innerText = logs.length > 0 ? logs.join('\n') : "Program executed with no console output.";
        } catch (err) {
          outputBox.innerText = `Runtime Error: ${err.message}`;
        } finally {
          console.log = originalLog;
        }
      });
    });
  }
})();
