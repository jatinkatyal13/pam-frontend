import Component from '@ember/component';

export default Component.extend({
  enabled: false, // whether recognition is enabled
  speechRecognition: null, // the instance of webkitSpeechRecognition
  language: 'en', // language to recognise
  startRecognition: function() {
    // prefixed SpeechRecognition object because it only works in Chrome
    var speechRecognition = new webkitSpeechRecognition();
    // not continuous to avoid delays
    speechRecognition.continuous = true;
    // only the final result
    speechRecognition.interimResults = false;
    // binding various handlers
    speechRecognition.onresult = Ember.run.bind(this, this.onRecoginitionResult);
    speechRecognition.onerror = Ember.run.bind(this, this.onRecognitionError);
    speechRecognition.onend = Ember.run.bind(this, this.onRecognitionEnd);
    // starting the recognition
    speechRecognition.start();
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
    }
  }.observes('enabled'),
});
