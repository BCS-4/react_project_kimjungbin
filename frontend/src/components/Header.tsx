import { useSDK } from "@metamask/sdk-react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [account, setAccount] = useState<string>("");

  const { sdk } = useSDK();

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();
      
      if(!accounts[0] || )

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="p-2 flex justify-between">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/my">My</Link>
        <Link to="/sale">Sale</Link>
      </div>
      <div>
        <button onClick={onClickMetaMask}>MetaMask Login</button>
      </div>
    </header>
  );
};

export default Header;
