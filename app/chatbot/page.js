"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { firestore } from "../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  const greetingMessage = `
Hey there! I'm Adam, your plant growing expert. 😊 What can I help you with today? 🌱 
Indoor, outdoor, or backyard garden - I'm here to guide you! Let's get growing!
`;

  const [messages, setMessages] = useState([
    { role: "model", parts: [{ text: greetingMessage }] },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false); // State to handle chat visibility

  const messagesEndRef = useRef(null);

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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (session.status === "authenticated") {
        const userRef = doc(firestore, "users", session.data.user.email);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          console.log("In the fetch" + userDoc.data().message);
          setMessages(userDoc.data().message);
        } else {
          // If the document does not exist, create it
          await setDoc(userRef, {
            message: [{ role: "model", parts: [{ text: greetingMessage }] }],
          });
          setCurrentMessage(greetingMessage);
          typeText(greetingMessage);
        }
      }
    };

    fetchMessages();
  }, [session]);

  const sendMessage = async () => {
    const newMessage = { role: "user", parts: [{ text: input }] };
    const updatedMessages = [...messages, newMessage];
    console.log("The updated messages in send" + updatedMessages);
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
            //parts: [{ text: msg.text }],
            parts: msg.parts,
          })),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        //const botMessage = { role: "model", text: data.text };
        const botMessage = { role: "model", parts: [{ text: data.text }] };
        updatedMessages.push(botMessage);
        setMessages(updatedMessages);
        setCurrentMessage(data.text);
        //---------------------------------------------------------------------
        if (session.status === "authenticated") {
          const userRef = doc(firestore, "users", session.data.user.email);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            // If the document exists, update it
            await updateDoc(userRef, {
              //messages: arrayUnion(newMessage),
              message: arrayUnion(newMessage, botMessage),
            });
          } else {
            // If the document does not exist, create it
            await setDoc(userRef, {
              // messages: [greetingMessage, newMessage], // Store initial greeting and new message
              message: updatedMessages,
            });
          }
        }
        //----------------------------------------------------------------------
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
    <>
      <Navbar />
      <Box
        width="100%"
        height="85vh"
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
            <Stack
              direction={"column"}
              spacing={2}
              flexGrow={1}
              mb={2}
              sx={{ overflow: "auto" }}
            >
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
                    bgcolor={msg.role === "model" ? "green" : "#CFAF86ff"}
                    color="white"
                    borderRadius="16px"
                    p={2}
                    sx={{ maxWidth: "100%", wordWrap: "break-word" }}
                  >
                    <Typography>
                      {/* {msg.role === "model" && index === messages.length - 1 */}
                      {msg.role === "model" && index === messages.length
                        ? displayText
                        : //{/* : msg.text} */}
                          msg.parts[0].text}
                    </Typography>
                  </Box>
                </Box>
              ))}
              {/* This element will be used as the target to scroll into view */}
              <div ref={messagesEndRef} />
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
        ) : (
          <Stack
            direction={"column"}
            width="45%" // Fixed width
            height="40%" // Fixed height
            p={2}
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
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              color="white"
              sx={{ fontSize: "2rem" }}
            >
              Ready to start growing your own vegetables? Click the chat icon in
              the bottom right to get started!
            </Box>
          </Stack>
        )}
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
      <Footer />
    </>
  );
}
Home.requireAuth = true;
