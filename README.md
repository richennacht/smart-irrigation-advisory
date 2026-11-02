# JalSathi — Smart Irrigation Advisory

A React coursework application combining farmer registration, validation, reusable plot components, routing and array-based records. Add, search, edit and delete plots; each plot displays a demonstration moisture classification.

## Run

Install Node.js and npm, then run `npm install` and `npm start`. Open the local URL printed by Vite. `npm run build` checks the production build. On Windows, `Run.bat` installs dependencies if needed and starts the application.

## Scope and data

Records and contact details are stored in the browser's local storage, not on a server; they are not synced and may be lost when browser data is cleared. Initial entries are fictional. The moisture bands (<35%, 35–65%, >65%) are illustrative only and not calibrated to crops, soils, sensors or local conditions. This is not an AI model and does not connect to weather, sensors or irrigation equipment. It does not prescribe water amounts. Consult local agronomic guidance before irrigating. BrowserRouter deployment requires the host to serve index.html for application routes.
