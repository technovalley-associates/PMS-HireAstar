module.exports = function()
{

    this.getConfig = function(env)
    {
        let conf = require("./json/config.json");
        return conf[env];
    }

}