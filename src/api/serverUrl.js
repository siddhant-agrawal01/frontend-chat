const ServerUrl = {
  BASE_URL: "http://127.0.0.1:8000/",
  WS_BASE_URL: "ws://127.0.0.1:8000/",
  
  API: {
    USERS: "api/v1/users/",
    SIGNUP: "api/v1/signup/",
    USER_CHATS: (userId) => `api/v1/users/${userId}/chats/`,
    CHAT_MESSAGES: (chatId) => `api/v1/chats/${chatId}/messages/`,
  },

  WS: {
    USER_CHAT: (userId) => `ws/users/${userId}/chat/`,
  },

  MEDIA: {
    USER: "media/user/",
  }
};

export default ServerUrl;