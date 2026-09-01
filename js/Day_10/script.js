/**
 * Frontend Mastery Hub - Pure Dark Theme Interactive JavaScript Module
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA SOURCES & TOPIC CONFIGURATIONS
  // ==========================================

  // --- HTML TOPICS DATA (10 Topics) ---
  const htmlTopics = [
    {
      id: 'html-1',
      num: '01',
      title: 'HTML Document Structure',
      description: 'Defines the root structure of every web page including doctype, html, head, and body tags.',
      snippet: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>`,
      detail: 'The <!DOCTYPE html> declaration ensures standard mode rendering. The <head> contains metadata, document title, and style links while <body> contains visible content.',
      preview: '<div class="p-3 bg-black rounded border border-slate-800"><h1 class="text-lg font-bold text-white">Hello World</h1><p class="text-xs text-slate-400">Basic document structure rendered.</p></div>'
    },
    {
      id: 'html-2',
      num: '02',
      title: 'Headings & Paragraphs',
      description: 'Hierarchy of headings <h1> to <h6> and paragraph <p> text elements for text formatting.',
      snippet: `<h1>Main Title (H1)</h1>\n<h2>Section Header (H2)</h2>\n<p>This is a paragraph of standard body text with <strong>bold</strong> and <em>italicized</em> words.</p>`,
      detail: 'Search engines use H1-H6 tags to index the structure of your web pages. Always keep one H1 per page for optimal SEO accessibility.',
      preview: '<div class="space-y-1"><h1 class="text-xl font-bold text-indigo-400">Main Title (H1)</h1><h2 class="text-sm font-semibold text-slate-300">Section Header (H2)</h2><p class="text-xs text-slate-400">Paragraph text with <span class="font-bold text-white">bold</span> & <span class="italic text-cyan-400">italic</span> emphasis.</p></div>'
    },
    {
      id: 'html-3',
      num: '03',
      title: 'Links & Navigation',
      description: 'Hyperlinks <a> tag with href, target, and anchor navigation attributes.',
      snippet: `<a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a>\n<a href="#section-2">Jump to Section</a>`,
      detail: 'The target="_blank" attribute opens links in a new tab. Always include rel="noopener" for security against tab-napping vulnerabilities.',
      preview: '<div class="flex items-center gap-3"><a href="#" onclick="event.preventDefault();" class="text-xs text-indigo-400 hover:underline font-semibold flex items-center gap-1">MDN Docs &rarr;</a><a href="#" onclick="event.preventDefault();" class="text-xs text-cyan-400 hover:underline">Internal Anchor #</a></div>'
    },
    {
      id: 'html-4',
      num: '04',
      title: 'Images & Multimedia',
      description: 'Embedding graphics <img>, audio <audio>, and responsive video <video> media elements.',
      snippet: `<img src="hero.jpg" alt="Developer Coding" width="400" height="250" loading="lazy">\n<audio controls src="audio.mp3"></audio>`,
      detail: 'Always specify descriptive alt text for accessibility screen readers and specify explicit width/height attributes to avoid Layout Shifts (CLS).',
      preview: '<div class="p-2.5 rounded bg-black border border-slate-800 flex items-center gap-3"><div class="w-12 h-12 rounded bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">IMG</div><div><div class="text-xs font-semibold text-white">Developer Artwork</div><div class="text-[10px] text-slate-400">alt="Developer Coding"</div></div></div>'
    },
    {
      id: 'html-5',
      num: '05',
      title: 'Lists',
      description: 'Ordered <ol>, unordered <ul>, and definition <dl> lists for structured item sets.',
      snippet: `<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>`,
      detail: 'Unordered lists <ul> use bullet points while ordered lists <ol> display numerical steps. Definition lists <dl> map terms <dt> to descriptions <dd>.',
      preview: '<ul class="list-disc list-inside text-xs text-slate-300 space-y-1"><li class="text-orange-400">HTML5 Structure</li><li class="text-blue-400">CSS3 Styling</li><li class="text-yellow-400">JavaScript Logic</li></ul>'
    },
    {
      id: 'html-6',
      num: '06',
      title: 'Tables',
      description: 'Structured data display using <table>, <thead>, <tbody>, <tr>, <th>, and <td> elements.',
      snippet: `<table>\n  <thead>\n    <tr><th>Tech</th><th>Role</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>HTML</td><td>Markup</td></tr>\n  </tbody>\n</table>`,
      detail: 'Use <th> inside <thead> for accessible header cells. Combine with CSS border-collapse for clean grid layouts.',
      preview: '<table class="w-full text-xs text-left border border-slate-800"><thead class="bg-[#080810] text-slate-300"><tr><th class="p-1.5 border-b border-slate-800">Tech</th><th class="p-1.5 border-b border-slate-800">Role</th></tr></thead><tbody><tr class="border-t border-slate-800/60"><td class="p-1.5 text-indigo-400 font-semibold">HTML</td><td class="p-1.5 text-slate-400">Markup</td></tr></tbody></table>'
    },
    {
      id: 'html-7',
      num: '07',
      title: 'Forms & Input Fields',
      description: 'Interactive user inputs: <input>, <textarea>, <select>, <label>, and validation attributes.',
      snippet: `<form>\n  <label for="email">Email:</label>\n  <input type="email" id="email" required placeholder="name@domain.com">\n  <button type="submit">Submit</button>\n</form>`,
      detail: 'Linking <label for="..."> to input IDs enhances accessibility, allowing users to click label text to focus the target field.',
      preview: '<div class="space-y-2"><label class="text-[11px] text-slate-400 font-medium block">Subscribe Email</label><div class="flex gap-2"><input type="email" placeholder="student@hub.com" class="px-2.5 py-1 text-xs rounded bg-black border border-slate-800 text-white w-full" readonly><button class="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded">Send</button></div></div>'
    },
    {
      id: 'html-8',
      num: '08',
      title: 'Semantic HTML',
      description: 'Meaningful structural tags like <header>, <nav>, <main>, <article>, <section>, and <footer>.',
      snippet: `<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n</main>`,
      detail: 'Semantic elements improve accessibility screen reader navigation and search engine crawling compared to generic <div> tags.',
      preview: '<div class="p-2 rounded bg-black border border-slate-800 text-[10px] space-y-1 font-mono"><div class="p-1 bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 rounded">&lt;header&gt; + &lt;nav&gt;</div><div class="p-1 bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 rounded">&lt;main&gt; &gt; &lt;article&gt;</div><div class="p-1 bg-slate-900 text-slate-400 rounded">&lt;footer&gt;</div></div>'
    },
    {
      id: 'html-9',
      num: '09',
      title: 'HTML Attributes',
      description: 'Global attributes (id, class, title, style, hidden) and custom data-* attributes.',
      snippet: `<div id="user-profile" class="card active" data-role="admin" title="User Profile Card">\n  Content\n</div>`,
      detail: 'The id attribute must be unique per page. The class attribute can accept space-separated names. Custom data-* attributes store lightweight client data.',
      preview: '<div class="p-2 rounded bg-indigo-950/60 border border-indigo-500/30 text-xs flex items-center justify-between"><span class="text-white font-mono">id="user-profile"</span><span class="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">data-role="student"</span></div>'
    },
    {
      id: 'html-10',
      num: '10',
      title: 'Buttons & Interactive Elements',
      description: 'Interactive controls: <button>, collapsibles <details>/<summary>, and dialog modals <dialog>.',
      snippet: `<details>\n  <summary>Click to view secret</summary>\n  <p>HTML5 allows native accordions without JS!</p>\n</details>`,
      detail: 'The native <details> and <summary> elements create zero-JavaScript expandable accordions supported in all modern browsers.',
      preview: '<details class="p-2 bg-black border border-slate-800 rounded text-xs"><summary class="cursor-pointer text-indigo-400 font-semibold">Click to expand native accordion</summary><p class="mt-2 text-slate-300">Native HTML5 accordion content without extra JavaScript!</p></details>'
    }
  ];

  // --- CSS TOPICS DATA (10 Topics with Visual Demos) ---
  const cssTopics = [
    {
      id: 'css-1',
      num: '01',
      title: 'CSS Selectors',
      description: 'Targeting elements with element, class (.card), ID (#header), attribute, and child combinators.',
      snippet: `/* Class Selector */\n.btn-primary { background: #4f46e5; color: #fff; }\n/* Combinator */\n.card > h3 { font-size: 1.25rem; }`,
      demoType: 'selectors'
    },
    {
      id: 'css-2',
      num: '02',
      title: 'Colors & Backgrounds',
      description: 'Color formats (HEX, RGB, HSL), linear gradients, radial gradients, and opacity.',
      snippet: `.hero-bg {\n  background: linear-gradient(135deg, #6366f1, #06b6d4);\n  color: rgba(255, 255, 255, 0.95);\n}`,
      demoType: 'colors'
    },
    {
      id: 'css-3',
      num: '03',
      title: 'Fonts & Text Styling',
      description: 'Typography properties: font-family, font-weight, line-height, letter-spacing, and text-transform.',
      snippet: `.heading {\n  font-family: 'Inter', sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.025em;\n}`,
      demoType: 'fonts'
    },
    {
      id: 'css-4',
      num: '04',
      title: 'Box Model',
      description: 'Understanding Margin, Border, Padding, and Content area dimensions (box-sizing: border-box).',
      snippet: `.box {\n  box-sizing: border-box;\n  margin: 16px;\n  padding: 24px;\n  border: 2px solid #6366f1;\n}`,
      demoType: 'box-model'
    },
    {
      id: 'css-5',
      num: '05',
      title: 'Display Property',
      description: 'Controlling layout behavior: block, inline, inline-block, flex, grid, and none.',
      snippet: `.container { display: flex; }\n.badge { display: inline-block; }\n.hidden { display: none; }`,
      demoType: 'display'
    },
    {
      id: 'css-6',
      num: '06',
      title: 'Position',
      description: 'Positioning strategies: static, relative, absolute, fixed, and sticky with top/right/bottom/left offsets.',
      snippet: `.sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}`,
      demoType: 'position'
    },
    {
      id: 'css-7',
      num: '07',
      title: 'Flexbox',
      description: 'One-dimensional layout model for flex direction, alignment, distribution, and wrapping.',
      snippet: `.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
      demoType: 'flexbox'
    },
    {
      id: 'css-8',
      num: '08',
      title: 'CSS Grid',
      description: 'Two-dimensional grid layout system using grid-template-columns, gap, and grid-area.',
      snippet: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}`,
      demoType: 'grid'
    },
    {
      id: 'css-9',
      num: '09',
      title: 'Pseudo Classes & Elements',
      description: 'State selectors like :hover, :focus, :nth-child() and structural elements ::before / ::after.',
      snippet: `.button:hover { transform: translateY(-2px); }\n.card::before { content: ''; background: #6366f1; }`,
      demoType: 'pseudo'
    },
    {
      id: 'css-10',
      num: '10',
      title: 'Responsive Design',
      description: 'Fluid layouts using media queries (@media), mobile-first design, and viewport units.',
      snippet: `@media (min-width: 768px) {\n  .layout { grid-template-columns: 1fr 2fr; }\n}`,
      demoType: 'responsive'
    }
  ];

  // --- JAVASCRIPT PRACTICE PROGRAMS DATA (10 Programs from index.js Source) ---
  const jsPrograms = [
    {
      id: 'js-1',
      num: '01',
      title: '1. Positive, Negative, or Zero',
      description: 'Checks whether a number is negative or positive using if-else logic.',
      inputs: [
        { label: 'Number:', id: 'js1-num', type: 'number', default: 8 }
      ],
      code: `console.log("1) Positive, Negative, or Zero");\n\nlet number = 8;\nif (number < 0) {\n  console.log("Negative number ");\n} else {\n  console.log(" Positive number ");\n}`,
      expectedOutput: 'Positive number',
      runner: (inputs) => {
        const num = parseFloat(inputs['js1-num']);
        let logs = [];
        logs.push("1) Positive, Negative, or Zero");
        if (num < 0) {
          logs.push("Negative number ");
        } else {
          logs.push(" Positive number ");
        }
        return logs.join('\n');
      }
    },
    {
      id: 'js-2',
      num: '02',
      title: '2. Find the Largest of Three Numbers',
      description: 'Compares three numbers (a1, a2, a3) to identify the maximum value.',
      inputs: [
        { label: 'a1:', id: 'js2-a1', type: 'number', default: 56 },
        { label: 'a2:', id: 'js2-a2', type: 'number', default: 90 },
        { label: 'a3:', id: 'js2-a3', type: 'number', default: 89 }
      ],
      code: `console.log("2)Find the Largest of Three Numbers");\n\nlet a1 = 56;\nlet a2 = 90;\nlet a3 = 89;\nif (a1 > a2) {\n  console.log(" the a1 value larger ");\n}\nif (a2 > a3) {\n  console.log("The a2 value thhe larger number ");\n} else {\n  console.log(" The a3 value islarger number ");\n}`,
      expectedOutput: 'The a2 value thhe larger number',
      runner: (inputs) => {
        const a1 = parseFloat(inputs['js2-a1']);
        const a2 = parseFloat(inputs['js2-a2']);
        const a3 = parseFloat(inputs['js2-a3']);
        let logs = [];
        logs.push("2)Find the Largest of Three Numbers");
        if (a1 > a2) {
          logs.push(" the a1 value larger ");
        }
        if (a2 > a3) {
          logs.push("The a2 value thhe larger number ");
        } else {
          logs.push(" The a3 value islarger number ");
        }
        return logs.join('\n');
      }
    },
    {
      id: 'js-3',
      num: '03',
      title: '3. Count Even Numbers',
      description: 'Iterates through an array of numbers and prints all even elements.',
      inputs: [
        { label: 'Array (comma-separated):', id: 'js3-arr', type: 'text', default: '10, 15, 20, 25, 30, 35' }
      ],
      code: `console.log("3)Count Even Numbers");\n\nlet numbers = [10, 15, 20, 25, 30, 35];\n\nfor (let i = 0; i <= numbers.length; i++) {\n  if (numbers[i] % 2 == 0) {\n    console.log(numbers[i]);\n  }\n}`,
      expectedOutput: '10\n20\n30',
      runner: (inputs) => {
        const arr = inputs['js3-arr'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        let logs = [];
        logs.push("3)Count Even Numbers");
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            logs.push(String(arr[i]));
          }
        }
        return logs.join('\n');
      }
    },
    {
      id: 'js-4',
      num: '04',
      title: '4. Find the Sum of Digits',
      description: 'Converts a number to a string and calculates the sum of all individual digits.',
      inputs: [
        { label: 'Value:', id: 'js4-val', type: 'number', default: 12345 }
      ],
      code: `console.log("4)Find the Sum of Digits");\n\nlet value = 12345;\nlet sum = 0;\n\nlet numberString = String(value);\n\nfor (let i = 0; i < numberString.length; i++) {\n  sum = sum + Number(numberString[i]);\n}\n\nconsole.log(sum);`,
      expectedOutput: '15',
      runner: (inputs) => {
        const value = inputs['js4-val'];
        let logs = [];
        logs.push("4)Find the Sum of Digits");
        let sum = 0;
        let numberString = String(value);
        for (let i = 0; i < numberString.length; i++) {
          if (!isNaN(Number(numberString[i]))) {
            sum += Number(numberString[i]);
          }
        }
        logs.push(String(sum));
        return logs.join('\n');
      }
    },
    {
      id: 'js-5',
      num: '05',
      title: '5. Find the Sum of Numbers in Array',
      description: 'Accumulates the total sum of all numerical values in an array.',
      inputs: [
        { label: 'Numbers:', id: 'js5-arr', type: 'text', default: '10, 20, 10, 30, 20, 40' }
      ],
      code: `console.log("5) Find the sum of number in array");\n\nlet num = [10, 20, 10, 30, 20, 40];\nlet sum1 = 0;\nfor (let i = 0; i < num.length; i++) {\n  sum1 += num[i];\n}\nconsole.log(sum1);`,
      expectedOutput: '130',
      runner: (inputs) => {
        const arr = inputs['js5-arr'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        let logs = [];
        logs.push("5) Find the sum of number in array");
        let sum1 = 0;
        for (let i = 0; i < arr.length; i++) {
          sum1 += arr[i];
        }
        logs.push(String(sum1));
        return logs.join('\n');
      }
    },
    {
      id: 'js-6',
      num: '06',
      title: '6. Find Whether a Number is Prime',
      description: 'Determines prime status by counting factors from 1 up to the target number.',
      inputs: [
        { label: 'Prime Check Value:', id: 'js6-prime', type: 'number', default: 50 }
      ],
      code: `console.log("6)Find whether a number is prime");\nlet prime = 50;\nlet counter = 0;\nfor (let i = 1; i <= prime; i++) {\n  if (prime % i == 0) {\n    counter++;\n  }\n  console.log(prime);\n}\nif (counter == 2) {\n  console.log("prime");\n} else {\n  console.log(" Not a prime");\n}`,
      expectedOutput: 'Not a prime',
      runner: (inputs) => {
        const prime = parseInt(inputs['js6-prime']);
        let logs = [];
        logs.push("6)Find whether a number is prime");
        let counter = 0;
        for (let i = 1; i <= prime; i++) {
          if (prime % i === 0) {
            counter++;
          }
        }
        if (counter === 2) {
          logs.push("prime");
        } else {
          logs.push(" Not a prime");
        }
        return logs.join('\n');
      }
    },
    {
      id: 'js-7',
      num: '07',
      title: '7. Find Common Elements in Two Arrays',
      description: 'Uses nested loops to compare two arrays and identify matching elements.',
      inputs: [
        { label: 'Array A:', id: 'js7-a', type: 'text', default: '10, 20, 60, 40' },
        { label: 'Array B:', id: 'js7-b', type: 'text', default: '20, 40, 50, 60' }
      ],
      code: `console.log("7)Find common elements in two arrays");\n\nlet a = [10, 20, 60, 40];\nlet b = [20, 40, 50, 60];\nfor (let i = 0; i < a.length; i++) {\n  for (let j = 0; j < b.length; j++) {\n    if (a[i] == b[j]) {\n      console.log(a[i]);\n    }\n  }\n}`,
      expectedOutput: '20\n60\n40',
      runner: (inputs) => {
        const a = inputs['js7-a'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        const b = inputs['js7-b'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        let logs = [];
        logs.push("7)Find common elements in two arrays");
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
              logs.push(String(a[i]));
            }
          }
        }
        return logs.join('\n');
      }
    },
    {
      id: 'js-8',
      num: '08',
      title: '8. Find How Many Times a Particular Value Occurs',
      description: 'Calculates the frequency of a target value within an array.',
      inputs: [
        { label: 'Array:', id: 'js8-arr', type: 'text', default: '10, 20, 10, 30, 10, 40' },
        { label: 'Target Value:', id: 'js8-target', type: 'number', default: 10 }
      ],
      code: `console.log("8)Find how many times a particular value occurs");\nlet arr = [10, 20, 10, 30, 10, 40];\nlet target = 10;\nlet countnum = 0;\n\nfor (let i = 0; i < arr.length; i++) {\n    if (arr[i] == target) {\n        countnum++;\n    }\n}\nconsole.log(countnum);`,
      expectedOutput: '3',
      runner: (inputs) => {
        const arr = inputs['js8-arr'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        const target = parseFloat(inputs['js8-target']);
        let logs = [];
        logs.push("8)Find how many times a particular value occurs");
        let countnum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            countnum++;
          }
        }
        logs.push(String(countnum));
        return logs.join('\n');
      }
    },
    {
      id: 'js-9',
      num: '09',
      title: '9. Count Vowels',
      description: 'Iterates through a string to count occurrences of vowels (a, e, i, o, u).',
      inputs: [
        { label: 'Text String:', id: 'js9-text', type: 'text', default: 'javascript' }
      ],
      code: `console.log("Count vowels");\n\nlet text = "javascript";\nlet count = 0;\n\nfor (let i = 0; i < text.length; i++) {\n  if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {\n    count++;\n  }\n}\n\nconsole.log(count);`,
      expectedOutput: '3',
      runner: (inputs) => {
        const text = String(inputs['js9-text']).toLowerCase();
        let logs = [];
        logs.push("Count vowels");
        let count = 0;
        for (let i = 0; i < text.length; i++) {
          if ("aeiou".includes(text[i])) {
            count++;
          }
        }
        logs.push(String(count));
        return logs.join('\n');
      }
    },
    {
      id: 'js-10',
      num: '10',
      title: '10. Combined JavaScript Problem Solving',
      description: 'Combines multiple algorithms (array sum, even count, prime check, vowel count) into a single analysis routine.',
      inputs: [
        { label: 'Sample Array:', id: 'js10-arr', type: 'text', default: '10, 15, 20, 25, 30' },
        { label: 'Sample Text:', id: 'js10-text', type: 'text', default: 'frontend mastery' }
      ],
      code: `// Combined Problem Solver based on index.js algorithms\nconsole.log("=== COMBINED SOLVER REPORT ===");\n\nlet numbers = [10, 15, 20, 25, 30];\nlet text = "frontend mastery";\n\n// 1. Sum & Evens\nlet sum = 0, evens = 0;\nfor (let n of numbers) {\n  sum += n;\n  if (n % 2 === 0) evens++;\n}\n\n// 2. Vowels Count\nlet vowels = 0;\nfor (let char of text) {\n  if ("aeiou".includes(char)) vowels++;\n}\n\nconsole.log("Array Sum:", sum);\nconsole.log("Even Count:", evens);\nconsole.log("Text Vowels:", vowels);`,
      expectedOutput: 'Array Sum: 100\nEven Count: 3\nText Vowels: 5',
      runner: (inputs) => {
        const arr = inputs['js10-arr'].split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        const text = String(inputs['js10-text']).toLowerCase();
        let logs = [];
        logs.push("=== COMBINED SOLVER REPORT ===");
        let sum = 0, evens = 0;
        for (let n of arr) {
          sum += n;
          if (n % 2 === 0) evens++;
        }
        let vowels = 0;
        for (let char of text) {
          if ("aeiou".includes(char)) vowels++;
        }
        logs.push(`Array Sum: ${sum}`);
        logs.push(`Even Count: ${evens}`);
        logs.push(`Text Vowels: ${vowels}`);
        return logs.join('\n');
      }
    }
  ];

  // --- TAILWIND CSS TOPICS DATA (10 Topics) ---
  const tailwindTopics = [
    {
      id: 'tw-1',
      num: '01',
      title: 'Tailwind Setup',
      description: 'Integrating Tailwind CSS via CDN script, CLI, or PostCSS build configuration.',
      classes: ['cdn-script', 'tailwind.config', '@tailwind base', '@tailwind components', '@tailwind utilities'],
      snippet: `<script src="https://cdn.tailwindcss.com"></script>\n<script>\n  tailwind.config = { theme: { extend: {} } }\n</script>`,
      preview: '<div class="p-2.5 bg-black rounded text-xs font-mono text-cyan-400 border border-slate-800">&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</div>'
    },
    {
      id: 'tw-2',
      num: '02',
      title: 'Container & Width',
      description: 'Controlling element bounds with container, max-w-*, w-full, w-screen, and fixed width classes.',
      classes: ['w-full', 'w-1/2', 'max-w-md', 'max-w-7xl', 'w-64', 'h-32'],
      snippet: `<div class="max-w-md mx-auto w-full p-4 bg-slate-900 rounded-xl">\n  Container bounded width\n</div>`,
      preview: '<div class="w-full max-w-[200px] mx-auto p-2 bg-indigo-950/60 border border-indigo-500/40 text-center rounded text-xs text-indigo-300 font-mono">max-w-[200px] mx-auto</div>'
    },
    {
      id: 'tw-3',
      num: '03',
      title: 'Spacing',
      description: 'Padding (p-*), Margin (m-*), horizontal/vertical axes (px-*, py-*), and space-between utilities.',
      classes: ['p-4', 'px-6', 'py-3', 'm-2', 'mt-4', '-mb-2', 'space-y-4'],
      snippet: `<div class="p-6 my-4 space-y-2">\n  <p class="px-3 py-1 bg-slate-800">Padded Item 1</p>\n  <p class="px-3 py-1 bg-slate-800">Padded Item 2</p>\n</div>`,
      preview: '<div class="p-3 bg-black border border-slate-800 rounded space-y-1.5"><div class="px-2 py-1 bg-[#080810] rounded text-[11px] text-slate-300 border border-slate-800/60">p-3 space-y-1.5 item 1</div><div class="px-2 py-1 bg-[#080810] rounded text-[11px] text-slate-300 border border-slate-800/60">p-3 space-y-1.5 item 2</div></div>'
    },
    {
      id: 'tw-4',
      num: '04',
      title: 'Colors',
      description: 'Text, background, border, and ring colors with color shades (50-950) and opacity modifiers.',
      classes: ['bg-indigo-600', 'text-cyan-400', 'border-slate-700', 'bg-emerald-500/20', 'text-rose-400'],
      snippet: `<button class="bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/30 px-4 py-2 rounded-lg">\n  Colored Button\n</button>`,
      preview: '<div class="flex flex-wrap gap-2"><span class="px-2 py-1 bg-indigo-600 text-white rounded text-xs font-semibold">bg-indigo-600</span><span class="px-2 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold">cyan opacity</span></div>'
    },
    {
      id: 'tw-5',
      num: '05',
      title: 'Typography',
      description: 'Font size, weight, tracking, leading, alignment, text truncation, and gradient text effects.',
      classes: ['text-2xl', 'font-bold', 'tracking-tight', 'leading-relaxed', 'truncate', 'bg-clip-text'],
      snippet: `<h1 class="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">\n  Gradient Heading\n</h1>`,
      preview: '<h3 class="text-lg font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Gradient Typography</h3>'
    },
    {
      id: 'tw-6',
      num: '06',
      title: 'Flexbox',
      description: 'One-dimensional flex layouts: flex, flex-row, flex-col, items-center, justify-between, gap-*.',
      classes: ['flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-between', 'gap-4'],
      snippet: `<div class="flex items-center justify-between gap-4 p-3 bg-slate-900">\n  <span>Left</span>\n  <span>Right</span>\n</div>`,
      preview: '<div class="flex items-center justify-between p-2 bg-black border border-slate-800 rounded text-xs"><span class="text-indigo-400 font-bold">flex items-center</span><span class="px-2 py-0.5 bg-indigo-600 text-white rounded text-[10px]">justify-between</span></div>'
    },
    {
      id: 'tw-7',
      num: '07',
      title: 'Grid',
      description: 'Two-dimensional grid layouts: grid, grid-cols-*, col-span-*, gap-*, and auto-fit grids.',
      classes: ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'col-span-2'],
      snippet: `<div class="grid grid-cols-3 gap-4">\n  <div class="p-2 bg-slate-800">1</div>\n  <div class="p-2 bg-slate-800">2</div>\n  <div class="p-2 bg-slate-800">3</div>\n</div>`,
      preview: '<div class="grid grid-cols-3 gap-1.5 text-center text-xs"><div class="p-2 bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 rounded font-mono">1</div><div class="p-2 bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 rounded font-mono">2</div><div class="p-2 bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 rounded font-mono">3</div></div>'
    },
    {
      id: 'tw-8',
      num: '08',
      title: 'Borders & Border Radius',
      description: 'Border width, styles, colors, rounded-*, rounded-full, and divide-* utilities.',
      classes: ['border-2', 'border-indigo-500', 'rounded-xl', 'rounded-full', 'divide-y', 'divide-slate-800'],
      snippet: `<div class="border-2 border-dashed border-indigo-500 rounded-2xl p-4 text-center">\n  Rounded Dashed Box\n</div>`,
      preview: '<div class="p-3 border-2 border-dashed border-cyan-500/60 rounded-xl text-center text-xs text-cyan-300 font-mono">border-2 border-dashed rounded-xl</div>'
    },
    {
      id: 'tw-9',
      num: '09',
      title: 'Shadows & Hover Effects',
      description: 'Box shadows, shadow glow colors, transition-all, hover:*, active:*, and transform utilities.',
      snippet: `<div class="p-4 bg-slate-900 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer">\n  Interactive Glow Card\n</div>`,
      preview: '<button class="px-4 py-2 bg-black border border-slate-800 text-xs font-semibold text-white rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all">Hover Me for Glow</button>'
    },
    {
      id: 'tw-10',
      num: '10',
      title: 'Responsive Design',
      description: 'Mobile-first breakpoint prefixes: sm: (640px), md: (768px), lg: (1024px), xl: (1280px).',
      snippet: `<div class="text-sm md:text-base lg:text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\n  Responsive Adaptive Content\n</div>`,
      preview: '<div class="p-2 bg-black border border-slate-800 rounded text-center text-xs"><span class="text-slate-400">Breakpoint: </span><span class="text-emerald-400 font-bold font-mono">sm: | md: | lg:</span></div>'
    }
  ];

  // --- LOCAL STORAGE PROGRESS TRACKER ---
  const STORAGE_KEY = 'frontend_mastery_progress_v1';
  let completedTopics = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  // ==========================================
  // 2. RENDERING FUNCTIONS
  // ==========================================

  // --- RENDER HTML TOPICS SECTION ---
  function renderHTMLSection() {
    const container = document.getElementById('html-cards-container');
    if (!container) return;

    container.innerHTML = htmlTopics.map(topic => {
      const isCompleted = !!completedTopics[topic.id];
      return `
        <div class="topic-card glass-card relative p-6 rounded-2xl border border-slate-800 hover:border-orange-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between" data-topic-id="${topic.id}" data-category="html" data-keywords="${topic.title.toLowerCase()} ${topic.description.toLowerCase()}">
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">HTML #${topic.num}</span>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-white select-none">
                <input type="checkbox" class="topic-checkbox w-4 h-4 rounded bg-black border-slate-700 text-orange-500 focus:ring-orange-500 focus:ring-offset-slate-900" data-id="${topic.id}" ${isCompleted ? 'checked' : ''}>
                <span>${isCompleted ? 'Completed' : 'Mark Learned'}</span>
              </label>
            </div>

            <h3 class="text-lg font-bold text-white">${topic.title}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">${topic.description}</p>
            
            <!-- Code snippet with copy button -->
            <div class="relative rounded-xl code-editor-box p-3 font-mono text-xs text-slate-200 overflow-x-auto">
              <button class="copy-code-btn absolute top-2 right-2 p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" data-code="${escapeHTML(topic.snippet)}" title="Copy Snippet">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </button>
              <pre class="pr-8"><code>${highlightCode(topic.snippet, 'html')}</code></pre>
            </div>
          </div>

          <!-- Expandable Learn More & Live Preview Panel -->
          <div class="pt-3 border-t border-slate-800/60">
            <button class="toggle-detail-btn text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5" data-target="detail-${topic.id}">
              <span>Learn More & Live Preview</span>
              <svg class="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            
            <div id="detail-${topic.id}" class="hidden mt-3 pt-3 border-t border-slate-800/40 space-y-3">
              <p class="text-xs text-slate-300 leading-relaxed">${topic.detail}</p>
              <div class="space-y-1">
                <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Live HTML Render</div>
                <div class="p-3 bg-black rounded-xl border border-slate-800">${topic.preview}</div>
              </div>
            </div>
          </div>

        </div>
      `;
    }).join('');
  }

  // --- RENDER CSS TOPICS SECTION WITH INTERACTIVE DEMOS ---
  function renderCSSSection() {
    const container = document.getElementById('css-cards-container');
    if (!container) return;

    container.innerHTML = cssTopics.map(topic => {
      const isCompleted = !!completedTopics[topic.id];
      return `
        <div class="topic-card glass-card relative p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between" data-topic-id="${topic.id}" data-category="css" data-keywords="${topic.title.toLowerCase()} ${topic.description.toLowerCase()}">
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">CSS #${topic.num}</span>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-white select-none">
                <input type="checkbox" class="topic-checkbox w-4 h-4 rounded bg-black border-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900" data-id="${topic.id}" ${isCompleted ? 'checked' : ''}>
                <span>${isCompleted ? 'Completed' : 'Mark Learned'}</span>
              </label>
            </div>

            <h3 class="text-lg font-bold text-white">${topic.title}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">${topic.description}</p>
            
            <!-- Code snippet -->
            <div class="relative rounded-xl code-editor-box p-3 font-mono text-xs text-slate-200 overflow-x-auto">
              <button class="copy-code-btn absolute top-2 right-2 p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" data-code="${escapeHTML(topic.snippet)}" title="Copy Snippet">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </button>
              <pre class="pr-8"><code>${highlightCode(topic.snippet, 'css')}</code></pre>
            </div>
          </div>

          <!-- Interactive Visual Demo Container -->
          <div class="pt-3 border-t border-slate-800/60 space-y-2">
            <div class="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>Interactive Visual Demonstration</span>
            </div>
            <div class="p-3 bg-black rounded-xl border border-slate-800">
              ${renderCSSVisualDemo(topic.demoType)}
            </div>
          </div>

        </div>
      `;
    }).join('');

    initCSSVisualDemoListeners();
  }

  // Helper for generating CSS Interactive Demo HTML
  function renderCSSVisualDemo(type) {
    switch (type) {
      case 'flexbox':
        return `
          <div class="space-y-3">
            <div class="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span class="text-slate-400 font-mono">justify-content:</span>
              <button class="flex-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold" data-justify="start">flex-start</button>
              <button class="flex-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-justify="center">center</button>
              <button class="flex-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-justify="between">space-between</button>
              <button class="flex-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-justify="end">flex-end</button>
            </div>
            <div id="flexbox-demo-box" class="h-20 p-2.5 rounded bg-[#080810] border border-slate-800 flex items-center justify-start gap-2 transition-all">
              <div class="w-10 h-10 rounded bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white font-bold flex items-center justify-center text-xs shadow-md">1</div>
              <div class="w-10 h-10 rounded bg-gradient-to-tr from-cyan-600 to-cyan-700 text-white font-bold flex items-center justify-center text-xs shadow-md">2</div>
              <div class="w-10 h-10 rounded bg-gradient-to-tr from-emerald-600 to-emerald-700 text-white font-bold flex items-center justify-center text-xs shadow-md">3</div>
            </div>
          </div>
        `;
      case 'grid':
        return `
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-[11px]">
              <span class="text-slate-400 font-mono">Columns Layout:</span>
              <button class="grid-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-cols="1">1 Col</button>
              <button class="grid-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold active" data-cols="2">2 Cols</button>
              <button class="grid-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-cols="3">3 Cols</button>
            </div>
            <div id="grid-demo-box" class="grid grid-cols-2 gap-2 p-2.5 rounded bg-[#080810] border border-slate-800 transition-all">
              <div class="p-2 rounded bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-center font-mono text-xs">Item 1</div>
              <div class="p-2 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-center font-mono text-xs">Item 2</div>
              <div class="p-2 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-center font-mono text-xs">Item 3</div>
              <div class="p-2 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300 text-center font-mono text-xs">Item 4</div>
            </div>
          </div>
        `;
      case 'box-model':
        return `
          <div class="space-y-2">
            <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Padding: <strong id="padding-val" class="text-indigo-400">16px</strong></span>
              <input type="range" id="padding-slider" min="4" max="32" value="16" class="w-28 accent-indigo-500">
            </div>
            <div class="p-3 bg-amber-950/30 border-2 border-dashed border-amber-500/40 rounded text-center">
              <span class="text-[10px] text-amber-400 font-mono uppercase block">Margin</span>
              <div id="box-model-border" class="p-2 bg-indigo-950/60 border-2 border-indigo-500 rounded my-1">
                <span class="text-[10px] text-indigo-300 font-mono block">Border</span>
                <div id="box-model-content" class="bg-cyan-950/80 border border-cyan-500/40 rounded text-cyan-300 font-mono text-xs py-2 transition-all">
                  Content Area
                </div>
              </div>
            </div>
          </div>
        `;
      case 'position':
        return `
          <div class="space-y-2">
            <div class="flex items-center gap-1.5 text-[11px]">
              <span class="text-slate-400 font-mono">position:</span>
              <button class="pos-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-pos="static">static</button>
              <button class="pos-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold" data-pos="relative">relative</button>
              <button class="pos-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-pos="absolute">absolute</button>
            </div>
            <div class="relative h-20 bg-[#080810] border border-slate-800 rounded p-2 overflow-hidden">
              <div id="position-target-box" class="relative top-2 left-4 w-28 py-1.5 bg-indigo-600 text-white font-mono text-xs rounded text-center shadow-lg transition-all">
                Box Target
              </div>
            </div>
          </div>
        `;
      case 'colors':
        return `
          <div class="space-y-2">
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-400 font-mono">Preset Gradient:</span>
              <div class="flex gap-1">
                <button class="color-preset-btn w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 border border-white/20" data-grad="from-indigo-500 to-cyan-400"></button>
                <button class="color-preset-btn w-5 h-5 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 border border-white/20" data-grad="from-rose-500 to-amber-400"></button>
                <button class="color-preset-btn w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 border border-white/20" data-grad="from-emerald-500 to-teal-400"></button>
              </div>
            </div>
            <div id="color-preview-box" class="h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-white shadow-lg transition-all">
              linear-gradient(135deg, ...)
            </div>
          </div>
        `;
      case 'fonts':
        return `
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-[11px]">
              <span class="text-slate-400 font-mono">Weight:</span>
              <button class="font-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-weight="300">Light</button>
              <button class="font-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold" data-weight="600">Semibold</button>
              <button class="font-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800" data-weight="900">Extrabold</button>
            </div>
            <div id="font-preview-text" class="p-2.5 bg-[#080810] border border-slate-800 rounded text-slate-100 font-sans text-sm font-semibold tracking-wide">
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        `;
      case 'selectors':
        return `
          <div class="p-2.5 bg-[#080810] border border-slate-800 rounded space-y-1 text-xs">
            <div class="text-indigo-400 font-mono font-semibold">.card > h3.title</div>
            <div class="text-slate-400 text-[11px]">Matches &lt;h3 class="title"&gt; inside direct parent .card</div>
          </div>
        `;
      case 'display':
        return `
          <div class="flex items-center justify-around p-2.5 bg-[#080810] border border-slate-800 rounded text-xs">
            <span class="px-2 py-1 bg-indigo-600 text-white font-mono rounded">block</span>
            <span class="px-2 py-1 bg-cyan-600 text-white font-mono rounded">inline-block</span>
            <span class="px-2 py-1 bg-emerald-600 text-white font-mono rounded">flex</span>
          </div>
        `;
      case 'pseudo':
        return `
          <div class="flex items-center justify-center p-2.5 bg-[#080810] border border-slate-800 rounded">
            <button class="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all">
              Hover & Click State
            </button>
          </div>
        `;
      case 'responsive':
        return `
          <div class="p-2.5 bg-[#080810] border border-slate-800 rounded text-center text-xs space-y-1">
            <div class="text-emerald-400 font-mono font-bold">@media (min-width: 768px)</div>
            <div class="text-slate-400 text-[11px]">Adapts layout from 1 col on mobile to 2 cols on tablet</div>
          </div>
        `;
      default:
        return '<div class="text-xs text-slate-400">Interactive Preview Panel</div>';
    }
  }

  function initCSSVisualDemoListeners() {
    // Flexbox demo
    document.querySelectorAll('.flex-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const justify = e.target.getAttribute('data-justify');
        const box = document.getElementById('flexbox-demo-box');
        if (!box) return;
        
        e.target.parentElement.querySelectorAll('.flex-btn').forEach(b => {
          b.className = 'flex-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800';
        });
        e.target.className = 'flex-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold';
        
        const justifyMap = {
          'start': 'justify-start',
          'center': 'justify-center',
          'between': 'justify-between',
          'end': 'justify-end'
        };
        box.className = `h-20 p-2.5 rounded bg-[#080810] border border-slate-800 flex items-center ${justifyMap[justify]} gap-2 transition-all`;
      });
    });

    // Grid demo
    document.querySelectorAll('.grid-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cols = e.target.getAttribute('data-cols');
        const box = document.getElementById('grid-demo-box');
        if (!box) return;
        
        e.target.parentElement.querySelectorAll('.grid-btn').forEach(b => {
          b.className = 'grid-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800';
        });
        e.target.className = 'grid-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold';
        
        box.className = `grid grid-cols-${cols} gap-2 p-2.5 rounded bg-[#080810] border border-slate-800 transition-all`;
      });
    });

    // Box model slider
    const paddingSlider = document.getElementById('padding-slider');
    if (paddingSlider) {
      paddingSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        const txt = document.getElementById('padding-val');
        const content = document.getElementById('box-model-content');
        if (txt) txt.textContent = `${val}px`;
        if (content) content.style.padding = `${val}px`;
      });
    }

    // Position demo
    document.querySelectorAll('.pos-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pos = e.target.getAttribute('data-pos');
        const box = document.getElementById('position-target-box');
        if (!box) return;
        
        e.target.parentElement.querySelectorAll('.pos-btn').forEach(b => {
          b.className = 'pos-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800';
        });
        e.target.className = 'pos-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold';
        
        if (pos === 'static') {
          box.className = 'static w-28 py-1.5 bg-slate-700 text-white font-mono text-xs rounded text-center shadow-lg transition-all';
        } else if (pos === 'relative') {
          box.className = 'relative top-2 left-4 w-28 py-1.5 bg-indigo-600 text-white font-mono text-xs rounded text-center shadow-lg transition-all';
        } else if (pos === 'absolute') {
          box.className = 'absolute top-3 right-3 w-28 py-1.5 bg-cyan-600 text-white font-mono text-xs rounded text-center shadow-lg transition-all';
        }
      });
    });

    // Color presets
    document.querySelectorAll('.color-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const grad = e.target.getAttribute('data-grad');
        const box = document.getElementById('color-preview-box');
        if (box) {
          box.className = `h-14 rounded-xl bg-gradient-to-r ${grad} flex items-center justify-center font-mono text-xs font-bold text-white shadow-lg transition-all`;
        }
      });
    });

    // Font weight
    document.querySelectorAll('.font-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const weight = e.target.getAttribute('data-weight');
        const text = document.getElementById('font-preview-text');
        if (!text) return;
        
        e.target.parentElement.querySelectorAll('.font-btn').forEach(b => {
          b.className = 'font-btn px-2 py-0.5 rounded bg-[#080810] text-slate-300 hover:text-white border border-slate-800';
        });
        e.target.className = 'font-btn px-2 py-0.5 rounded bg-indigo-600 text-white font-semibold';
        
        text.style.fontWeight = weight;
      });
    });
  }

  // --- RENDER JAVASCRIPT PROGRAMS SECTION (FROM index.js SOURCE) ---
  function renderJSSection() {
    const container = document.getElementById('js-cards-container');
    if (!container) return;

    container.innerHTML = jsPrograms.map(prog => {
      const isCompleted = !!completedTopics[prog.id];

      // Generate input HTML elements
      const inputsHTML = prog.inputs.map(inp => `
        <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 text-xs">
          <label for="${inp.id}" class="text-slate-400 font-mono font-medium sm:w-44">${inp.label}</label>
          <input type="${inp.type}" id="${inp.id}" value="${inp.default}" 
            class="px-3 py-1.5 rounded-lg bg-black border border-slate-800 text-white font-mono text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full sm:w-64">
        </div>
      `).join('');

      return `
        <div class="topic-card glass-card relative p-6 rounded-2xl border border-slate-800 hover:border-yellow-500/40 transition-all duration-300 space-y-6" data-topic-id="${prog.id}" data-category="js" data-keywords="${prog.title.toLowerCase()} ${prog.description.toLowerCase()} index.js">
          
          <!-- Card Top Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Program #${prog.num}</span>
                <span class="text-xs font-mono text-slate-400">Source: <code class="text-yellow-300">index.js</code></span>
              </div>
              <h3 class="text-xl font-bold text-white">${prog.title}</h3>
              <p class="text-sm text-slate-300">${prog.description}</p>
            </div>

            <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-white select-none self-start sm:self-center">
              <input type="checkbox" class="topic-checkbox w-4 h-4 rounded bg-black border-slate-700 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-slate-900" data-id="${prog.id}" ${isCompleted ? 'checked' : ''}>
              <span>${isCompleted ? 'Completed' : 'Mark Learned'}</span>
            </label>
          </div>

          <!-- Input Parameters Box -->
          <div class="p-4 rounded-xl bg-black border border-slate-800 space-y-3">
            <div class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <span>Test Parameters & Custom Inputs</span>
            </div>
            <div class="space-y-2">
              ${inputsHTML}
            </div>
          </div>

          <!-- Code Editor Panel -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="text-xs font-mono text-slate-400 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span>Source Code Snippet</span>
              </div>
              
              <div class="flex items-center gap-2">
                <button class="toggle-js-code-btn px-2.5 py-1 rounded bg-[#080810] hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors" data-target="code-container-${prog.id}">
                  Hide Code
                </button>
                <button class="copy-code-btn px-2.5 py-1 rounded bg-[#080810] hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1" data-code="${escapeHTML(prog.code)}">
                  <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  Copy
                </button>
              </div>
            </div>

            <div id="code-container-${prog.id}" class="relative rounded-xl code-editor-box p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
              <pre><code>${highlightCode(prog.code, 'js')}</code></pre>
            </div>
          </div>

          <!-- Action Buttons & Expected Output Badge -->
          <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div class="flex items-center gap-3">
              <button class="run-js-btn px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg shadow-yellow-500/20 transition-all flex items-center gap-2" data-prog-id="${prog.id}">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <span>Run Code</span>
              </button>
            </div>

            <div class="flex items-center gap-2 text-xs font-mono">
              <span class="text-slate-400">Expected Default Output:</span>
              <span class="px-2.5 py-1 rounded bg-black border border-slate-800 text-yellow-300 font-bold">${prog.expectedOutput.replace(/\n/g, ' | ')}</span>
            </div>
          </div>

          <!-- Terminal Output Console Box -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs font-mono text-slate-400">
              <span class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Terminal Output Console
              </span>
              <span class="text-[10px] text-slate-500">Output Log</span>
            </div>
            
            <div id="output-console-${prog.id}" class="p-3.5 rounded-xl terminal-console-box font-mono text-xs text-emerald-400 min-h-[64px] max-h-48 overflow-y-auto leading-relaxed">
              <div class="text-slate-500 font-mono">&gt; Click "Run Code" above to execute program.</div>
            </div>
          </div>

        </div>
      `;
    }).join('');

    initJSProgramListeners();
  }

  function initJSProgramListeners() {
    document.querySelectorAll('.run-js-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const progId = e.currentTarget.getAttribute('data-prog-id');
        const prog = jsPrograms.find(p => p.id === progId);
        if (!prog) return;

        const inputsObj = {};
        prog.inputs.forEach(inp => {
          const inputEl = document.getElementById(inp.id);
          inputsObj[inp.id] = inputEl ? inputEl.value : inp.default;
        });

        const consoleBox = document.getElementById(`output-console-${progId}`);
        if (!consoleBox) return;

        try {
          const startTime = performance.now();
          const outputText = prog.runner(inputsObj);
          const endTime = performance.now();
          const executionTime = (endTime - startTime).toFixed(2);

          consoleBox.innerHTML = `
            <div class="text-slate-500 font-mono border-b border-slate-800/60 pb-1 mb-1.5 flex items-center justify-between">
              <span>$ node index.js &gt; ${prog.title}</span>
              <span class="text-indigo-400">${executionTime} ms</span>
            </div>
            <pre class="text-emerald-400 whitespace-pre-wrap">${escapeHTML(outputText)}</pre>
          `;
          showToast(`Executed Program #${prog.num} successfully!`, 'success');
        } catch (err) {
          consoleBox.innerHTML = `
            <div class="text-rose-400 font-mono">
              <strong>Execution Error:</strong> ${escapeHTML(err.message)}
            </div>
          `;
          showToast(`Error running program: ${err.message}`, 'error');
        }
      });
    });

    document.querySelectorAll('.toggle-js-code-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-target');
        const codeBox = document.getElementById(targetId);
        if (!codeBox) return;

        if (codeBox.classList.contains('hidden')) {
          codeBox.classList.remove('hidden');
          e.currentTarget.textContent = 'Hide Code';
        } else {
          codeBox.classList.add('hidden');
          e.currentTarget.textContent = 'Show Code';
        }
      });
    });
  }

  // --- RENDER TAILWIND TOPICS SECTION ---
  function renderTailwindSection() {
    const container = document.getElementById('tailwind-cards-container');
    if (!container) return;

    container.innerHTML = tailwindTopics.map(topic => {
      const isCompleted = !!completedTopics[topic.id];
      const classesHTML = topic.classes.map(cls => `<span class="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono text-[11px]">${cls}</span>`).join(' ');

      return `
        <div class="topic-card glass-card relative p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between" data-topic-id="${topic.id}" data-category="tailwind" data-keywords="${topic.title.toLowerCase()} ${topic.description.toLowerCase()} tailwind utility">
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Tailwind #${topic.num}</span>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-400 hover:text-white select-none">
                <input type="checkbox" class="topic-checkbox w-4 h-4 rounded bg-black border-slate-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900" data-id="${topic.id}" ${isCompleted ? 'checked' : ''}>
                <span>${isCompleted ? 'Completed' : 'Mark Learned'}</span>
              </label>
            </div>

            <h3 class="text-lg font-bold text-white">${topic.title}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">${topic.description}</p>
            
            <div class="space-y-1">
              <div class="text-[11px] font-semibold text-slate-400">Key Utility Classes:</div>
              <div class="flex flex-wrap gap-1">
                ${classesHTML}
              </div>
            </div>

            <!-- Code snippet -->
            <div class="relative rounded-xl code-editor-box p-3 font-mono text-xs text-slate-200 overflow-x-auto">
              <button class="copy-code-btn absolute top-2 right-2 p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" data-code="${escapeHTML(topic.snippet)}" title="Copy Snippet">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </button>
              <pre class="pr-8"><code>${highlightCode(topic.snippet, 'html')}</code></pre>
            </div>
          </div>

          <!-- Visual Tailwind Preview -->
          <div class="pt-3 border-t border-slate-800/60 space-y-1.5">
            <div class="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Visual Preview</div>
            <div class="p-3 bg-black rounded-xl border border-slate-800">${topic.preview}</div>
          </div>

        </div>
      `;
    }).join('');
  }

  // ==========================================
  // 3. ORIGINAL SOURCE FILE HANDLERS
  // ==========================================
  
  let rawSourceText = '';

  async function loadOriginalSource() {
    const displayEl = document.getElementById('raw-index-source-display');
    const modalEl = document.getElementById('modal-source-code');
    if (!displayEl) return;

    try {
      const resp = await fetch('index.js');
      if (!resp.ok) throw new Error('Could not fetch index.js');
      rawSourceText = await resp.text();

      displayEl.innerHTML = highlightCode(rawSourceText, 'js');
      if (modalEl) modalEl.innerHTML = highlightCode(rawSourceText, 'js');

      const lineCount = rawSourceText.split('\n').length;
      const countEl = document.getElementById('source-line-count');
      if (countEl) countEl.textContent = `${lineCount} Lines • ${(rawSourceText.length / 1024).toFixed(1)} KB`;

    } catch (err) {
      rawSourceText = `console.log("1) Positive, Negative, or Zero");\nlet number = 8;\nif (number < 0) {\n  console.log("Negative number ");\n} else {\n  console.log(" Positive number ");\n}\n\nconsole.log("2)Find the Largest of Three Numbers");\nlet a1 = 56;\nlet a2 = 90;\nlet a3 = 89;\nif (a1 > a2) {\n  console.log(" the a1 value larger ");\n}\nif (a2 > a3) {\n  console.log("The a2 value thhe larger number ");\n} else {\n  console.log(" The a3 value islarger number ");\n}\n\nconsole.log("3)Count Even Numbers");\nlet numbers = [10, 15, 20, 25, 30, 35];\nfor (let i = 0; i <= numbers.length; i++) {\n  if (numbers[i] % 2 == 0) {\n    console.log(numbers[i]);\n  }\n}\n\nconsole.log("4)Find the Sum of Digits");\nlet value = 12345;\nlet sum = 0;\nlet numberString = String(value);\nfor (let i = 0; i < numberString.length; i++) {\n  sum = sum + Number(numberString[i]);\n}\nconsole.log(sum);\n\nconsole.log("5) Find the sum of number in array");\nlet num = [10, 20, 10, 30, 20, 40];\nlet sum1 = 0;\nfor (let i = 0; i < num.length; i++) {\n  sum1 += num[i];\n}\nconsole.log(sum1);\n\nconsole.log("6)Find whether a number is prime");\nlet prime = 50;\nlet counter = 0;\nfor (let i = 1; i <= prime; i++) {\n  if (prime % i == 0) {\n    counter++;\n  }\n}\nif (counter == 2) {\n  console.log("prime");\n} else {\n  console.log(" Not a prime");\n}\n\nconsole.log("7)Find common elements in two arrays");\nlet a = [10, 20, 60, 40];\nlet b = [20, 40, 50, 60];\nfor (let i = 0; i <= a.length; i++) {\n  for (let j = 0; j < b.length; j++) {\n    if (a[i] == b[j]) {\n      console.log(a[i]);\n    }\n  }\n}\n\nconsole.log("8)Find how many times a particular value occurs");\nlet arr = [10, 20, 10, 30, 10, 40];\nlet target = 10;\ncountnum=0;\nfor (let i=1; i<arr.length;i++){\n    if (arr[i]==target){\n        countnum++;\n    }\n}\nconsole.log(countnum);\n\nconsole.log("Count vowels");\nlet text = "javascript";\nlet count = 0;\nfor (let i = 0; i < text.length; i++) {\n  if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {\n    count++;\n  }\n}\nconsole.log(count);`;
      displayEl.innerHTML = highlightCode(rawSourceText, 'js');
      if (modalEl) modalEl.innerHTML = highlightCode(rawSourceText, 'js');
    }
  }

  function initSourceActionListeners() {
    const copyBtn = document.getElementById('copy-full-source-btn');
    const downloadBtn = document.getElementById('download-source-btn');
    const viewModalBtn = document.getElementById('view-source-modal-btn');
    const modal = document.getElementById('source-modal');
    const closeModalBtn = document.getElementById('close-source-modal');
    const modalCopyBtn = document.getElementById('modal-copy-btn');

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(rawSourceText);
        showToast('Copied index.js source code to clipboard!', 'success');
      });
    }

    if (modalCopyBtn) {
      modalCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(rawSourceText);
        showToast('Copied index.js source code to clipboard!', 'success');
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const blob = new Blob([rawSourceText], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Downloading index.js file...', 'info');
      });
    }

    if (viewModalBtn && modal) {
      viewModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    }

    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      });
    }
  }

  // Theme Toggle Button Handler
  function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const toggleText = document.getElementById('theme-toggle-text');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');

        if (toggleText) {
          toggleText.textContent = isLight ? 'Light Mode' : 'Dark Mode';
        }
        showToast(`Switched to ${isLight ? 'Light Mode' : 'Dark Mode'}`, 'info');
      });
    }
  }

  // ==========================================
  // 4. PROGRESS TRACKER & SEARCH FILTERING
  // ==========================================

  function updateProgressUI() {
    const allTopics = [...htmlTopics, ...cssTopics, ...jsPrograms, ...tailwindTopics];
    const totalCount = allTopics.length; // 40

    let htmlDone = htmlTopics.filter(t => completedTopics[t.id]).length;
    let cssDone = cssTopics.filter(t => completedTopics[t.id]).length;
    let jsDone = jsPrograms.filter(t => completedTopics[t.id]).length;
    let twDone = tailwindTopics.filter(t => completedTopics[t.id]).length;

    let overallDone = htmlDone + cssDone + jsDone + twDone;
    let percent = Math.round((overallDone / totalCount) * 100);

    const percentEl = document.getElementById('overall-progress-percent');
    const barEl = document.getElementById('overall-progress-bar');
    const navText = document.getElementById('nav-progress-text');

    if (percentEl) percentEl.textContent = `${percent}% Completed`;
    if (barEl) barEl.style.width = `${percent}%`;
    if (navText) navText.textContent = `${overallDone} / ${totalCount}`;

    const updateTechMetric = (countId, barId, done, total) => {
      const countEl = document.getElementById(countId);
      const bEl = document.getElementById(barId);
      if (countEl) countEl.textContent = `${done} / ${total}`;
      if (bEl) bEl.style.width = `${(done / total) * 100}%`;
    };

    updateTechMetric('progress-html-count', 'progress-html-bar', htmlDone, 10);
    updateTechMetric('progress-css-count', 'progress-css-bar', cssDone, 10);
    updateTechMetric('progress-js-count', 'progress-js-bar', jsDone, 10);
    updateTechMetric('progress-tailwind-count', 'progress-tailwind-bar', twDone, 10);
  }

  function initProgressCheckboxListeners() {
    document.addEventListener('change', (e) => {
      if (e.target && e.target.classList.contains('topic-checkbox')) {
        const topicId = e.target.getAttribute('data-id');
        if (e.target.checked) {
          completedTopics[topicId] = true;
          showToast('Topic marked as completed! 🎉', 'success');
        } else {
          delete completedTopics[topicId];
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTopics));
        updateProgressUI();

        const span = e.target.parentElement.querySelector('span');
        if (span) span.textContent = e.target.checked ? 'Completed' : 'Mark Learned';
      }
    });

    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all completed topic progress?')) {
          completedTopics = {};
          localStorage.removeItem(STORAGE_KEY);
          document.querySelectorAll('.topic-checkbox').forEach(cb => {
            cb.checked = false;
            const span = cb.parentElement.querySelector('span');
            if (span) span.textContent = 'Mark Learned';
          });
          updateProgressUI();
          showToast('Progress tracker reset.', 'info');
        }
      });
    }
  }

  // --- GLOBAL SEARCH & FILTER TOOLBAR ---
  function initSearchAndFilter() {
    const searchInput = document.getElementById('global-search');
    const clearBtn = document.getElementById('clear-search-btn');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const statusContainer = document.getElementById('search-status-bar');
    const countEl = document.getElementById('visible-topic-count');
    const resetFilterBtn = document.getElementById('reset-filter-btn');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    function filterTopics() {
      const cards = document.querySelectorAll('.topic-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const keywords = card.getAttribute('data-keywords') || '';
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';

        const matchesCat = (currentCategory === 'all' || cat === currentCategory);
        const matchesQuery = !currentSearchTerm || keywords.includes(currentSearchTerm) || title.includes(currentSearchTerm);

        if (matchesCat && matchesQuery) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (countEl) countEl.textContent = visibleCount;
      if (statusContainer) {
        if (currentCategory !== 'all' || currentSearchTerm !== '') {
          statusContainer.classList.remove('hidden');
        } else {
          statusContainer.classList.add('hidden');
        }
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase().trim();
        if (clearBtn) {
          if (currentSearchTerm) clearBtn.classList.remove('hidden');
          else clearBtn.classList.add('hidden');
        }
        filterTopics();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        clearBtn.classList.add('hidden');
        filterTopics();
      });
    }

    filterTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabs.forEach(t => {
          t.className = 'filter-tab px-3.5 py-2 rounded-lg bg-[#080810] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all';
        });
        e.target.className = 'filter-tab px-3.5 py-2 rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all active';

        currentCategory = e.target.getAttribute('data-category');
        filterTopics();
      });
    });

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        currentCategory = 'all';
        filterTabs.forEach(t => {
          if (t.getAttribute('data-category') === 'all') {
            t.className = 'filter-tab px-3.5 py-2 rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all active';
          } else {
            t.className = 'filter-tab px-3.5 py-2 rounded-lg bg-[#080810] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all';
          }
        });
        filterTopics();
      });
    }
  }

  function initDetailAccordions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.toggle-detail-btn');
      if (btn) {
        const targetId = btn.getAttribute('data-target');
        const detailBox = document.getElementById(targetId);
        const icon = btn.querySelector('svg');

        if (detailBox) {
          if (detailBox.classList.contains('hidden')) {
            detailBox.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
          } else {
            detailBox.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
          }
        }
      }
    });
  }

  function initGlobalCopyButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.copy-code-btn');
      if (btn) {
        const code = btn.getAttribute('data-code');
        if (code) {
          const unescapedCode = unescapeHTML(code);
          navigator.clipboard.writeText(unescapedCode);
          showToast('Code snippet copied to clipboard!', 'success');
        }
      }
    });
  }

  function initNavigationUtilities() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.toggle('hidden');
        if (closeIcon) closeIcon.classList.toggle('hidden');
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
          if (closeIcon) closeIcon.classList.add('hidden');
        });
      });
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let scrollY = window.pageYOffset;

      sections.forEach(sec => {
        const sectionHeight = sec.offsetHeight;
        const sectionTop = sec.offsetTop - 100;
        const sectionId = sec.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active', 'text-white', 'bg-slate-800');
            link.classList.add('text-slate-300');
            if (link.getAttribute('data-section') === sectionId) {
              link.classList.add('active', 'text-white', 'bg-slate-800');
              link.classList.remove('text-slate-300');
            }
          });
        }
      });

      const backToTopBtn = document.getElementById('back-to-top-btn');
      if (backToTopBtn) {
        if (window.scrollY > 400) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
          backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
          backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
      }
    });

    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const typeClasses = {
      success: 'bg-[#080810] border-emerald-500/40 text-emerald-300',
      error: 'bg-[#080810] border-rose-500/40 text-rose-300',
      info: 'bg-[#080810] border-indigo-500/40 text-indigo-300'
    };

    toast.className = `toast-enter p-3.5 rounded-xl border shadow-2xl backdrop-blur-xl text-xs font-medium flex items-center gap-2.5 max-w-sm pointer-events-auto ${typeClasses[type] || typeClasses.info}`;
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400' : type === 'error' ? 'bg-rose-400' : 'bg-indigo-400'} animate-pulse"></span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(100%)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function highlightCode(code, lang) {
    let escaped = escapeHTML(code);

    if (lang === 'js') {
      escaped = escaped
        .replace(/\b(const|let|var|if|else|for|while|return|function|new|class)\b/g, '<span class="token-keyword">$1</span>')
        .replace(/\b(console\.log|String|Number|parseInt|parseFloat)\b/g, '<span class="token-function">$1</span>')
        .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, '<span class="token-string">$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>')
        .replace(/(\/\/.+$)/gm, '<span class="token-comment">$1</span>');
    } else if (lang === 'html') {
      escaped = escaped
        .replace(/(&lt;\/?[a-zA-Z0-9]+)(\s*&gt;|\s+)/g, '<span class="token-tag">$1</span>$2')
        .replace(/\b([a-zA-Z\-]+)=/g, '<span class="token-attr">$1</span>=')
        .replace(/("[^"]*")/g, '<span class="token-string">$1</span>');
    } else if (lang === 'css') {
      escaped = escaped
        .replace(/([a-zA-Z\-]+)\s*:/g, '<span class="token-attr">$1</span>:')
        .replace(/(#[a-fA-F0-9]{3,6}|\d+px|\d+rem|\d+deg|rgba?\([^)]+\))/g, '<span class="token-number">$1</span>')
        .replace(/(\/\*.+?\*\/)/g, '<span class="token-comment">$1</span>');
    }

    return escaped;
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function unescapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }

  // ==========================================
  // INITIALIZATION CALLS
  // ==========================================
  renderHTMLSection();
  renderCSSSection();
  renderJSSection();
  renderTailwindSection();
  loadOriginalSource();

  initSourceActionListeners();
  initProgressCheckboxListeners();
  initSearchAndFilter();
  initDetailAccordions();
  initGlobalCopyButtons();
  initNavigationUtilities();
  initThemeToggle();
  updateProgressUI();

});
