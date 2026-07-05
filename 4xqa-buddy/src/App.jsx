import { useState, useEffect } from 'react';
import { flows as importedFlows } from './flow-data.generated';
import { getSettings, saveSettings } from './settingsStore';
import { parseWorkflowData } from './workflowParser';
import SettingsPage from './SettingsPage';
import FlowGraph from './FlowGraph';
import WorkflowForm from './WorkflowForm';
import ExecutionPanel from './ExecutionPanel';

function App() {
  const [activeTab, setActiveTab] = useState(importedFlows[0]?.id || 'settings');
  const [settings, setSettings] = useState(getSettings());
  const [nodeValues, setNodeValues] = useState({});
  const [activeNode, setActiveNode] = useState(null);

  // Auto reset active node on flow tab switch
  useEffect(() => {
    setActiveNode(null);
  }, [activeTab]);

  const activeFlow = importedFlows.find((flow) => flow.id === activeTab);

  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleValueChange = (nodeId, fieldName, value) => {
    setNodeValues(prev => ({
      ...prev,
      [nodeId]: {
        ...(prev[nodeId] || {}),
        [fieldName]: value
      }
    }));
  };

  const parsedData = activeFlow ? parseWorkflowData(activeFlow) : null;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo-group">
          <span className="logo-icon">🔮</span>
          <div>
            <p className="eyebrow">ANTIGRAVITY AUTOMATION ENGINE</p>
            <h1>4XQA Flow Control Center</h1>
          </div>
        </div>
        <p className="intro">Dynamically generated React forms, topology maps, configuration nodes, and runner interfaces mapped strictly from local n8n JSON exports.</p>
      </header>

      <main>
        <aside className="tabs-panel">
          <div className="tabs-header">
            <p className="tabs-title">Dynamic Workflows</p>
            <p className="tabs-note">Select a workflow to dynamically construct its interface.</p>
          </div>
          <div className="tab-list">
            {importedFlows.map((flow) => (
              <button
                key={flow.id}
                className={`tab-button ${flow.id === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(flow.id)}
              >
                <span className="tab-icon">🔌</span>
                <span className="tab-title-text">{flow.title}</span>
              </button>
            ))}
          </div>

          <div className="tabs-footer">
            <button
              className={`tab-button settings-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="tab-icon">⚙️</span>
              <span className="tab-title-text">System Settings</span>
            </button>
          </div>
        </aside>

        <section className="content-panel">
          {activeTab === 'settings' ? (
            <SettingsPage settings={settings} onSave={handleSaveSettings} />
          ) : activeFlow ? (
            <div className="workflow-view">
              <div className="panel-header">
                <div>
                  <p className="flow-label">Active Dynamic Workflow</p>
                  <h2>{activeFlow.title}</h2>
                  <p className="flow-summary">{activeFlow.description}</p>
                </div>
                <div className="metadata-pills">
                  <span className="pill">Nodes: {parsedData?.nodes?.length || 0}</span>
                  <span className="pill">Edges: {parsedData?.edges?.length || 0}</span>
                  <span className="pill flex-pill">File: {activeFlow.fileName}</span>
                </div>
              </div>

              {/* Render dynamic inputs globally required by the workflow */}
              {parsedData && (parsedData.userInputs.length > 0 || parsedData.fileUploads.length > 0) && (
                <div className="panel-card quick-inputs-card">
                  <h3>🎯 Quick Action Inputs</h3>
                  <p className="card-desc">Provide parameters dynamically required to execute this flow.</p>
                  <div className="quick-inputs-grid">
                    {/* Render standard inputs */}
                    {parsedData.userInputs.map(({ nodeId, nodeName, fieldName, field }) => {
                      // Avoid double rendering password/api_key inside quick inputs
                      if (fieldName === 'api_key' || fieldName === 'token') return null;
                      
                      const val = nodeValues[nodeId]?.[fieldName] !== undefined
                        ? nodeValues[nodeId]?.[fieldName]
                        : field.value;
                      
                      return (
                        <div key={`${nodeId}-${fieldName}`} className="form-group">
                          <label>{nodeName} - {field.display_name || fieldName}</label>
                          <input
                            type="text"
                            className="form-control"
                            value={val || ''}
                            onChange={(e) => handleValueChange(nodeId, fieldName, e.target.value)}
                            placeholder={field.placeholder || ''}
                          />
                        </div>
                      );
                    })}

                    {/* Render dynamic file uploads */}
                    {parsedData.fileUploads.map(({ nodeId, nodeName, fieldName, field }) => {
                      const val = nodeValues[nodeId]?.[fieldName] !== undefined
                        ? nodeValues[nodeId]?.[fieldName]
                        : field.value;
                        
                      return (
                        <div key={`${nodeId}-${fieldName}`} className="form-group">
                          <label>{nodeName} - {field.display_name || fieldName} (Upload)</label>
                          <div className="file-uploader flex-uploader">
                            <input
                              type="file"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) handleValueChange(nodeId, fieldName, file.name);
                              }}
                            />
                            <div className="file-uploader-text">
                              {val ? `Loaded: ${val}` : 'Select Document (PDF, DOCX, APK, IPA)'}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dynamic Interactive Flow Map */}
              {parsedData && (
                <FlowGraph
                  nodes={parsedData.nodes}
                  edges={parsedData.edges}
                  activeNodeId={activeNode?.id}
                  onNodeClick={setActiveNode}
                />
              )}

              {/* Node values form custom configuration */}
              <WorkflowForm
                activeNode={activeNode}
                nodeValues={nodeValues}
                onValueChange={handleValueChange}
                jiraSettings={settings.jira}
              />

              {/* Live execution controls and outputs display */}
              <ExecutionPanel
                flow={activeFlow}
                nodeValues={nodeValues}
                jiraSettings={settings.jira}
                apiKeys={settings.apiKeys}
              />
            </div>
          ) : (
            <div className="empty-panel">
              <p>No active workflow tab selected.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
