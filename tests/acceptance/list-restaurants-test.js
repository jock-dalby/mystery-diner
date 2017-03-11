import { test } from 'qunit';
import moduleForAcceptance from 'mystery-diner/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list restaurants');

test('should redirect to restaurants route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/restaurants', 'should redirect automatically');
  });
});

test('should list available restaurants.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of restaurants by city.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'wellington');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Wellington")').length, 1, 'should contain 1 listing with location Wellington');
  });
});

test('should show details for a specific restaurant', function (assert) {
  visit('/restaurants');
  click('a:contains("Bethel Woods")');
  andThen(function() {
    assert.equal(currentURL(), '/restaurants/bethel-woods', 'should navigate to show route');
    assert.equal(find('.show-listing h2').text(), "Bethel Woods", 'should list restaurant title');
    assert.equal(find('.description').length, 1, 'should list a description of the restaurant');
  });
});