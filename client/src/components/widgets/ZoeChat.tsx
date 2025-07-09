import { useState } from 'react';

export default function ZoeChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Zoe Chat Button */}
      <div 
        className="fixed bottom-5 right-5 z-[1000]"
        style={{ zIndex: 1000 }}
      >
        <button
          onClick={toggleChat}
          className="bg-purple-600 hover:bg-purple-700 text-white border-none rounded-full w-15 h-15 text-2xl shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-center"
          style={{
            width: '60px',
            height: '60px',
            fontSize: '28px'
          }}
          aria-label="Open Zoe AI Chat"
        >
          💬
        </button>
      </div>

      {/* Zoe Chat Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-5 w-90 h-96 bg-white rounded-2xl overflow-hidden shadow-xl"
          style={{
            zIndex: 1001,
            width: '360px',
            height: '500px'
          }}
        >
          <div className="relative w-full h-full">
            {/* Chat Header */}
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <div className="font-semibold">Zoe</div>
                  <div className="text-xs opacity-90">AI Course Advisor</div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 text-xl font-bold"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            
            {/* Chat Iframe */}
            <iframe
              src="https://3swla9gpvq5jn.kirk.replit.dev"
              className="w-full border-none"
              style={{ 
                height: 'calc(100% - 64px)',
                border: 'none'
              }}
              title="Zoe AI Chat"
            />
          </div>
        </div>
      )}
    </>
  );
}