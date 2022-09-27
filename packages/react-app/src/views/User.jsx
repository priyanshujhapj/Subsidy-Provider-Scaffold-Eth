import { Typography } from "antd";
import { useContractReader } from "eth-hooks";
import { Address } from "../components";

function User({ address, mainnetProvider, yourLocalBalance, readContracts }) {
  const { Text } = Typography;
  let cardNumber, cardName, cardValidity, cardAddress;
  // const discount = useContractReader(readContracts, "GasAgency", DISCOUNT_PERCENTAGE)
  return (
    <div>
      <div
        style={{
          border: "2px solid brown",
          borderRadius: "15px",
          padding: 16,
          width: 500,
          margin: "auto",
          marginTop: 64,
        }}
      >
        <div>
          <h2>CARD NUMBER</h2>
          <Text copyable={{ text: cardNumber }} style={{ display: "flex", justifyContent: "center" }}>
            <h2>XXXX-1234-YYYY-5678</h2>
          </Text>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>NAME</div>
            <div>
              <Text copyable={{ text: cardName }}>COR</Text>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>IS VALID</div>
            <div>
              <a>True</a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>ADDRESS</div>
            <div>
              <Address address={address} ensProvider={mainnetProvider} fontSize={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
