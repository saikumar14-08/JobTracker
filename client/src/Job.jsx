import React, { useEffect, useState } from "react";

const Job = () => {
  const [form, setForm] = useState({
    company: "cmp",
    title: "tlt",
    location: "lcn",
    status: "sts",
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { ...form, id: Date.now() };
    setJobs([...jobs, newJob]);
    console.log("Clicked Submit", jobs);
    setForm({ company: "", title: "", location: "", status: "" });
  };

  const handleDelete = (jid) => {
    /**
     * logic to filter out the id and update the state variable
     */
    console.log(jid);
    const updatedJobs = jobs.filter((job) => job.id != jid);
    setJobs(updatedJobs);
  }

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Company </label> <br />
        <input
          name="company"
          type="text"
          placeholder="Enter company name"
          onChange={handleChange}
          value={form.company}
          required
        />
        <br />
        <br />
        <label> Title </label>
        <br />
        <input
          name="title"
          type="text"
          placeholder="Enter job title"
          onChange={handleChange}
          value={form.title}
          required
        />
        <br />
        <br />
        <label> Location</label>
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter company location"
          onChange={handleChange}
          value={form.location}
          required
        />
        <br />
        <br />
        <label> Status</label>
        <br />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Status</option>
          <option>Viewed</option>
          <option>Applied</option>
          <option>Selected</option>
          <option>Rejected</option>
          required
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>

      <h1>Jobs list</h1>
      <div>
        {jobs.map((job) => (
          <div key={job.id}>
            <span>{job.company}</span>&nbsp;
            <span>{job.location}</span>&nbsp;
            <span>{job.status}</span>&nbsp;
            <span>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
