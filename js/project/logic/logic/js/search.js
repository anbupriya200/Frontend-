/* Universal Search Modal (Ctrl + K) */
(function() {
  const TOPIC_INDEX = [
    // HTML Topics
    { id: 'html-intro', title: 'HTML Introduction', tech: 'HTML', url: 'html.html#html-intro' },
    { id: 'html-doc-structure', title: 'HTML Document Structure', tech: 'HTML', url: 'html.html#html-doc-structure' },
    { id: 'html-headings', title: 'HTML Headings', tech: 'HTML', url: 'html.html#html-headings' },
    { id: 'html-paragraphs', title: 'Paragraphs', tech: 'HTML', url: 'html.html#html-paragraphs' },
    { id: 'html-links', title: 'Links (Anchor Tags)', tech: 'HTML', url: 'html.html#html-links' },
    { id: 'html-images', title: 'Images', tech: 'HTML', url: 'html.html#html-images' },
    { id: 'html-lists', title: 'Lists (Ordered & Unordered)', tech: 'HTML', url: 'html.html#html-lists' },
    { id: 'html-tables', title: 'Tables', tech: 'HTML', url: 'html.html#html-tables' },
    { id: 'html-forms', title: 'Forms', tech: 'HTML', url: 'html.html#html-forms' },
    { id: 'html-input-types', title: 'Input Types', tech: 'HTML', url: 'html.html#html-input-types' },
    { id: 'html-buttons', title: 'Buttons', tech: 'HTML', url: 'html.html#html-buttons' },
    { id: 'html-semantic', title: 'Semantic HTML', tech: 'HTML', url: 'html.html#html-semantic' },
    { id: 'html-div-span', title: 'Div and Span', tech: 'HTML', url: 'html.html#html-div-span' },
    { id: 'html-audio-video', title: 'Audio and Video', tech: 'HTML', url: 'html.html#html-audio-video' },
    { id: 'html-attributes', title: 'HTML Attributes', tech: 'HTML', url: 'html.html#html-attributes' },
    { id: 'html-meta', title: 'Meta Tags', tech: 'HTML', url: 'html.html#html-meta' },

    // CSS Topics
    { id: 'css-intro', title: 'CSS Introduction', tech: 'CSS', url: 'css.html#css-intro' },
    { id: 'css-inline', title: 'Inline CSS', tech: 'CSS', url: 'css.html#css-inline' },
    { id: 'css-internal', title: 'Internal CSS', tech: 'CSS', url: 'css.html#css-internal' },
    { id: 'css-external', title: 'External CSS', tech: 'CSS', url: 'css.html#css-external' },
    { id: 'css-selectors', title: 'CSS Selectors', tech: 'CSS', url: 'css.html#css-selectors' },
    { id: 'css-colors', title: 'Colors', tech: 'CSS', url: 'css.html#css-colors' },
    { id: 'css-backgrounds', title: 'Backgrounds', tech: 'CSS', url: 'css.html#css-backgrounds' },
    { id: 'css-fonts', title: 'Fonts and Text', tech: 'CSS', url: 'css.html#css-fonts' },
    { id: 'css-box-model', title: 'Box Model', tech: 'CSS', url: 'css.html#css-box-model' },
    { id: 'css-margin', title: 'Margin', tech: 'CSS', url: 'css.html#css-margin' },
    { id: 'css-padding', title: 'Padding', tech: 'CSS', url: 'css.html#css-padding' },
    { id: 'css-border', title: 'Border', tech: 'CSS', url: 'css.html#css-border' },
    { id: 'css-display', title: 'Display Property', tech: 'CSS', url: 'css.html#css-display' },
    { id: 'css-position', title: 'Position Property', tech: 'CSS', url: 'css.html#css-position' },
    { id: 'css-flexbox', title: 'Flexbox', tech: 'CSS', url: 'css.html#css-flexbox' },
    { id: 'css-grid', title: 'CSS Grid', tech: 'CSS', url: 'css.html#css-grid' },
    { id: 'css-pseudo-classes', title: 'Pseudo Classes', tech: 'CSS', url: 'css.html#css-pseudo-classes' },
    { id: 'css-pseudo-elements', title: 'Pseudo Elements', tech: 'CSS', url: 'css.html#css-pseudo-elements' },
    { id: 'css-media-queries', title: 'Media Queries', tech: 'CSS', url: 'css.html#css-media-queries' },
    { id: 'css-responsive', title: 'Responsive Design', tech: 'CSS', url: 'css.html#css-responsive' },

    // JavaScript Topics
    { id: 'js-intro', title: 'JavaScript Introduction', tech: 'JavaScript', url: 'javascript.html#js-intro' },
    { id: 'js-variables', title: 'Variables', tech: 'JavaScript', url: 'javascript.html#js-variables' },
    { id: 'js-let', title: 'let Statement', tech: 'JavaScript', url: 'javascript.html#js-let' },
    { id: 'js-const', title: 'const Statement', tech: 'JavaScript', url: 'javascript.html#js-const' },
    { id: 'js-var', title: 'var Statement', tech: 'JavaScript', url: 'javascript.html#js-var' },
    { id: 'js-data-types', title: 'Data Types', tech: 'JavaScript', url: 'javascript.html#js-data-types' },
    { id: 'js-operators', title: 'Operators', tech: 'JavaScript', url: 'javascript.html#js-operators' },
    { id: 'js-arithmetic', title: 'Arithmetic Operators', tech: 'JavaScript', url: 'javascript.html#js-arithmetic' },
    { id: 'js-comparison', title: 'Comparison Operators', tech: 'JavaScript', url: 'javascript.html#js-comparison' },
    { id: 'js-logical', title: 'Logical Operators', tech: 'JavaScript', url: 'javascript.html#js-logical' },
    { id: 'js-if', title: 'if Statement', tech: 'JavaScript', url: 'javascript.html#js-if' },
    { id: 'js-ifelse', title: 'if...else Statement', tech: 'JavaScript', url: 'javascript.html#js-ifelse' },
    { id: 'js-elseif', title: 'else if Statement', tech: 'JavaScript', url: 'javascript.html#js-elseif' },
    { id: 'js-for-loop', title: 'for Loop', tech: 'JavaScript', url: 'javascript.html#js-for-loop' },
    { id: 'js-while-loop', title: 'while Loop', tech: 'JavaScript', url: 'javascript.html#js-while-loop' },
    { id: 'js-functions', title: 'Functions', tech: 'JavaScript', url: 'javascript.html#js-functions' },
    { id: 'js-arrays', title: 'Arrays', tech: 'JavaScript', url: 'javascript.html#js-arrays' },
    { id: 'js-strings', title: 'Strings', tech: 'JavaScript', url: 'javascript.html#js-strings' },
    { id: 'js-objects', title: 'Objects', tech: 'JavaScript', url: 'javascript.html#js-objects' },
    { id: 'js-array-methods', title: 'Array Methods', tech: 'JavaScript', url: 'javascript.html#js-array-methods' },
    { id: 'js-string-methods', title: 'String Methods', tech: 'JavaScript', url: 'javascript.html#js-string-methods' },
    { id: 'js-dom-intro', title: 'DOM Introduction', tech: 'JavaScript', url: 'javascript.html#js-dom-intro' },
    { id: 'js-dom-selectors', title: 'DOM Selectors', tech: 'JavaScript', url: 'javascript.html#js-dom-selectors' },
    { id: 'js-events', title: 'Events', tech: 'JavaScript', url: 'javascript.html#js-events' },
    { id: 'js-form-validation', title: 'Form Validation', tech: 'JavaScript', url: 'javascript.html#js-form-validation' },
    
    // JS Practice Programs
    { id: 'prog-1', title: 'Practice Program: Positive, Negative, or Zero', tech: 'JavaScript Practice', url: 'javascript.html#prog-1' },
    { id: 'prog-2', title: 'Practice Program: Largest of Three Numbers', tech: 'JavaScript Practice', url: 'javascript.html#prog-2' },
    { id: 'prog-3', title: 'Practice Program: Count Even Numbers', tech: 'JavaScript Practice', url: 'javascript.html#prog-3' },
    { id: 'prog-4', title: 'Practice Program: Find the Sum of Digits', tech: 'JavaScript Practice', url: 'javascript.html#prog-4' },
    { id: 'prog-5', title: 'Practice Program: Sum of Numbers in Array', tech: 'JavaScript Practice', url: 'javascript.html#prog-5' },
    { id: 'prog-6', title: 'Practice Program: Check Prime Number', tech: 'JavaScript Practice', url: 'javascript.html#prog-6' },
    { id: 'prog-7', title: 'Practice Program: Common Elements in Two Arrays', tech: 'JavaScript Practice', url: 'javascript.html#prog-7' },
    { id: 'prog-8', title: 'Practice Program: Value Occurrence Count', tech: 'JavaScript Practice', url: 'javascript.html#prog-8' },
    { id: 'prog-9', title: 'Practice Program: Count Vowels in String', tech: 'JavaScript Practice', url: 'javascript.html#prog-9' },

    // Tailwind CSS Topics
    { id: 'tw-intro', title: 'Tailwind CSS Introduction', tech: 'Tailwind', url: 'tailwind.html#tw-intro' },
    { id: 'tw-installation', title: 'Installation / CDN', tech: 'Tailwind', url: 'tailwind.html#tw-installation' },
    { id: 'tw-utility-classes', title: 'Utility Classes', tech: 'Tailwind', url: 'tailwind.html#tw-utility-classes' },
    { id: 'tw-colors', title: 'Colors', tech: 'Tailwind', url: 'tailwind.html#tw-colors' },
    { id: 'tw-typography', title: 'Typography', tech: 'Tailwind', url: 'tailwind.html#tw-typography' },
    { id: 'tw-spacing', title: 'Spacing', tech: 'Tailwind', url: 'tailwind.html#tw-spacing' },
    { id: 'tw-width-height', title: 'Width and Height', tech: 'Tailwind', url: 'tailwind.html#tw-width-height' },
    { id: 'tw-backgrounds', title: 'Backgrounds', tech: 'Tailwind', url: 'tailwind.html#tw-backgrounds' },
    { id: 'tw-borders', title: 'Borders', tech: 'Tailwind', url: 'tailwind.html#tw-borders' },
    { id: 'tw-border-radius', title: 'Border Radius', tech: 'Tailwind', url: 'tailwind.html#tw-border-radius' },
    { id: 'tw-flexbox', title: 'Flexbox in Tailwind', tech: 'Tailwind', url: 'tailwind.html#tw-flexbox' },
    { id: 'tw-grid', title: 'Grid in Tailwind', tech: 'Tailwind', url: 'tailwind.html#tw-grid' },
    { id: 'tw-responsive', title: 'Responsive Design', tech: 'Tailwind', url: 'tailwind.html#tw-responsive' },
    { id: 'tw-hover-states', title: 'Hover States', tech: 'Tailwind', url: 'tailwind.html#tw-hover-states' },
    { id: 'tw-focus-states', title: 'Focus States', tech: 'Tailwind', url: 'tailwind.html#tw-focus-states' },
    { id: 'tw-shadows', title: 'Shadows', tech: 'Tailwind', url: 'tailwind.html#tw-shadows' },
    { id: 'tw-positioning', title: 'Positioning', tech: 'Tailwind', url: 'tailwind.html#tw-positioning' },
    { id: 'tw-sizing', title: 'Sizing', tech: 'Tailwind', url: 'tailwind.html#tw-sizing' },
    { id: 'tw-breakpoints', title: 'Responsive Breakpoints', tech: 'Tailwind', url: 'tailwind.html#tw-breakpoints' },
    { id: 'tw-cards', title: 'Cards Component', tech: 'Tailwind', url: 'tailwind.html#tw-cards' },
    { id: 'tw-buttons', title: 'Buttons Component', tech: 'Tailwind', url: 'tailwind.html#tw-buttons' },
    { id: 'tw-navbar', title: 'Navbar Component', tech: 'Tailwind', url: 'tailwind.html#tw-navbar' },
    { id: 'tw-forms', title: 'Forms Component', tech: 'Tailwind', url: 'tailwind.html#tw-forms' },
    { id: 'tw-layouts', title: 'Responsive Layouts', tech: 'Tailwind', url: 'tailwind.html#tw-layouts' },
    
    // Source Code
    { id: 'source-code', title: 'Original index.js Source Code', tech: 'Source Code', url: 'source.html' }
  ];

  let modalElement = null;

  function createSearchModal() {
    const backdrop = document.createElement('div');
    backdrop.className = 'search-modal-backdrop';
    backdrop.id = 'searchModalBackdrop';
    backdrop.innerHTML = `
      <div class="search-modal">
        <div class="search-modal-header">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input type="text" id="searchInput" class="search-input-field" placeholder="Search topics (e.g. Flexbox, Grid, Arrays, Forms)..." autocomplete="off" />
          <span style="font-size:0.75rem; color:var(--text-muted); background:var(--bg-tertiary); padding:0.2rem 0.5rem; border-radius:4px;">ESC to close</span>
        </div>
        <div class="search-modal-results" id="searchResultsContainer">
          <div style="padding: 1.5rem; text-align:center; color: var(--text-muted); font-size: 0.9rem;">
            Type to search across HTML, CSS, JavaScript, and Tailwind CSS topics...
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    modalElement = backdrop;

    const input = backdrop.querySelector('#searchInput');
    input.addEventListener('input', (e) => handleSearch(e.target.value));

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSearchModal();
    });
  }

  function handleSearch(query) {
    const container = document.getElementById('searchResultsContainer');
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      container.innerHTML = `
        <div style="padding: 1.5rem; text-align:center; color: var(--text-muted); font-size: 0.9rem;">
          Type to search across HTML, CSS, JavaScript, and Tailwind CSS topics...
        </div>`;
      return;
    }

    const matches = TOPIC_INDEX.filter(item => 
      item.title.toLowerCase().includes(cleanQuery) || 
      item.tech.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      container.innerHTML = `
        <div style="padding: 1.5rem; text-align:center; color: var(--text-muted); font-size: 0.9rem;">
          No matching topics found for "${query}"
        </div>`;
      return;
    }

    container.innerHTML = matches.map(item => `
      <a href="${item.url}" class="search-result-item" onclick="closeSearchModal()">
        <span class="search-result-tech">${item.tech}</span>
        <span class="search-result-title">${item.title}</span>
      </a>
    `).join('');
  }

  function openSearchModal() {
    if (!modalElement) createSearchModal();
    modalElement.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('searchInput');
      if (input) input.focus();
    }, 50);
  }

  function closeSearchModal() {
    if (modalElement) {
      modalElement.classList.remove('active');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Search trigger buttons
    document.querySelectorAll('.open-search-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openSearchModal();
      });
    });

    // Keyboard shortcut Ctrl + K or Cmd + K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeSearchModal();
      }
    });
  });

  window.closeSearchModal = closeSearchModal;
})();
