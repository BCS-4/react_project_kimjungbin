import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Web3, { Contract, ContractAbi } from "web3";
import { useSDK } from "@metamask/sdk-react";

import Header from "./Header";
import mintNftAbi from "../abis/mintNftAbi.json";
import saleNftAbi from "../abis/saleNftAbi.json";

const Layout: FC = () => {
  const [account, setAccount] = useState<string>("");
  const [web3, setWeb3] = useState<Web3>();
  const [mintNftContract, setMintNftContract] =
    useState<Contract<ContractAbi>>();
  const [saleNftContract, setSaleNftContract] =
    useState<Contract<ContractAbi>>();

  const { provider } = useSDK();

  useEffect(() => {
    if (!provider) return;

    setWeb3(new Web3(provider));
  }, [provider]);

  useEffect(() => {
    if (!web3) return;

    setMintNftContract(
      new web3.eth.Contract(
        mintNftAbi,
        "0x8439715D90725F8a0a1cF4eCa3e3Aa50c757f25e"
      )
    );
    setSaleNftContract(
      new web3.eth.Contract(
        saleNftAbi,
        "0x6C0f5D9B7801f65555174367C5546F22cB4FA692"
      )
    );
  }, [web3]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex flex-col font-DOS">
      <Header account={account} setAccount={setAccount} />
      <Outlet context={{ account, web3, mintNftContract, saleNftContract }} />
    </div>
  );
};

export default Layout;
