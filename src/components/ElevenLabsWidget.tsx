
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { Mic, MicOff, Headphones } from 'lucide-react';
import { Button } from './ui/button';

interface ElevenLabsWidgetProps {
  agentId: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ agentId }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (widgetRef.current) {
      // Check if element already exists
      const existingWidget = document.querySelector('elevenlabs-convai');
      
      if (!existingWidget) {
        // Create the element only if it doesn't already exist
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', agentId);
        
        // Clear any existing content
        while (widgetRef.current.firstChild) {
          widgetRef.current.removeChild(widgetRef.current.firstChild);
        }
        
        // Append the new element
        widgetRef.current.appendChild(widgetElement);
      }
    }
    
    return () => {
      // Only remove on unmount if we created it
      if (widgetRef.current && !document.body.contains(widgetRef.current)) {
        const widget = document.querySelector('elevenlabs-convai');
        if (widget) {
          widget.remove();
        }
      }
    };
  }, [agentId]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {!isOpen && (
        <div 
          className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer animate-fade-in hover:scale-105 transition-transform"
          onClick={toggleWidget}
        >
          <span className="text-sm font-medium mr-1">Ask Kahu AI</span>
          <Headphones className="h-5 w-5 text-primary" />
          <Mic className="h-5 w-5 text-primary animate-pulse" />
          <div className="relative">
            <Logo size="sm" />
          </div>
        </div>
      )}

      <div className="relative">
        {isOpen && (
          <Button
            variant="outline"
            size="sm"
            className="absolute -top-10 right-0 bg-white dark:bg-gray-800 z-10 shadow-md animate-fade-in"
            onClick={toggleWidget}
          >
            <MicOff className="h-4 w-4 mr-1" /> Close Voice Assistant
          </Button>
        )}
        <div ref={widgetRef} className={isOpen ? "" : "opacity-0 pointer-events-none"} />
      </div>
    </div>
  );
};

export default ElevenLabsWidget;
