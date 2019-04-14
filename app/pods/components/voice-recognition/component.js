import Component from '@ember/component';

export default Component.extend({
  enabled: false, // whether recognition is enabled
  speechRecognition: null, // the instance of webkitSpeechRecognition
  language: 'en', // language to recognise
  speechRecognition: null,
  init() {
    this._super(...arguments)
    this.speechRecognition = new webkitSpeechRecognition();
    // not continuous to avoid delays
    this.speechRecognition.continuous = true;
    // only the final result
    this.speechRecognition.interimResults = false;
    // binding various handlers
    this.speechRecognition.onresult = Ember.run.bind(this, this.onRecoginitionResult);
    this.speechRecognition.onerror = Ember.run.bind(this, this.onRecognitionError);
    this.speechRecognition.onend = Ember.run.bind(this, this.onRecognitionEnd);
  },
  startRecognition() {
    // starting the recognition
    this.speechRecognition.start();
  },
  stopRecognition() {
    this.speechRecognition.stop();
  },
  onRecognitionEnd: function() {
    console.log("ended")
    // this.set('enabled', false);
  },
  onRecognitionError: function() {
    alert('Recognition error');
  },
  /**
  * e is a SpeechRecognitionEvent
  * https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi.html#speechreco-event
  */
  onRecoginitionResult: function(e) {
    var result = '';
    var resultNo = 0;
    var alternativeNo = 0;
    // we get the first alternative of the first result
    result = e.results[e.results.length-1][alternativeNo].transcript;
    // report the result to the outside
    this.sendAction('onResult', result);
  },
  onEnabledChange: function() {
    if (this.get('enabled')) {
      this.startRecognition();
    } else {
      this.stopRecognition();
    }
  }.observes('enabled'),
});
