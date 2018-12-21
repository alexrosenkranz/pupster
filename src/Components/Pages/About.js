import React from 'react';
import dogpic from './images/doge.jpg';

const styles = {
  hero: {
    backgroundImage: `url(${dogpic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "aquamarine",
    color: "white",
    textShadow: "0 0 10px black",
    minHeight: "45vh"
  }
}

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center" style={styles.hero}>
        <h1 className="display-4">Welcome to the Pupster App!</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
          
            <h3>Sup Pups!</h3>
            <p>Carles brunch slow-carb authentic twee normcore ugh XOXO Pitchfork Tonx readymade Intelligentsia vinyl you probably haven't heard of them dreamcatcher cornhole wolf cred mlkshk Echo Park raw denim keytar +1 banh mi messenger bag art party plaid shabby chic post-ironic viral next level irony cliche drinking vinegar leggings Blue Bottle kogi roof party literally Banksy Wes Anderson four loko hashtag Portland tattooed keffiyeh occupy direct trade  fixie seitan umami meggings kale chips single-origin coffee Shoreditch banjo Godard flexitarian street art pork belly kitsch vegan Pinterest forage typewriter ethical Cosby sweater biodiesel put a bird on it artisan gastropub actually YOLO retro church-key hoodie fingerstache locavore squid freegan fap High Life sustainable before they sold out small batch 90's chambray Brooklyn pop-up 8-bit ennui Austin pickled pug mumblecore food truck pour-over polaroid crucifix jean shorts stumptown lomo synth swag Vice skateboard selfies Neutra Helvetica distillery master cleanse trust fund letterpress organic mustache Williamsburg Truffaut craft beer quinoa Marfa tofu flannel sriracha DIY Schlitz 3 wolf moon cardigan bitters wayfarers hella bespoke Tumblr iPhone semiotics gluten-free Etsy heirloom deep v beard Bushwick McSweeney's salvia lo-fi sartorial PBR Kickstarter bicycle rights gentrify Thundercats whatever American Apparel tousled fanny pack paleo blog tote bag meh PBR&B aesthetic mixtape try-hard Odd Future fashion axe chillwave VHS chia disrupt yr photo booth cray narwhal scenester butcher asymmetrical selvage farm-to-table</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus consectetur commodi neque quam provident, repellat amet incidunt in recusandae, tenetur rem reiciendis ipsa fugiat eius sed saepe architecto eum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus consectetur commodi neque quam provident, repellat amet incidunt in recusandae, tenetur rem reiciendis ipsa fugiat eius sed saepe architecto eum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;