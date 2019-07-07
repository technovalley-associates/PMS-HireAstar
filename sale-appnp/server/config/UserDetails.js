module.exports = function()
{

    this.getUserJson = function()
    {
        let conf = require("./json/user.json");
        return conf.user;
    }
    this.getCompanyJson = function()
    {
        let conf = require("./json/user.json");
        return conf.company;
    }
}