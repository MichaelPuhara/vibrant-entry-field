
import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

interface ElevenLabsWidgetProps {
  agentId: string;
}

const ElevenLabsWidget: React.FC<ElevenLabsWidgetProps> = ({ agentId }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Create the element after the component mounts
      const widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', agentId);
      
      // Clear any existing content
      while (widgetRef.current.firstChild) {
        widgetRef.current.removeChild(widgetRef.current.firstChild);
      }
      
      // Append the new element
      widgetRef.current.appendChild(widgetElement);
    }
    
    return () => {
      // Cleanup on unmount
      if (widgetRef.current) {
        while (widgetRef.current.firstChild) {
          widgetRef.current.removeChild(widgetRef.current.firstChild);
        }
      }
    };
  }, [agentId]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute bottom-0 right-0 cursor-pointer">
          <Logo size="sm" />
        </div>
        <div ref={widgetRef} className="opacity-0"></div>
      </div>
    </div>
  );
};

export default ElevenLabsWidget;
