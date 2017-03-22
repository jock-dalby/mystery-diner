import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  accessToken: null,

  authenticate(login, password) {
    return Ember.$.ajax({
      method: "POST",
      url: "/token",
      data: { username: login, password: password }
    }).then((result) => {
      this.set('accessToken', result.access_token);
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: Ember.computed.bool('accessToken')


});