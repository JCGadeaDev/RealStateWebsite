import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Send,
} from 'lucide-react';
// --- ACTUALIZADO: Importamos Button, Input y cn ---
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { cn } from '../../../utils/cn';

const MessageCenter = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  // Datos de ejemplo
  const conversations = [
    {
      id: 1,
      agent: {
        name: 'María González',
        title: 'Senior Real Estate Agent',
        image: 'https://images.unsplash.com/photo-1662104935703-b4e193c3a852',
        imageAlt:
          'Professional woman with dark hair in business attire smiling confidently',
        online: true,
      },
      lastMessage:
        "I've scheduled the property viewing for tomorrow at 3 PM. The seller is flexible with timing if needed.",
      timestamp: '2 min ago',
      unread: 2,
      property: 'Barcelona Penthouse',
    },
    {
      id: 2,
      agent: {
        name: 'Carlos Mendoza',
        title: 'Luxury Property Specialist',
        image: 'https://images.unsplash.com/photo-1714974528889-d51109fb6ae9',
        imageAlt: 'Professional man with beard in dark suit smiling at camera',
        online: false,
      },
      lastMessage:
        'The inspection report is ready. Overall condition is excellent with minor recommendations.',
      timestamp: '1 hour ago',
      unread: 0,
      property: 'Marbella Villa',
    },
    {
      id: 3,
      agent: {
        name: 'Ana Rodríguez',
        title: 'Investment Advisor',
        image: 'https://images.unsplash.com/photo-1684262855358-88f296a2cfc2',
        imageAlt:
          'Professional woman with blonde hair in white blazer smiling warmly',
        online: true,
      },
      lastMessage:
        'I found 3 new investment opportunities that match your criteria. Shall we schedule a call?',
      timestamp: '3 hours ago',
      unread: 1,
      property: 'Investment Portfolio',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'María González',
      content:
        'Hello! I wanted to update you on the Barcelona penthouse. The seller has accepted your offer and we can proceed with the next steps.',
      timestamp: new Date(Date.now() - 3600000),
      isAgent: true,
    },
    {
      id: 2,
      sender: 'You',
      content: "That's fantastic news! What are the next steps we need to take?",
      timestamp: new Date(Date.now() - 3300000),
      isAgent: false,
    },
    {
      id: 3,
      sender: 'María González',
      content:
        "We'll need to schedule a property inspection and finalize the financing details. I can coordinate with your bank for the mortgage approval.",
      timestamp: new Date(Date.now() - 3000000),
      isAgent: true,
    },
    {
      id: 4,
      sender: 'You',
      content:
        'Perfect. I already have pre-approval from Banco Santander. When can we schedule the inspection?',
      timestamp: new Date(Date.now() - 2700000),
      isAgent: false,
    },
    {
      id: 5,
      sender: 'María González',
      content:
        "I've scheduled the property viewing for tomorrow at 3 PM. The seller is flexible with timing if needed.",
      timestamp: new Date(Date.now() - 120000),
      isAgent: true,
    },
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedAgent = conversations?.find(
    (conv) => conv?.id === selectedConversation
  )?.agent;

  return (
    // --- ACTUALIZADO: border-border ---
    <div className="bg-card rounded-lg shadow-luxury h-[600px] flex border border-border">
      {/* Conversations List */}
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="w-1/3 border-r border-border">
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-playfair font-medium text-foreground mb-3">
            Messages
          </h2>
          {/* --- ACTUALIZADO: Usamos Input con icono absoluto --- */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Search conversations..."
              className="w-full pl-10"
              // El componente Input ya tiene los estilos correctos de bg-muted, etc.
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {conversations?.map((conversation) => (
            <button
              key={conversation?.id}
              onClick={() => setSelectedConversation(conversation?.id)}
              className={cn(
                'w-full p-4 text-left hover:bg-muted/50 transition-colors duration-200 border-b border-border',
                selectedConversation === conversation?.id
                  ? 'bg-primary/5 border-l-4 border-l-primary'
                  : ''
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {/* --- ACTUALIZADO: <img> con fallback --- */}
                    <img
                      src={conversation?.agent?.image}
                      alt={conversation?.agent?.imageAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/48x48/EAE6DC/333B44?text=${conversation.agent.name[0]}`;
                      }}
                    />
                  </div>
                  {conversation?.agent?.online && (
                    // --- ACTUALIZADO: bg-success y border-card ---
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-inter font-medium text-foreground truncate">
                      {conversation?.agent?.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        {conversation?.timestamp}
                      </span>
                      {conversation?.unread > 0 && (
                        <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                          {conversation?.unread}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {conversation?.property}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation?.lastMessage}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {/* --- ACTUALIZADO: <img> con fallback --- */}
                  <img
                    src={selectedAgent?.image || ''}
                    alt={selectedAgent?.imageAlt || ''}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/40x40/EAE6DC/333B44?text=?`;
                    }}
                  />
                </div>
                {selectedAgent?.online && (
                  // --- ACTUALIZADO: bg-success y border-card ---
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-card"></div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-inter font-medium text-foreground">
                  {selectedAgent?.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedAgent?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {/* --- ACTUALIZADO: Botones con size="icon" --- */}
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                icon={<Phone size={16} />}
              />
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                icon={<Video size={16} />}
              />
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                icon={<MoreVertical size={16} />}
              />
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages?.map((message) => (
            <div
              key={message?.id}
              className={`flex ${
                message?.isAgent ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={cn(
                  'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
                  message?.isAgent
                    ? 'bg-muted text-foreground'
                    : 'bg-primary text-primary-foreground' // Usamos foreground para consistencia
                )}
              >
                <p className="text-sm">{message?.content}</p>
                <p
                  className={cn(
                    'text-xs mt-1',
                    message?.isAgent
                      ? 'text-muted-foreground'
                      : 'text-primary-foreground/70' // Usamos foreground para consistencia
                  )}
                >
                  {formatTime(message?.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="p-4 border-t border-border">
          <div className="flex items-end space-x-3">
            {/* --- ACTUALIZADO: Botón con size="icon" --- */}
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0"
              icon={<Paperclip size={18} />}
            />
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e?.target?.value)}
                onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              />
            </div>
            {/* --- ACTUALIZADO: Botón con size="icon" --- */}
            <Button
              variant="default"
              size="icon"
              className="flex-shrink-0"
              onClick={handleSendMessage}
              disabled={!newMessage?.trim()}
              icon={<Send size={18} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;