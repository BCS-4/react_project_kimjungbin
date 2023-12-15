import { useSDK } from "@metamask/sdk-react";
import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  account: string;
  setAccount: Dispatch<SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ account, setAccount }) => {
  const { sdk } = useSDK();

  const onClickMetaMask = async () => {
    try {
      const accounts: any = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="p-2 flex justify-between font-DOS">
      <div className="flex gap-4">
        <Link
          className="px-4 rounded-full border flex justify-center items-center"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-4 rounded-full border flex justify-center items-center"
          to="/my"
        >
          My
        </Link>
        <Link
          className="px-4 rounded-full border flex justify-center items-center"
          to="/sale"
        >
          Sale
        </Link>
      </div>
      <div>
        {account ? (
          <div>
            <span>
              {account.substring(0, 7)}...
              {account.substring(account.length - 5)}
            </span>
            <button className="ml-2" onClick={() => setAccount("")}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="px-4 rounded-full border flex justify-center items-center"
            onClick={onClickMetaMask}
          >
            MetaMask Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
