"use client";
import { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
export default function Home() {
  
  const greetingMessage = `
Hey there! I'm Adam, your plant growing expert. 😊 What can I help you with today? 🌱 
Indoor, outdoor, or backyard garden - I'm here to guide you! Let's get growing!
`;

  const [messages, setMessages] = useState([
    { role: 'model', text: greetingMessage },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async () => {
    const newMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsSending(true);

    const history = updatedMessages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          history,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        const botMessage = { role: 'model', text: data.text };
        setMessages([...updatedMessages, botMessage]);
      } else {
        console.error('Error response from server:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (

    <Box
  width="100vw"
  height="100vh"
  display="flex"
  justifyContent="center"
  alignItems="center"
  position="relative"
  sx={{
    backgroundImage: 'url("rootrangerbg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <Stack
    direction={"column"}
    width="800px"
    height="800px"
    border="1px solid black"
    p={2}
    position="absolute"
    top="8%"
    left="50%"
    transform="translate(-50%, -50%)"
    bgcolor="rgba(255, 255, 255, 0.9)" // Optional: to make the background slightly transparent
  >
    <Stack direction={"column"} spacing={2} flexGrow={1}>
      {messages.map((msg, index) => {
        return (
          <Box
            key={index}
            display="flex"
            justifyContent={
              msg.role === "model" ? "flex-start" : "flex-end"
            }
          >
            <Box
              bgcolor={
                msg.role === "model"
                  ? "primary.main"
                  : "secondary.main"
              }
              color="white"
              borderRadius={4}
              p={2}
            >
              {msg.text}
            </Box>
          </Box>
        );
      })}
    </Stack>
    <Stack direction={"row"} spacing={2}>
      <TextField
        label="Messages"
        fullWidth
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
    </Stack>
  </Stack>
</Box>








    // <Box
    //   width="100vw"
    //   height="100vh"
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Stack direction={"column"} width="500px" height="700px" border="1px solid black" p={2}>
    //     <Stack direction={"column"} spacing={2}  flexGrow={1}>
    //       {messages.map((msg, index) => {
    //         return (
    //           <Box
    //             key={index}
    //             display="flex"
    //             justifyContent={
    //               msg.role === "model" ? "flex-start" : "flex-end"
    //             }
    //           >
    //             <Box
    //               bgcolor={
    //                 msg.role === "model"
    //                   ? "primary.main"
    //                   : "secondary.main"
    //               }
    //               color="white"
    //               borderRadius={6}
    //               p={2}
    //             >
    //               {msg.text}
    //             </Box>
    //           </Box>
    //         );
    //       })}
    //     </Stack>
    //     <Stack direction={"row"} spacing={2}>
    //       <TextField label="Messages" fullWidth onChange={(e) => setInput(e.target.value)} value={input}/>
    //       <Button variant="Contained" onClick={sendMessage}>Send</Button>
    //     </Stack>
    //   </Stack>
    // </Box>
  );
}
