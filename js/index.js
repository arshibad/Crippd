var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
		setTimeout(function(){
        window.open('http://crippd.com', '_self', 'location=yes'); 
      },10000);
      
      /*setTimeout(function(){
        window.location='./main.html';
      },10000);*/
      
    }
};

$( window ).resize(function() {
  $('#bgimage').css('height',$(window).height()+'px');
});

$(document).ready(function(){
    //alert($(window).height());
    $('#bgimage').css('height',$(window).height()+'px');
})