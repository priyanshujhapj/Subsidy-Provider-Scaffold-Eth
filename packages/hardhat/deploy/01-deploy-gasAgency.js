const { network } = require("hardhat")
const { networkConfig } = require("../helper.hardhat.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const args = [
        networkConfig[chainId]["vrfV2Coordinator"],
        networkConfig[chainId]["gasLane"],
        networkConfig[chainId]["subscriptionId"],
        networkConfig[chainId]["callbackGasLimit"],
        // enter any address which will act as gas station
        "0x4093a6dfc8DA488950cF12272c954EA708C432A2"
    ]
    const gasAgency = await deploy("GasAgency", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}