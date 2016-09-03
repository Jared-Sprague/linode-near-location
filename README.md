# linode-near-location
A simple javascript function that returns the nearest Linode location based on the clients timezone

## Usage

### In a browser
For example a client in New York:
```
var linode_location = linodeNearLocation();
console.log("Nearest linode location: ", linode_location);
```
Outputs: `Nearest linode location: Newark`

### On node
```
var near = require('./linode-near-location.js');
var linode_location = near();
console.log("Nearest linode location: ", linode_location);
```
Outputs: `Nearest linode location: Newark`
