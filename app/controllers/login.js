import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:oauth2', login, password).then(() => {
        console.log("success")
        alert('Success! Click the top link!');
      }, (err) => {
        console.log("fail")
        // alert('Error obtaining token: ' + err.responseText);
      });
    }
  }
});