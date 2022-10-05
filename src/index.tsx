import React from 'react';
import ReactDOM from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import 'reset-css/reset.css'
import './fonts.css'

Sentry.init({
  dsn: "https://c36da8fd4e2a4b3184a11081b1f10022@o107915.ingest.sentry.io/4503929981304832",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
