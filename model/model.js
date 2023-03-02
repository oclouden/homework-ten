var MODEL = (function() {

    var _homeContent = ` <div class="home">

    <section class="hero">
        
        <!-- <div class="hero-image" > <img src="/images/hero-image.png" alt=""> </div> -->
        <div class="hero-text">
            <ul>
            <li class="travel-fly">travel-fly</li>
            <li class="top-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li class="bottom-text">Lorem ipsum dolor sit amet.</li>
        </ul>

        </div>
       
        <div class="learn-more"> <a href="#"> Learn More </a></div>
    </section>


    <section class="promo-trips">
        
        <div class="israel">
            <img src="images/israel.png" alt="">
            <li>
                <ul>Israel</ul>
                <ul>from $1000</ul>
            </li>
        </div>

        <div class="usa">
            <img src="images/usa.png" alt="">
            <li>
                <ul>u.s.a.</ul>
                <ul>from $1500</ul>
            </li>
        </div>
        <div class="australia">
            <img src="images/australia.png" alt="">
            <li>
                <ul>israel</ul>
                <ul>from $1800</ul>
            </li>
        </div>
    </section>


    <section class="booking">
        <div class="booking-wrapper">
            <h1>Booking Form</h1>
            
            <div class="inlined-label">
                <input type="text" placeholder="name..." min=" " required>
            </div>

            <div class="inlined-label">
                <input type="text" placeholder="email..." min=" " required>
            </div>
            
            <div class="inlined-label">
                <input type="text" placeholder="country..." min=" " required>
            </div>

            <div class="inlined-label">
                <input type="text" placeholder="hotel..." min=" " required>
            </div>
                <label class="move-over">Check-in</label>
                <input class="move-over-again" type="date">
            <hr>
                <label class="move-over">Check-out</label>
                <input type="date">
            <hr>
            
            <div class="flexyflex">
                <label class="persons">Adult</label>
                <input class="size" type="number" placeholder="2"size="5">

            <label class="persons">Children</label>
            <input type="number" placeholder="2" size="5">
            <label class="persons">Rooms</label>
            <input type="number" placeholder="2"size="5">
            </div>
        

                <div class="inlined-label-comment">
                    <input type="text" placeholder="message..." min=" " required>
                </div> 
            <hr>

            <div class="read-more"> <a href="#"> Read More </a></div>
        </div>
        </div>
    </section>`;

    var _aboutContent = ` <div class="about">
    <div class="aboutParagraph">
        <h1>ABOUT:</h1>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.

        </p>
    </div>
</div>`;

    var _toursContent = `
    <div class="toursContainer">
        <div class="toursHero">
            <div class="toursHeader">
                <h1>TOURS:</h1>
            </div>
        </div>
        <div class="toursLocations">
            <div class="toursReusable">
                <h1>Israel</h1>
                <div class="toursPrice"> From $1000</div>
                <div class="learnMore">
                    <a href="israelTour.html">LEARN MORE</a>
                </div>
                <div class="countryTourImg">
                    <img src="images/tour-israel.jpg" alt="">
                </div>
            </div>
            
        </div>
    </div>`;

    var _specialOfferContent = `<div class="specialOffersContainer">

    <h1>SPECIAL OFFER(S):</h1>

    <div class="offer">

      <div class="offerImage">
        <img src="images/specialOffer1.jpg" alt="" />
      </div>

      <div class="offerInfo">

        <div class="offerHeader">
          <h1>BARCELONA, SPAIN</h1>
        </div>


        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>



    <div class="offer">

      <div class="offerImage">
        <img src="images/specialOffer2.jpg" alt="" />
      </div>

      <div class="offerInfo">

        <div class="offerHeader">
          <h1>BANGKOK, THAILAND</h1>
        </div>


        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>

    </div>
  </div>`;

    var _blogContent = `   <div class="blog-container">


    <h1>BLOG:</h1>

    <div class="blogPosts"> 

      <div class="blogDate">
        <p class="day">06</p>
        <p class="month">JUN</p>
        
      </div>

      <div class="post">
        <div class="postImage">
          <img src="images/blog.jpg" alt="" />
        </div>

        <div class="postWords">
          <h5>Sed et persipiatis unde omnis iste natus</h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>


    <div class="blogPosts">

      <div class="blogDate">
        <p class="day">23</p>
        <p class="month">JUL</p>

      </div>

      <div class="post">
        <div class="postImage">
          <img src="images/blog.jpg" alt="" />
        </div>

        <div class="postWords">
          <h5>Sed et persipiatis unde omnis iste natus</h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </div>
`;

    var _contactContent = `
    <div class="contactContainer">
        <h1>CONTACT US:</h1>
        <div class="contactInfo">

          <div class="map">
            <img src="images/map.png" alt="" />
            <p class="directions">travel-fly Inc.</p>
            <p class="directions">8901 Marmora Road,</p>
            <p class="directions">Glasgow, D04 89GR.</p>
            <p class="directions">Freephone:+1 800 559 6580</p>
            <p class="directions">Telephone:+1 800 603 6035</p>
            <p class="directions">FAX:+1 800 889 9898</p>
            <p class="directions">E-mail: mail@travelfly.org</p>
          </div>
        </div>
`;

var _updateView = function(pageName){
    console.log("Model" + pageName);
    var pageContent = "_" + pageName;

    $("#app").html(eval(pageContent));
};

return {
    updateView: _updateView
}

})();