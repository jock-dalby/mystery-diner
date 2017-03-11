export default function() {
  this.namespace = '/api';

  let restaurants = [{
        type: 'restaurants',
        id: 'bethel-woods',
        attributes: {
          title: 'Bethel Woods',
          owner: 'WHG',
          city: 'Wellington',
          type: 'Casual Dining',
          bedrooms: 15,
          image: 'http://www.misopeckish.com/wp-content/uploads/2014/12/P11808781.jpg'
        }
      }, {
        type: 'restaurants',
        id: 'depot-eatery',
        attributes: {
          title: 'Depot Eatery',
          owner: 'Al Brown',
          city: 'Auckland',
          type: 'Fine Dining',
          bedrooms: 1,
          image: 'http://www.tworight.co.nz/wp-content/uploads/2015/07/Depot.jpg'
        }
      }, {
        type: 'restaurants',
        id: 'king-of-snake',
        attributes: {
          title: 'King of Snake',
          owner: 'Tony Astle',
          city: 'Christchurch',
          type: 'Casual Dining',
          bedrooms: 3,
          image: 'http://www.kingofsnake.co.nz/wp-content/gallery/hello/sg09612.jpg'
        }
      }, {
        type: 'restaurants',
        id: 'fergburger',
        attributes: {
          title: 'Fergburger',
          owner: 'Anthony Smith',
          city: 'Queenstown',
          type: 'Burger Bar',
          bedrooms: 3,
          image: 'https://kegrunwald.files.wordpress.com/2011/11/dsc00582.jpg'
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