import React, { useState } from 'react';

export default function SettingsPage({ settings, onSave }) {
  const [localSettings, setLocalSettings] = useState({ ...settings });
  const [savedStatus, setSavedStatus] = useState(false);

  const handleKeyChange = (provider, val) => {
    setLocalSettings(prev => ({
      ...prev,
      apiKeys: {
        ...prev.apiKeys,
        [provider]: val
      }
    }));
  };

  const handleJiraChange = (field, val) => {
    setLocalSettings(prev => ({
      ...prev,
      jira: {
        ...prev.jira,
        [field]: val
      }
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(localSettings);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

  return (
    <div className="settings-page">
      <div className="panel-header">
        <div>
          <p className="flow-label">System Preferences</p>
          <h2>Configuration & Keys</h2>
          <p className="flow-summary">Configure and persist API keys and connection parameters. All data remains local in your browser.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="settings-form">
        {savedStatus && (
          <div className="alert alert-success">
            ✨ Settings successfully persisted!
          </div>
        )}

        <div className="panel-grid">
          <div className="panel-card">
            <h3>🤖 LLM Provider Keys</h3>
            <p className="card-desc">Set API keys for the dynamic models requested by the workflows.</p>
            
            <div className="form-group">
              <label>Groq API Key</label>
              <input
                type="password"
                value={localSettings.apiKeys.groq || ''}
                onChange={(e) => handleKeyChange('groq', e.target.value)}
                placeholder="gsk_..."
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>OpenRouter Key</label>
              <input
                type="password"
                value={localSettings.apiKeys.openrouter || ''}
                onChange={(e) => handleKeyChange('openrouter', e.target.value)}
                placeholder="sk-or-v1-..."
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Mistral API Key</label>
              <input
                type="password"
                value={localSettings.apiKeys.mistral || ''}
                onChange={(e) => handleKeyChange('mistral', e.target.value)}
                placeholder="Mistral key"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Gemini API Key</label>
              <input
                type="password"
                value={localSettings.apiKeys.gemini || ''}
                onChange={(e) => handleKeyChange('gemini', e.target.value)}
                placeholder="AIzaSy..."
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>OpenAI API Key</label>
              <input
                type="password"
                value={localSettings.apiKeys.openai || ''}
                onChange={(e) => handleKeyChange('openai', e.target.value)}
                placeholder="sk-proj-..."
                className="form-control"
              />
            </div>
          </div>

          <div className="panel-card">
            <h3>🎫 Jira Configuration</h3>
            <p className="card-desc">Configure connection parameters for workflows querying issue tracker endpoints.</p>

            <div className="form-group">
              <label>Base URL</label>
              <input
                type="url"
                value={localSettings.jira.baseUrl || ''}
                onChange={(e) => handleJiraChange('baseUrl', e.target.value)}
                placeholder="https://company.atlassian.net"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>API URL / CURL Endpoint</label>
              <input
                type="text"
                value={localSettings.jira.apiUrl || ''}
                onChange={(e) => handleJiraChange('apiUrl', e.target.value)}
                placeholder="/rest/api/3/search/jql"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Default Project Key</label>
              <input
                type="text"
                value={localSettings.jira.projectKey || ''}
                onChange={(e) => handleJiraChange('projectKey', e.target.value)}
                placeholder="PROJ"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Username / Email</label>
              <input
                type="text"
                value={localSettings.jira.username || ''}
                onChange={(e) => handleJiraChange('username', e.target.value)}
                placeholder="user@company.com"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Token / Password</label>
              <input
                type="password"
                value={localSettings.jira.token || ''}
                onChange={(e) => handleJiraChange('token', e.target.value)}
                placeholder="Jira API Token"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-group" style={{ marginTop: '1.5rem' }}>
          <label>LangFlow API Endpoint URL</label>
          <input
            type="url"
            value={localSettings.langflowUrl || ''}
            onChange={(e) => setLocalSettings(prev => ({ ...prev, langflowUrl: e.target.value }))}
            className="form-control"
            placeholder="http://localhost:7860"
          />
        </div>

        <div className="action-row" style={{ marginTop: '2rem' }}>
          <button type="submit" className="primary-button">Save Configuration</button>
        </div>
      </form>
    </div>
  );
}
