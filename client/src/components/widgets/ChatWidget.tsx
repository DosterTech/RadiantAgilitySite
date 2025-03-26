import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  sender: 'user' | 'bot';
  message: string;
  timestamp?: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !sessionId) {
      initChat();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = async () => {
    setIsLoading(true);
    try {
      const response = await apiRequest('POST', '/api/chat/session', {});
      const data = await response.json();
      
      if (data.success && data.sessionId) {
        setSessionId(data.sessionId);
        
        // Get existing messages for this session
        const messagesResponse = await apiRequest('GET', `/api/chat/messages/${data.sessionId}`, null);
        const messagesData = await messagesResponse.json();
        
        if (messagesData.success && messagesData.data) {
          setMessages(messagesData.data.map((msg: any) => ({
            sender: msg.sender,
            message: msg.message,
            timestamp: new Date(msg.createdAt)
          })));
        }
      }
    } catch (error) {
      console.error('Error initializing chat:', error);
      // Add a fallback welcome message if the API fails
      setMessages([{
        sender: 'bot',
        message: 'Hello! How can we help you today?',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || !sessionId) return;
    
    // Add user message to UI immediately
    const userMessage: ChatMessage = {
      sender: 'user',
      message: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await apiRequest('POST', '/api/chat/messages', {
        message: input,
        sessionId
      });
      
      const data = await response.json();
      
      if (data.success && data.data) {
        const botMessage: ChatMessage = {
          sender: 'bot',
          message: data.data.message,
          timestamp: new Date(data.data.createdAt)
        };
        
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add fallback bot response if API fails
      const fallbackMessage: ChatMessage = {
        sender: 'bot',
        message: "I'm sorry, there was an error processing your request. Please try again later.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-80 overflow-hidden shadow-xl">
              <CardHeader className="gradient-bg text-white p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Chat with us</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200 hover:bg-transparent"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto bg-gray-50 p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                      {msg.sender === 'bot' && (
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs mr-2">
                          RA
                        </div>
                      )}
                      <div 
                        className={`rounded-lg p-3 max-w-[80%] ${
                          msg.sender === 'user' 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs mr-2">
                        RA
                      </div>
                      <div className="bg-gray-200 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              <CardFooter className="p-4 border-t">
                <form onSubmit={sendMessage} className="flex w-full">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 focus-visible:ring-primary-600"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    className="ml-2 gradient-bg"
                    disabled={isLoading || !input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={() => setIsOpen(!isOpen)} 
          className="gradient-bg text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ChatWidget;
