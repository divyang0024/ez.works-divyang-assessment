import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/bannerform.css";

const BannerForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://test.ezworks.ai/api", {
        email,
      });

      if (response.status === 200) {
        toast.success("Form Submitted Successfully!");
        setEmail("");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 422) {
          toast.error("Emails ending with @ez.works are not allowed.");
        } else {
          toast.error(
            `Error ${err.response.status}: ${
              err.response.data.message || "Something went wrong."
            }`
          );
        }
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="banner-form-container">
      <img
        src="/EZ Works Blue@2x.png"
        className="ez-work-logo"
        alt="ez-work-logo"
      />
      <h1 className="font-bold text-[#112949]">
        A Suite of Business Support Services
      </h1>
      <p className="text-[#112949]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...
      </p>
      <form className="mail-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="mail1-email-field"
          id="mail1"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Submitting..." : "Contact Me"}
        </button>
      </form>
    </div>
  );
};

export default BannerForm;
