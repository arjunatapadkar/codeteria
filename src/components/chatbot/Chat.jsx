import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "f4a89c05-18e9-46c6-8dcb-a137ddb93fa7";

const config = {
    composerPlaceholder: "What would you like to know?",
    botName: "Coding Assistant",
    botAvatar: "https://codeteria.vercel.app/assets/logo-ealTzxVS.svg",
    botDescription: "Hi! 👋 Welcome to Codeteria WebChat! Ask me any coding questions, and I'll help you out!",
    email: {
      title: "support@codeteria.com",
      link: "mailto:arjunatapadkar919@gmail.com",
    },
    phone: {
      title: "555-555-5555",
      link: "tel:555-555-5555",
    },
    website: {
      title: "https://codeteria.com",
      link: "https://codeteria.vercel.app",
    },
    termsOfService: {
      title: "Terms of service",
      link: "https://botpress.com/terms",
    },
    privacyPolicy: {
      title: "Privacy policy",
      link: "https://botpress.com/privacy",
    },
  };

const Chat = () =>  {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-end lg:items-start lg:flex-row-reverse" >
      <style>{style}</style>
      <WebchatProvider
        theme={theme}
        client={client}
        configuration={config}
        
      >
        <Fab onClick={toggleWebchat} className="" />
        <div
          
          className={`${isWebchatOpen ? "block" : "hidden"}  h-[500px] w-[400px]`}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}

export default Chat