import Ember from 'ember';

const restaurantTypes = [
  'Fine Dining',
  'Casual Dining',
  'Silver service'
];

export function restaurantType([type]/*, hash*/) {
  console.log("HIT")
  if (restaurantTypes.includes(type)) {
    return 'Sitdown Restaurant';
  }

  return 'Takeaway';
}

export default Ember.Helper.helper(restaurantType);