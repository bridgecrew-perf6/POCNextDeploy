

import { useWeb3 } from "@3rdweb/hooks";
import React from "react";

export default function Home() {
  const { connectWallet, address, error } = useWeb3();
  const [result, setResult] = React.useState(null);

  var fallbackToStore = function() {
    window.location.replace('market://details?id=com.myapp.package');
  };
  var openApp = function() {
    console.log(`comnineyishops000064://${address}`);
    // window.location.replace(`comnineyishops000064://`);
    // window.location.replace(`comnineyishops000064://`);
    window.location.href = `comnineyishops000064://`;

  };
  var triggerAppOpen = function(address) {
    console.log('ssdsdasjkfdsljflk;djf;');
    openApp();
    // setTimeout(fallbackToStore, 250);
  };

  React.useEffect(() => {
    error ? console.log(error) : null;
    console.log(address);
    triggerAppOpen(address);

  }, [address]);

  const handleClick = (event) => {
    connectWallet("injected")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
      {address ? (
        <p className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
          {address}
        </p>
      ) : (
        <button
          className="px-4 py-2 rounded-md bg-purple-600 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
          onClick={handleClick}
        >
          Connect Wallet12
        </button>
      )}
            <a href="comnineyishops000064://">Open myApp</a>
    </div>
    
  );
}
