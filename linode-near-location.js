(function (root, factory) {
    // Support for AMD, CommonJS, and browser global.
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.linodeNearLocation = factory();
  }
}(this, function () {

    return function linodeNearLocation() {
        // Add Daylight Savings Time detection, all most all dst countries are northern hemisphere
        // http://javascript.about.com/library/bldst.htm
        Date.prototype.stdTimezoneOffset = function() {
            var jan = new Date(this.getFullYear(), 0, 1);
            var jul = new Date(this.getFullYear(), 6, 1);
            return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
        };
        Date.prototype.dst = function() {
            return this.getTimezoneOffset() < this.stdTimezoneOffset();
        };

        var today = new Date();
        var timezoneOffset = today.getTimezoneOffset() / 60;
        var linode_location;

        if (today.dst()) {
            timezoneOffset++;  // add one if we are currently in daylight savings time
        }

        // convert to actual value because signs are reversed in getTimezoneOffset
        timezoneOffset = Math.round(0 - timezoneOffset);

        // refer to this picture: https://cloud.githubusercontent.com/assets/3926730/18216404/7a3862a4-7124-11e6-91a1-0d03b2c7f9d5.gif
        switch (timezoneOffset) {
            case -12:
            case -11:
            case -10:
            case -9:
            case -8:
                linode_location = 'fremont';
                break;
            case -7:
            case -6:
                linode_location = 'dallas';
                break;
            case -5:
            case -4:
            case -3:
                linode_location = 'newark';
                break;
            case -2:
            case -1:
            case 0:
                linode_location = 'london';
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                linode_location = 'frankfurt';
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                linode_location = 'singapore';
                break;
            default:
                linode_location = 'newark';
        }

        return linode_location;
    }

}));
