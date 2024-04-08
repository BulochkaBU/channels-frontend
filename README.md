# The frontend for a message board prototype

This project is the frontend for a message board prototype application.

- The application is created with Vite and TypeScript.
- API services are created using RTK Query for data fetching and state management.
- The selected channel is stored in the state using Redux Toolkit (RTK).
- The application is styled using Tailwind CSS.

When the server starts a Get request for channels is made, the Channels panel appears. When you click on one of the channels in the Channels panel, the Messages panel and the form for creating a new message appear, at the same time a Get request for messages is made. The button in the input is disabled if the text area is empty. After a message is submitted, a POST request is made, and the new message appears in the Messages panel immediately.

### Getting Started

Clone the repository and install the dependencies - (`npm i`). Then, start the server (`npm run dev`).
