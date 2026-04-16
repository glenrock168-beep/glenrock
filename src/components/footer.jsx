import './components.css';

const Footer = () => {
  return (
    <section id="footer">
        <div class="inner">
            <h2 class="major">Get in touch</h2>
            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
            <form method="post" action="#">
                <div class="fields">
                    <div class="field">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div class="field">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class="field">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                <ul class="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>
            </form>
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
