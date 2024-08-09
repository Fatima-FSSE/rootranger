"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat"; // Make sure to install MUI icons if not already

export default function Home() {
  const greetingMessage = `
Hey there! I'm Adam, your plant growing expert. 😊 What can I help you with today? 🌱 
Indoor, outdoor, or backyard garden - I'm here to guide you! Let's get growing!
`;

  const [messages, setMessages] = useState([
    { role: "model", text: greetingMessage },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false); // State to handle chat visibility

  const typeText = (text, index = 0) => {
    if (index < text.length) {
      setDisplayText((prev) => prev + text[index]);
      setTimeout(() => typeText(text, index + 1), 15);
    }
  };

  useEffect(() => {
    if (currentMessage) {
      setDisplayText("");
      typeText(currentMessage);
    }
  }, [currentMessage]);

  useEffect(() => {
    setCurrentMessage(greetingMessage);
  }, []);

  const sendMessage = async () => {
    const newMessage = { role: "user", text: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          history: updatedMessages.map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.text }],
          })),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        const botMessage = { role: "model", text: data.text };
        updatedMessages.push(botMessage);
        setMessages(updatedMessages);
        setCurrentMessage(data.text);
      } else {
        console.error("Error response from server:", data.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      sx={{
        backgroundImage: 'url("rootrangerbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {chatOpen ? (
        <Stack
          direction={"column"}
          width="500px" // Fixed width
          height="600px" // Fixed height
          border="1px solid black"
          p={2}
          bgcolor="rgba(255, 255, 255, 0.8)"
          sx={{
            overflowY: "auto",
            marginBottom: "20px",
            marginRight: "20px",
            borderRadius: "10px",
            position: "absolute",
            bottom: 80, // Offset by the height of the button
            right: 20,
            zIndex: 5,
          }}
        >
          <Stack direction={"column"} spacing={2} flexGrow={1} mb={2}>
            {" "}
            {messages.map((msg, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  msg.role === "model" ? "flex-start" : "flex-end"
                }
                sx={{ width: "100%" }}
              >
                <Box
                  bgcolor={msg.role === "model" ? "green" : "lightgreen"}
                  color="white"
                  borderRadius="16px"
                  p={2}
                  sx={{ maxWidth: "100%", wordWrap: "break-word" }}
                >
                  {msg.role === "model" && index === messages.length - 1
                    ? displayText
                    : msg.text}
                </Box>
              </Box>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label="Messages"
              fullWidth
              onChange={(e) => setInput(e.target.value)}
              value={input}
              disabled={isSending}
            />
            <Button
              variant="contained"
              onClick={sendMessage}
              disabled={isSending}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      ) : null}
      <IconButton
        onClick={() => setChatOpen(!chatOpen)}
        sx={{
          color: "white",
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "darkgreen",
          },
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 10,
          borderRadius: "50%",
          border: "2px solid white",
        }}
      >
        <Avatar sx={{ bgcolor: "transparent" }}>
          <ChatIcon />
        </Avatar>
      </IconButton>
    </Box>
  );

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
}
