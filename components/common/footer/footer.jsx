export default function Footer() {
  return (
    <div className="container">
      <footer id="footer" class="footer">
        <div class="footer__container">
          <div class="grid footer__grid grid--align-top">
            <nav class="footer__nav grid__column grid grid__column--full grid--align-top grid--justify-start">
              <div class="grid__column grid__column--one-fifth-medium">
                <h4 class="footer-section__third icon-angle-right">About Us</h4>
                <ul class="footer__list footer-dropdown-list">
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

              <div class="grid__column grid__column--one-fifth-medium">
                <h4 class="footer-section__fourth icon-angle-right hide-for-mobile">
                  <a href="https://mrswordsmith.zendesk.com/hc/en-us/ ">
                    Help & support
                  </a>
                </h4>
                <h4 class="footer-section__fourth icon-angle-right show-for-mobile">
                  Help & support
                </h4>
                <ul class="footer__list footer-dropdown-list">
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
                      class="nowrap"
                      href="https://mrswordsmith.zendesk.com/hc/en-gb/categories/360001633212-Returns-Refunds"
                    >
                      Returns &amp; Refunds
                    </a>
                  </li>
                  <li>
                    <a class="nowrap" href="/pages/privacy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a class="nowrap" href="/pages/terms-and-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class="nowrap"
                      href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360002280817-Printables-FAQS"
                    >
                      Printables FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      class="nowrap"
                      href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360001633852-Products"
                    >
                      Books and Games FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      class="nowrap"
                      href="https://mrswordsmith.zendesk.com/hc/en-us/categories/360002288797-Google-Classroom"
                    >
                      Google Classroom FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      class="nowrap"
                      href="https://mrswordsmith.zendesk.com/hc/en-us/"
                    >
                      Other
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
