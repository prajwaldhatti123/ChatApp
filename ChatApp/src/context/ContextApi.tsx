import React, { ReactNode, createContext, useContext } from "react";

// chat loader function
interface Chat {
  sender: string;
  message: string;
  profilePhoto: string;
}
interface propTypes {
  children: ReactNode;
}

const chatsLoader = (count: number): Chat[] => {
  const getRandomProfilePhoto = (): string => {
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID between 0 and 999
    return `https://picsum.photos/id/${randomId}/100/100`; // Use Lorem Picsum API with random ID
  };
  const chats: Chat[] = [];
  for (let i = 0; i < count; i++) {
    const sender = `User ${i + 1}`;
    const message = `Message ${i + 1}`;
    const profilePhoto = getRandomProfilePhoto();
    chats.push({ sender, message, profilePhoto });
  }
  return chats;
};

const data = chatsLoader(30);
export const chatContext = createContext(data);

const ContextProvider: React.FC<propTypes> = ({ children }) => {
  const chatArray = useContext(chatContext);
  // return <Context.Provider value={chatArray}>{children}</Context.Provider>;
  return (
    <chatContext.Provider value={chatArray}>{children}</chatContext.Provider>
  );
};
export default ContextProvider;
