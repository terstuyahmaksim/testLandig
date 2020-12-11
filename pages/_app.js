import "../styles/reset.css";
import "../styles/fonts.scss";
import "../styles/variables.scss";
import "../styles/global.scss";

// --- common component styles --- //

import "../styles/common/buttons.scss";
import "../styles/common/slick.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
