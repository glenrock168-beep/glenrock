import './components.css';

const Footer = () => {
  return (
    <section id="footer">
        <div class="inner">
            <h2 class="major">Get in touch</h2>
            <p>Get started on your commercial roofing project today. Schedule a time using the form below, provide your project details, and our team will prepare a customized quote tailored to your needs.</p>
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/d/cvtf-3p7-kj2"
              style={{
                width: '80%',
                maxWidth: '900px',
                minWidth: '320px',
                height: '700px',
                margin: '0 auto',
                background: 'transparent',
                overflow: 'visible',
              }}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* Calendly inline widget end */}
            <ul class="contact">
                <li class="icon solid fa-home">
                    Glenrock<br />
                    1234 Somewhere Road Suite #2894<br />
                    Atlanta, GA 12345
                </li>
                <li class="icon solid fa-phone">(404) 518-8998</li>
                <li class="icon solid fa-envelope"><a href="#">info@glenrockusa.com</a></li>
                <li class="icon solid fa-envelope"><a href="#">service@glenrockusa.com</a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; Glenrock Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">Alayna Lee</a></li>
            </ul>
        </div>
    </section>
  );
};

export default Footer;
