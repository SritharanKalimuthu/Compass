"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function AddLink() {
  const SocialPlatform = [
    { name: "Facebook", icon: faFacebook, regex: /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9_.-]+$/ },
    { name: "Instagram", icon: faInstagram, regex: /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9_.-]+$/ },
    { name: "XTwitter", icon: faXTwitter, regex: /^(https?:\/\/)?(www\.)?twitter\.com\/[A-Za-z0-9_.-]+$/ },
    { name: "Youtube", icon: faYoutube, regex: /^(https?:\/\/)?(www\.)?youtube\.com\/(user|channel)\/[A-Za-z0-9_-]+$/ },
    { name: "LinkedIn", icon: faLinkedin, regex: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/ },
    { name: "Shop", icon: faShop, regex: /^(https?:\/\/)?(www\.)?[A-Za-z0-9_.-]+\.[A-Za-z]{2,}\/?$/ }, // Generic shop/store link
    { name: "Others", icon: faGlobe, regex: /^(https?:\/\/)?(www\.)?[A-Za-z0-9_.-]+\.[A-Za-z]{2,}\/?$/ }, // Generic link for other platforms
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(SocialPlatform[0]);
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePlatformChange = (e) => {
    const platform = SocialPlatform.find(p => p.name === e.target.value);
    setSelectedPlatform(platform);
    setLink("");
    setIsValid(true); // Reset validity on platform change
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    // Validate the link with the selected platform's regex
    if (selectedPlatform.regex.test(e.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log(`Platform: ${selectedPlatform.name}, Link: ${link}`);
    } else {
      console.error("Invalid link.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Links</h1>

      <label htmlFor="platform" className="block text-lg mb-2">
        Social Media
      </label>
      <select
        name="platform"
        id="platform"
        value={selectedPlatform.name}
        onChange={handlePlatformChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        {SocialPlatform.map((platform, i) => (
          <option key={i} value={platform.name}>
            {platform.name}
          </option>
        ))}
      </select>

      {selectedPlatform.icon && (
        <div className="mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={selectedPlatform.icon} size="2x" />
          <span className="text-lg font-semibold">{selectedPlatform.name}</span>
        </div>
      )}

      <label htmlFor="platformlink" className="block text-lg mb-2">
        Link
      </label>
      <input
        type="text"
        name="link"
        placeholder={`Enter Your ${selectedPlatform.name} Profile Link`}
        id="platformlink"
        value={link}
        onChange={handleLinkChange}
        className={`w-full p-2 mb-4 border rounded ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
      />
      {!isValid && (
        <p className="text-red-500 mb-4">Invalid {selectedPlatform.name} link. Please enter a valid URL.</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={!isValid}
      >
        Add Link
      </button>
    </form>
  );
}

export default AddLink;
