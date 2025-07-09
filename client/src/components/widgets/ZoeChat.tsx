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
          className="fixed bg-white rounded-2xl overflow-hidden"
          style={{
            zIndex: 1001,
            width: '340px',
            maxHeight: '85vh',
            bottom: '20px',
            right: '20px',
            borderRadius: '16px',
            boxShadow: '0 0 12px rgba(0,0,0,0.15)'
          }}
        >
          <div className="relative w-full h-full">
            {/* Chat Header */}
            <div 
              className="text-white flex justify-between items-center"
              style={{
                background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                fontWeight: 'bold',
                padding: '16px',
                fontSize: '1rem'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <div className="font-bold">Zoe</div>
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
              src="https://radiant-bot.replit.app/"
              className="w-full border-none"
              style={{ 
                height: 'calc(85vh - 120px)',
                maxHeight: 'calc(85vh - 120px)',
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