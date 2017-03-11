export default function() {
  this.namespace = '/api';

  let restaurants = [{
        type: 'restaurants',
        id: 'bethel-woods',
        attributes: {
          title: 'Bethel Woods',
          address: '73 The Terrace',
          city: 'Wellington',
          type: 'Casual Dining',
          telephone: '04 920 8530',
          website: 'www.bethelwoods.co.nz/',
          image: 'http://www.misopeckish.com/wp-content/uploads/2014/12/P11808781.jpg',
          description: "Named after (you guessed it) the original 1969 Woodstock Festival everything about Bethel Woods screams 'fun times'. Think classic, rocking music, pit smoked BBQ meats and a huge choice of 18 tap beers and ciders from Wellington crafty favourites to a regular changing American tap."
        }
      }, {
        type: 'restaurants',
        id: 'depot-eatery',
        attributes: {
          title: 'Depot Eatery',
          address: '86 Federal Street',
          city: 'Auckland',
          type: 'Fine Dining',
          telephone: '09 363 7048',
          website: 'www.eatatdepot.co.nz/',
          image: 'http://www.tworight.co.nz/wp-content/uploads/2015/07/Depot.jpg',
          description: "The perfect place to drop in and refuel. It’s chef Al Brown’s place and reflects perfectly his attitude towards food: in season, beautifully cooked, to be enjoyed with friends."
        }
      }, {
        type: 'restaurants',
        id: 'king-of-snake',
        attributes: {
          title: 'King of Snake',
          address: '145 Victoria Street',
          city: 'Christchurch',
          type: 'Casual Dining',
          telephone: '03 365 7363',
          website: 'www.kingofsnake.co.nz/',
          image: 'http://www.kingofsnake.co.nz/wp-content/gallery/hello/sg09612.jpg',
          description: "A timeless paean to Southeast Asian sensuality. King of Snake titillates Christchurch’s Victoria Street precinct with Tony Astle’s elevation of the the region’s tastes, textures and visuals in a casual, sexy atmosphere."
        }
      }, {
        type: 'restaurants',
        id: 'fergburger',
        attributes: {
          title: 'Fergburger',
          address: '42 Shotover Street',
          city: 'Queenstown',
          type: 'Burger Bar',
          telephone: '03 441 1232',
          website: 'www.fergburger.com/',
          image: 'https://kegrunwald.files.wordpress.com/2011/11/dsc00582.jpg',
          description: 'Fergburger specialises in gourmet hamburgers, and is quite well known internationally despite not being a chain and only having one location.'
        }
      }];
  this.get('/restaurants', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredrestaurants = restaurants.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredrestaurants };
    } else {
      return { data: restaurants };
    }
  });

  // Find and return the provided rental from our restaurant list above
  this.get('/restaurants/:id', function (db, request) {
    return { data: restaurants.find((restaurant) => request.params.id === restaurant.id) };
  });
}

// These comments are here to help you get started. Feel free to delete them.

/*
 Config (with defaults).

 Note: these only affect routes defined *after* them!
 */

// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `/api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
 Shorthand cheatsheet:

 this.get('/posts');
 this.post('/posts');
 this.get('/posts/:id');
 this.put('/posts/:id'); // or this.patch
 this.del('/posts/:id');

 http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
 */