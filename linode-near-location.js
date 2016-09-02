function linodeNearLocation() {
    console.log('tzo', (new Date()).getTimezoneOffset());

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
    if (today.dst()) { console.log("Daylight savings time!"); }

    return 'foo';
}
