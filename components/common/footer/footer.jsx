import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer id="footer" className={styles.footer}>
        <nav className={styles.footerNav}>
          <div className={styles.gridColumn}>
            <h4 className={styles.footerMenuHeader}>About Us</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="/pages/about">Who we are</a>
              </li>
              <li>
                <a href="/pages/reviews">Customer reviews</a>
              </li>
              <li>
                <a href="/pages/press">Press</a>
              </li>
              <li>
                <a href="/pages/team">Meet the team</a>
              </li>
              <li>
                <a href="/pages/careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className={styles.gridColumn}>
            <h4 className={styles.footerMenuHeader}>Help & support</h4>
            <ul className={styles.footerList}>
              <li>
                <a
                  href="https://mrswordsmith.zendesk.com/hc/en-gb/categories/360001631291-Deliveries"
                  rel="noopener"
                >
                  Delivery info
                </a>
              </li>
              <li>
                <a
                  className={styles.nowrap}
                  href="https://mrswordsmith.zendesk.com/hc/en-gb/categories/360001633212-Returns-Refunds"
                >
                  Returns &amp; Refunds
                </a>
              </li>
              <li>
                <a className={styles.nowrap} href="/pages/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className={styles.nowrap} href="/pages/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  className={styles.nowrap}
                  href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360002280817-Printables-FAQS"
                >
                  Printables FAQs
                </a>
              </li>
              <li>
                <a
                  className={styles.nowrap}
                  href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360001633852-Products"
                >
                  Books and Games FAQs
                </a>
              </li>
              <li>
                <a
                  className={styles.nowrap}
                  href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360002288797-Google-Classroom"
                >
                  Google Classroom FAQs
                </a>
              </li>
              <li>
                <a
                  className={styles.nowrap}
                  href="https://mrswordsmith.zendesk.com/hc/en-us/"
                >
                  Other
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
}
