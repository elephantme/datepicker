module.exports = {
    extend: function (target, source) {
        if(target == null) return source;
        if(source == null) return target;
        for(var prop in source) {
            if(source.hasOwnProperty(prop)){
                target[prop] = source[prop];
            }
        }
        return target;
    }
};