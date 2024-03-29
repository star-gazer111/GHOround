import React, { useState, useRef } from "react";
import { useSDK } from "@metamask/sdk-react";
import styles from "./index.module.css";
import { ForceGraph2D } from "react-force-graph";
import metamask from "./../../Assets/metamask-icon.svg";
import { useNavigate } from "react-router-dom";
import bg from "./bg8.webp";
import title from "./ghoround.png";
import gif from "./gif.gif";

import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const Home = () => {
  const fgRef = useRef();
  const navigate = useNavigate();
  const { sdk, connected, chainId, account } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(`connected`, accounts);
      navigate("/option");
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  // const useForceUpdate = () => {
  //   const setToggle = useState(false)[1];
  //   return () => setToggle((b) => !b);
  // };

  // const forceUpdate = useForceUpdate();

  return (
    <div className = "app"
style = {{ height:"100vh", width:"100vw",
  backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize: "cover",}}
>
<div className={styles.content}>
<img src={title} alt=" logo" style={{height:"350px"}}/>
<div className={styles.subtitle}>

</div>
<button className={styles.button} onClick={connect} 
// style={{backgroundImage:`url(${gif})`}}
>
{connected && account
? `Connected to ${account.slice(0, 6)}...${account.slice(-5, -1)}`
: "Connect Wallet"}
</button>
<ConnectKitButton/>
</div>

</div>
    
  );
};

export default Home;


