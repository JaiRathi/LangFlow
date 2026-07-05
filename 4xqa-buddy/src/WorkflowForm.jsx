import React from 'react';

export default function WorkflowForm({
  activeNode,
  nodeValues,
  onValueChange,
  jiraSettings
}) {
  if (!activeNode) {
    return (
      <div className="empty-node-form">
        <p>Select any node from the interactive map to view and configure its parameters.</p>
      </div>
    );
  }

  const node = activeNode.data?.node || {};
  const displayName = node.display_name || activeNode.data?.display_name || activeNode.id;
  const template = node.template || {};

  const handleFieldChange = (fieldName, value) => {
    onValueChange(activeNode.id, fieldName, value);
  };

  // Render correct component based on input type
  const renderFieldInput = (fieldName, field) => {
    const value = nodeValues[activeNode.id]?.[fieldName] !== undefined
      ? nodeValues[activeNode.id]?.[fieldName]
      : field.value;

    const inputType = field._input_type || '';
    const type = field.type || '';

    // Auto load Jira configurations if needed
    let placeholder = field.placeholder || '';
    if (fieldName.includes('url') || fieldName.includes('jira')) {
      if (jiraSettings?.baseUrl && !value) {
        placeholder = `e.g. ${jiraSettings.baseUrl}`;
      }
    }

    if (inputType === 'SecretStrInput' || field.password === true) {
      return (
        <input
          type="password"
          className="form-control"
          value={value || ''}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          placeholder="API Key / Secret Token"
        />
      );
    }

    if (inputType === 'DropdownInput' || Array.isArray(field.options) && field.options.length > 0) {
      const options = field.options || [];
      return (
        <select
          className="form-control"
          value={value || ''}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      );
    }

    if (inputType === 'BoolInput' || type === 'bool') {
      return (
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => handleFieldChange(fieldName, e.target.checked)}
          />
          <span className="slider"></span>
        </label>
      );
    }

    if (inputType === 'FileInput' || type === 'file') {
      return (
        <div className="file-uploader">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                // Read file as base64 or pass name for visualization mock
                handleFieldChange(fieldName, file.name);
              }
            }}
          />
          <div className="file-uploader-text">
            {value ? `Selected file: ${value}` : 'Drag and drop or click to upload file'}
          </div>
        </div>
      );
    }

    if (inputType === 'TableInput' || type === 'table') {
      const rows = Array.isArray(value) ? value : [];
      return (
        <div className="table-input-container">
          <table className="field-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={row.key || ''}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[i] = { ...newRows[i], key: e.target.value };
                        handleFieldChange(fieldName, newRows);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={row.value || ''}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[i] = { ...newRows[i], value: e.target.value };
                        handleFieldChange(fieldName, newRows);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="danger-button-sm"
                      onClick={() => {
                        const newRows = rows.filter((_, idx) => idx !== i);
                        handleFieldChange(fieldName, newRows);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              handleFieldChange(fieldName, [...rows, { key: '', value: '' }]);
            }}
          >
            + Add Table Row
          </button>
        </div>
      );
    }

    // Default to multiline input if specified, or standard input text
    if (inputType === 'MultilineInput' || field.multiline === true) {
      return (
        <textarea
          rows={5}
          className="form-control"
          value={value || ''}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
          placeholder={placeholder}
        />
      );
    }

    return (
      <input
        type="text"
        className="form-control"
        value={value || ''}
        onChange={(e) => handleFieldChange(fieldName, e.target.value)}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div className="node-form-panel">
      <div className="node-form-header">
        <h4>🔧 {displayName} Parameters</h4>
        <p>{node.description || 'Configure parameters for this node'}</p>
      </div>

      <div className="node-fields-list">
        {Object.keys(template).map((fieldName) => {
          const field = template[fieldName];
          if (
            typeof field !== 'object' ||
            field === null ||
            field.advanced === true ||
            field.show === false ||
            fieldName === 'code' ||
            fieldName === '_type'
          ) {
            return null;
          }

          return (
            <div key={fieldName} className="form-group field-item">
              <label className="field-label">
                {field.display_name || fieldName}
                {field.required && <span className="required-star">*</span>}
              </label>
              {field.info && <p className="field-info">{field.info}</p>}
              <div className="field-input-wrapper">
                {renderFieldInput(fieldName, field)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
