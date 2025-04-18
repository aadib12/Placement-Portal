// src/pages/student/UploadResume.jsx
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./UploadResume.css";

const UploadResume = () => {
  const navigate = useNavigate();
  const { jobId } = useParams(); // Correctly getting jobId from the URL params
  const location = useLocation();
  const { company, title } = location.state || {}; // Access passed state
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!resume) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      // Post request to apply for the job and upload the resume
      await axios.post(
        `http://localhost:8000/api/student/apply-job/${jobId}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Application submitted successfully!");
      navigate("/student/StudentDashboard"); // Redirect after success
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to apply for the job.");
    }
  };

  return (
    <div className="upload-container">
      <h2>
        Upload Resume for {title} at {company}
      </h2>

      <input type="file" onChange={handleFileChange} />
      <button className="upload-button" onClick={handleUpload}>
        Upload and Apply
      </button>
    </div>
  );
};

export default UploadResume;
