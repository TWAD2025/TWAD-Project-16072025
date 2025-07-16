import React, { useState } from 'react';
import './Service.css';

const Service = () => {
  const [formData, setFormData] = useState({
    serviceCode: '',
    serviceName: '',
    moduleName: '',
    effectFromDate: '',
    serviceChannel: '',
    smsNotification: '',
    emailNotification: '',
    whatsappNotification: '',
    workflowRequired: ''
  });

  const handleReset = () => {
    setFormData({
      serviceCode: '',
      serviceName: '',
      moduleName: '',
      effectFromDate: '',
      serviceChannel: '',
      smsNotification: '',
      emailNotification: '',
      whatsappNotification: '',
      workflowRequired: ''
    });
  };

  return (
    <div className="role-module-container">
      {/* Header */}
      <div className="header-with-padding">
        <div className="inner-header">Service</div>
      </div>

      {/* Service Top Form */}
      <div className="form-top-row">
        <div className="form-group">
          <label>Service Code<span className="required">*</span></label>
          <input
            type="text"
            value={formData.serviceCode}
            placeholder="--- Enter Value ---"
            onChange={(e) =>
              setFormData({ ...formData, serviceCode: e.target.value.replace(/\D/g, '') })
            }
          />
        </div>
        <div className="form-group">
          <label>Service Name<span className="required">*</span></label>
          <input
            type="text"
            value={formData.serviceName}
            placeholder="--- Enter Value ---"
            onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Module Name<span className="required">*</span></label>
          <select
            value={formData.moduleName}
            onChange={(e) => setFormData({ ...formData, moduleName: e.target.value })}
          >
            <option>--- Select Value ---</option>
            <option>TWAD - WS 001</option>
            <option>TWAD - SEWER 002</option>
          </select>
        </div>
        <div className="form-group">
          <label>Effect From date<span className="required">*</span></label>
          <input
            type="date"
            value={formData.effectFromDate}
            onChange={(e) => setFormData({ ...formData, effectFromDate: e.target.value })}
          />
        </div>
      </div>

      {/* Table-Style Input Row */}
      <div className="table-container">
        <table className="role-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Service Channel</th>
              <th>Is SMS Notification Required</th>
              <th>IS Email Notification Required</th>
              <th>Is WhatsApp Notification Required</th>
              <th>Workflow Required?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <select
                  value={formData.serviceChannel}
                  onChange={(e) => setFormData({ ...formData, serviceChannel: e.target.value })}
                >
                  <option>--- Select Value ---</option>
                  <option>TWAD - WS</option>
                  <option>TWAD - SW</option>
                </select>
              </td>
              <td>
                <select
                  value={formData.smsNotification}
                  onChange={(e) => setFormData({ ...formData, smsNotification: e.target.value })}
                >
                  <option>--- Select Value ---</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </td>
              <td>
                <select
                  value={formData.emailNotification}
                  onChange={(e) => setFormData({ ...formData, emailNotification: e.target.value })}
                >
                  <option>--- Select Value ---</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </td>
              <td>
                <select
                  value={formData.whatsappNotification}
                  onChange={(e) => setFormData({ ...formData, whatsappNotification: e.target.value })}
                >
                  <option>--- Select Value ---</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </td>
              <td>
                <select
                  value={formData.workflowRequired}
                  onChange={(e) => setFormData({ ...formData, workflowRequired: e.target.value })}
                >
                  <option>--- Select Value ---</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </td>
              <td>
                <div className="icon-bar">
                  <span role="img" aria-label="edit">✏️</span>
                  <span role="img" aria-label="delete">🗑️</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button Row */}
      <div className="button-row_1">
        <button className="btn-back" onClick={handleReset}>Back</button>
        <button className="btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default Service;
