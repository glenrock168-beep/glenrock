import './components.css';

const Body = () => {
  return (
    <section id="wrapper">

        {/* One */}
            <section id="one" class="wrapper spotlight style1">
                <div class="inner">
                    <a href="#" class="image"><img src="/glenrock/commercial-roofing.jpg" alt="" /></a>
                    <div class="content">
                        <h2 class="major">Reliable Roofing for Commercial Performance.</h2>
                        <p>Glen Rock Roofing specializes in high-quality commercial roofing solutions designed to protect businesses and industrial properties. 
                            We focus on installing durable, efficient roofing systems built to handle the demands of flat and low-slope commercial structures.
                        </p>
                        <a href="#" class="special">Learn more</a>
                    </div>
                </div>
            </section>

        {/* Two */}
            <section id="two" class="wrapper alt spotlight style2">
                <div class="inner">
                    <a href="#" class="image"><img src="/glenrock/commercial-roofing.jpg" alt="" /></a>
                    <div class="content">
                        <h2 class="major">Our Mission</h2>
                        <p>Our mission is to deliver reliable service, expert workmanship, and long-lasting results on every project. 
                            Whether it’s a new commercial installation, repair, maintenance, or full roof replacement, Glen Rock Roofing is committed to providing dependable roofing solutions that businesses can trust.</p>
                        <a href="#" class="special">Learn more</a>
                    </div>
                </div>
            </section>

    </section>
  );
};

export default Body;
