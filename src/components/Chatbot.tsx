import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Bot, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  sender: "bot" | "user";
}

type ConversationState = 
  | "greeting"
  | "exploring_services" 
  | "collecting_name"
  | "collecting_email"
  | "collecting_phone"
  | "collecting_business"
  | "confirming"
  | "completed";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [state, setState] = useState<ConversationState>("greeting");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: ""
  });
  const [showGreeting, setShowGreeting] = useState(false);
  const [botPosition, setBotPosition] = useState({ top: 20, opacity: 0 });
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
      // Animate bot walking down
      let position = 20;
      const interval = setInterval(() => {
        position += 3;
        setBotPosition({ top: position, opacity: 1 });
        if (position >= window.innerHeight - 200) {
          clearInterval(interval);
          setTimeout(() => setShowGreeting(false), 2000);
        }
      }, 20);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    "Digital Marketing",
    "SEO & Analytics",
    "Brand Design",
    "Business Strategy",
    "Content Creation",
    "Social Media Management",
    "Graphic Design",
    "Website Design (Static)",
    "Website Design (Dynamic)",
    "AI Services",
    "Chatbot Development"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi there! 👋 I'm , your virtual assistant. I'm here to help you explore our services and connect you with the perfect solution for your business. What brings you here today?");
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { text, sender: "bot" }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { text, sender: "user" }]);
  };

  const handleOffTopicResponse = (input: string) => {
    const lower = input.toLowerCase();
    
    if (lower.includes("joke") || lower.includes("funny")) {
      return "Haha, sure 😄 Why did the marketer bring a ladder to work? To reach the next level! Speaking of growth — would you like to learn about our Digital Marketing service?";
    }
    
    if (lower.includes("real") || lower.includes("bot") || lower.includes("human")) {
      return "I'm BrandBot, your virtual assistant! I'm here to help you explore our services like Digital Marketing, Branding, Design, and AI Solutions. What can I help you with today?";
    }
    
    if (lower.includes("laptop") || lower.includes("fix") || lower.includes("repair")) {
      return "I'm afraid not 😅 — but we can definitely help you grow your business online with digital and design solutions. Want to hear more?";
    }
    
    if (lower.includes("weather") || lower.includes("time") || lower.includes("date")) {
      return "I'm focused on helping with business services! Would you like to explore how we can help with Digital Marketing, SEO, Brand Design, or any of our other services?";
    }

    return null;
  };

  const detectServiceInterest = (input: string) => {
    const lower = input.toLowerCase();
    for (const service of services) {
      if (lower.includes(service.toLowerCase()) || 
          (service.includes("Marketing") && (lower.includes("marketing") || lower.includes("ads"))) ||
          (service.includes("SEO") && lower.includes("seo")) ||
          (service.includes("Design") && lower.includes("design")) ||
          (service.includes("Website") && (lower.includes("website") || lower.includes("web"))) ||
          (service.includes("AI") && lower.includes("ai")) ||
          (service.includes("Chatbot") && lower.includes("chatbot"))) {
        return service;
      }
    }
    return null;
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const input = userInput.trim();
    addUserMessage(input);
    setUserInput("");

    // Check for off-topic input
    const offTopicResponse = handleOffTopicResponse(input);
    if (offTopicResponse && state === "greeting") {
      setTimeout(() => addBotMessage(offTopicResponse), 600);
      return;
    }

    // Detect service interest
    const detectedService = detectServiceInterest(input);
    if (detectedService && state === "greeting") {
      setUserData(prev => ({ ...prev, service: detectedService }));
      setTimeout(() => {
        addBotMessage(`Great choice! ${detectedService} is an excellent service for growing your business. To get started, may I have your name, please? 😊`);
        setState("collecting_name");
      }, 600);
      return;
    }

    // State machine for conversation flow
    switch (state) {
      case "greeting":
        setTimeout(() => {
          addBotMessage("That sounds interesting! We offer a wide range of services including Digital Marketing, SEO & Analytics, Brand Design, Website Development, AI Services, and more. Which area interests you most?");
        }, 600);
        break;

      case "collecting_name":
        setUserData(prev => ({ ...prev, name: input }));
        setTimeout(() => {
          addBotMessage(`Nice to meet you, ${input}! 🎉 Could you please share your email address so we can send you a proposal?`);
          setState("collecting_email");
        }, 600);
        break;

      case "collecting_email":
        if (!input.includes("@") || !input.includes(".")) {
          setTimeout(() => {
            addBotMessage("Hmm, that doesn't look like a valid email address. Could you please provide a valid email? 📧");
          }, 600);
          return;
        }
        setUserData(prev => ({ ...prev, email: input }));
        setTimeout(() => {
          addBotMessage("Got it 👍 Could I have your phone number to confirm your booking?");
          setState("collecting_phone");
        }, 600);
        break;

      case "collecting_phone":
        if (input.length < 10) {
          setTimeout(() => {
            addBotMessage("Please provide a valid phone number with at least 10 digits. 📱");
          }, 600);
          return;
        }
        setUserData(prev => ({ ...prev, phone: input }));
        setTimeout(() => {
          addBotMessage("Perfect! Would you like to tell me a bit about your business or project goals? (Or type 'skip' if you'd prefer not to)");
          setState("collecting_business");
        }, 600);
        break;

      case "collecting_business":
        if (input.toLowerCase() !== "skip") {
          setUserData(prev => ({ ...prev, business: input }));
        }
        setTimeout(() => {
          sendConfirmation();
        }, 600);
        break;

      default:
        setTimeout(() => {
          addBotMessage("I'm here to help with business and creative services. If you'd like to discuss your project, I'd be happy to continue! 😊");
        }, 600);
    }
  };

  const sendConfirmation = () => {
    const phoneNumber = "+917382592333";
    const email = "naveenksarill@gmail.com";

    addBotMessage(`Perfect! Here's what I have:\n\n📝 Name: ${userData.name}\n📧 Email: ${userData.email}\n📱 Phone: ${userData.phone}${userData.business ? `\n💼 Business: ${userData.business}` : ""}\n🎯 Service: ${userData.service}\n\nThank you! Here's how you can book a free consultation 👇`);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "booking-options",
        sender: "bot"
      }]);

      // Send email with collected information
      const subject = `New Service Inquiry - ${userData.service}`;
      const body = `
New inquiry from BrandBot:

Name: ${userData.name}
Email: ${userData.email}
Phone: ${userData.phone}
${userData.business ? `Business/Project: ${userData.business}` : ""}
Service Interested: ${userData.service}

This inquiry was submitted through the website chatbot.
      `;
      
      window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');

      toast({
        title: "Information Sent!",
        description: "Your details have been submitted. We'll be in touch soon!",
      });

      setState("completed");
    }, 1000);
  };

  const handleServiceSelect = (service: string) => {
    setUserData({ ...userData, service });
    addUserMessage(service);
    setTimeout(() => {
      addBotMessage(`Excellent! ${service} is a great choice. To help you better, may I have your name, please? 😊`);
      setState("collecting_name");
    }, 600);
  };

  const resetChat = () => {
    setMessages([]);
    setState("greeting");
    setUserData({ name: "", email: "", phone: "", business: "", service: "" });
  };

  return (
    <>
      {/* Walking Robot Greeting */}
      {showGreeting && (
        <div
          className="fixed right-6 z-50 transition-all duration-300 animate-bounce"
          style={{ 
            top: `${botPosition.top}px`,
            opacity: botPosition.opacity,
          }}
        >
          {/* <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl animate-pulse opacity-50" />
            <div className="relative bg-gradient-to-r from-primary to-secondary p-4 rounded-full shadow-2xl">
              <Bot className="h-12 w-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-fade-in">
              Hi! 👋 Need help?
              <div className="absolute bottom-0 right-4 translate-y-full w-0 h-0 border-8 border-transparent border-t-foreground" />
            </div>
          </div> */}
        </div>
      )}

      {/* Chatbot Button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) resetChat();
        }}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 bg-gradient-to-r from-primary to-secondary border-2 border-primary/20"
        variant="default"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6 animate-pulse" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl z-50 animate-scale-in border-2 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <CardTitle className="flex items-center gap-2 relative z-10">
              <Bot className="h-5 w-5 animate-pulse" />
              BrandBot Assistant
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 relative z-10">
              Let's find the perfect service for you!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            {/* Messages */}
            <div className="h-96 overflow-y-auto mb-4 space-y-3 scrollbar-thin">
              {messages.map((msg, index) => {
                if (msg.text === "booking-options") {
                  return (
                    <div key={index} className="flex flex-col gap-2 animate-fade-in">
                      <Button
                        variant="default"
                        className="justify-center gap-2"
                        onClick={() => window.open(`https://wa.me/917382592333?text=Hi, I'm ${userData.name}. I'm interested in ${userData.service}`, '_blank')}
                      >
                        👉 Book via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="justify-center gap-2"
                        onClick={() => window.open(`mailto:naveenksarill@gmail.com?subject=Booking: ${userData.service}&body=Name: ${userData.name}%0AEmail: ${userData.email}%0APhone: ${userData.phone}`, '_blank')}
                      >
                        ✉️ Book via Email
                      </Button>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Service Options */}
              {state === "greeting" && messages.length > 0 && (
                <div className="flex flex-col gap-2 animate-fade-in mt-4">
                  <p className="text-sm font-semibold text-center mb-2">Our Services:</p>
                  {services.map((service, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="justify-start hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => handleServiceSelect(service)}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {state !== "completed" && (
              <div className="flex gap-2">
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};
