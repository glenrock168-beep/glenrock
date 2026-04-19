import './components.css';

const Footer = () => {
  return (
    <section id="footer">
        <div class="inner">
            <h2 class="major">Get in touch</h2>
            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
            {/* Calendly inline widget begin */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/d/cvtf-3p7-kj2" style={{minWidth: '320px', height: '700px', background: 'transparent'}}></div>
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
