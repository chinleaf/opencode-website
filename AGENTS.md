# AGENTS.md

## Project constraints
- Keep all work inside this project (this directory).
- Use only `index.html`, `style.css`, and `script.js`. No dependencies, no CDN.
- Include a heading, short introduction, two content sections (Projects and Skills), and one useful interaction (project filtering).
- The site must work at narrow and wide browser widths and with a keyboard.
- Serve only on localhost.
- Do not build yet, install packages, create accounts, or deploy anything.
- Do not commit, push, install anything, or start a server for me (unless explicitly requested).

## Technical requirements
- Semantic HTML. Use `<button>` for interactive controls.
- Readable CSS with mobile-first responsive design; use CSS variables; include `:focus-visible` styles.
- Small vanilla JavaScript (no frameworks/libraries).
- Accessibility: proper ARIA for interactive state (e.g. `aria-pressed`) and visible focus indicators.
- Filtering: hide non-matching cards with a `.hidden` class; "All" shows everything.
- No external assets. No persistence (no localStorage).

## Files
- `index.html` - HTML structure
- `style.css` - styles and responsiveness
- `script.js` - filtering behavior
- `README.md` - local run instructions
- `AGENTS.md` - these constraints
- `.gitignore` - `.env`, `node_modules/`, `.DS_Store`