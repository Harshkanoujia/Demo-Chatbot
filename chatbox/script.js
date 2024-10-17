//This even whole code can't run properly

window.botpressWebChat = {
    init: function(config) {
        // Initialization code here
        console.log('Initializing chat...');
    },
    mergeConfig: function(config) {
        // Merge configuration code here
        console.log('Merging config...');
    },
    onEvent: function(callback, events) {
        // Event handling code here
        console.log('Event handling...');
    },
    sendPayload: function(payload) {
        // Send payload code here
        console.log('Sending payload...');
    },
    sendEvent: function(event) {
        // Send event code here
        console.log('Sending event...');
    }
};

// Initialize the chat
window.botpressWebChat.init({
    botId: '9a507845-f5f6-4b3c-bcb1-06eb68e3b7d0"',
    hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
    messagingUrl: 'https://messaging.botpress.cloud',
    clientId: '9a507845-f5f6-4b3c-bcb1-06eb68e3b7d0"',
});

// Merge configuration
window.botpressWebChat.mergeConfig({ showTimestamp: false });

// Example actions (should be called after chat initialization)
setTimeout(() => {
    // Show the chat
    window.botpressWebChat.sendEvent({ type: 'show' });

    // Hide the chat
    window.botpressWebChat.sendEvent({ type: 'hide' });

    // Toggle the chat
    window.botpressWebChat.sendEvent({ type: 'toggle' });

    // Toggle the bot info page
    window.botpressWebChat.sendEvent({ type: 'toggleBotInfo' });

    // Create a new conversation
    window.botpressWebChat.sendEvent({ type: 'createConversation' });

    // Load a conversation by ID
    window.botpressWebChat.sendEvent({ type: 'loadConversation', conversationId: '6ffe8622-49fd-4de9-81e5-412ba2296913' });

    // Send a text message
    window.botpressWebChat.sendPayload({ type: 'text', text: 'I am a message sent through code' });

    // Listen for MESSAGE.RECEIVED events
    window.botpressWebChat.onEvent(
        (event) => {
            if (event.type === 'MESSAGE.RECEIVED') {
                console.log('A new message was received!');
            }
        },
        ['MESSAGE.RECEIVED']
    );
}, 2000); // Delayed to ensure chat initialization
