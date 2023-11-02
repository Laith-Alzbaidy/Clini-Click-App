// _app.js

import AppContext from "@/context";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
