const displayContent = require('./display-content');

window.onload = function() {
	var watchID = navigator.accelerometer.watchAcceleration(success, fail, {frequency: 1000});
	
}

var success = function(accel) {
	document.querySelector('#outX').innerHTML = accel.x;
};

var fail = function(e) {
	alert('Accelerometer Error');
};