import Ember from 'ember';

export default Ember.Controller.extend({

  responseMessage: 'Hello Hello',
  emailAddress: '',
  message:'',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {
      console.log("hit");
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newMessage = this.store.createRecord('message', { email: email, message: message });
      newMessage.save();

      this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});