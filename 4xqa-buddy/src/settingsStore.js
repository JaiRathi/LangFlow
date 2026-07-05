// Reactive store for local settings persistence
const SETTINGS_KEY = 'buddy_flow_settings';

const defaultSettings = {
  apiKeys: {
    openai: '',
    groq: '',
    gemini: '',
    mistral: '',
    openrouter: '',
    ollama: ''
  },
  jira: {
    baseUrl: '',
    apiUrl: '',
    projectKey: '',
    username: '',
    token: ''
  },
  langflowUrl: 'http://localhost:7860'
};

export const getSettings = () => {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? { ...defaultSettings, ...JSON.parse(data) } : defaultSettings;
  } catch (e) {
    return defaultSettings;
  }
};

export const saveSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch (e) {
    console.error('Failed to save settings to localStorage:', e);
    return false;
  }
};
