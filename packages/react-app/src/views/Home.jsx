import { Button, Divider, Input } from "antd";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Address, Balance, Events } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ tx, address, mainnetProvider, yourLocalBalance, readContracts, writeContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const [amount, setAmount] = useState("0");
  const [cardNumber, setCardNumber] = useState("0");

  return (
    <div style={{ border: "1px solid #cccccc", padding: 16, width: 300, margin: "auto", marginTop: 64 }}>
      <h1>Gas Station ⛽</h1>
      <Divider />
      <div>
        Your Address:
        <Address address={address} ensProvider={mainnetProvider} fontSize={16} />
      </div>
      <Divider />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Input
          type="number"
          placeholder="amount"
          onChange={e => {
            setAmount(e.target.value);
          }}
        />
        <Button
          onClick={async () => {
            await tx(writeContracts.GasAgency.payForGas({ value: ethers.utils.parseEther(amount.toString()) }));
          }}
        >
          Pay For Gas 💵
        </Button>
      </div>
      <Divider />
      <div>
        <h3>Enter Your Card Number</h3>
        <Input
          placeholder="000000000000"
          onChange={e => {
            setCardNumber(e.target.value);
          }}
        />
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Input
            type="number"
            placeholder="amount"
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
          <Button
            onClick={async () => {
              await tx(
                writeContracts.GasAgency.payForGasWithCard(cardNumber, {
                  value: ethers.utils.parseEther(amount.toString()),
                }),
              );
            }}
          >
            Pay For Gas 💵
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
