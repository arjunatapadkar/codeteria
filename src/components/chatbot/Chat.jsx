import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import React, { useState, useRef, useEffect } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

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

const Chat = () => {
  const client = getClient({ clientId }); 
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const webchatRef = useRef(null);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  const closeWebchat = () => {
    setIsWebchatOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      //Condition When Pressed on WebChat top Close icon =>
      if (event.srcElement.innerHTML === "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>"){
        closeWebchat();
      }
      else if (webchatRef.current && !webchatRef.current.contains(event.target) && !event.target.className == 'bpFabIcon') {
        closeWebchat();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-10 z-50">
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client} configuration={config}>
        <Fab onClick={toggleWebchat} />
        {isWebchatOpen && (
          <div ref={webchatRef} className="absolute bottom-16 right-0 h-[500px] w-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
            <Webchat/>
          </div>
        )}
      </WebchatProvider>
    </div>
  );
};

export default Chat;