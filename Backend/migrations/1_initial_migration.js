const records = artifacts.require("records");
module.exports = function (deployer) {
  deployer.deploy(records);
};
