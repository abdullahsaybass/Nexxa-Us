import React from "react";
import { useParams, Link } from "react-router-dom";
import "./UsedPart.css";
import SearchBar from "../Home/SearchBar";
import interior from "../../assets/volkswagan.jpg";
import partsData from "../../assets/partsData";

const UsedPart = () => {
  const { partName } = useParams();
  const part = partsData.find((p) => p.URL.split("/").pop() === partName);

  if (!part) {
    return (
      <div className="not-found">
        <h2>Part Not Found</h2>
        <p>Sorry, we couldn’t find details for this vehicle part.</p>
      </div>
    );
  }

  // ✅ Collect all content fields dynamically (content1, content2, content3, etc.)
  const allContents = Object.keys(part)
    .filter((key) => key.startsWith("content") && part[key])
    .map((key) => part[key]);

  // ✅ Use either Models or models (handles both naming styles)
  const totalModels = part.Models || part.models || [];

  // ✅ Split models evenly into 3 sidebar groups
  const modelsPerGroup = Math.ceil(totalModels.length / 3);
  const sidebarGroups = [
    totalModels.slice(0, modelsPerGroup),
    totalModels.slice(modelsPerGroup, modelsPerGroup * 2),
    totalModels.slice(modelsPerGroup * 2),
  ];

  return (
    <div>
      <SearchBar />

      <div className="user-parts">
        {/* === SECTION 1: Top description === */}
        <div className="user-content">
          <h1>{part.name}</h1>
          {allContents.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        {/* === SECTION 2 + SECTION 3 side by side === */}
        <div className="flex-sections">
          {/* === LEFT SIDE (image + lower content) === */}
          <div className="user-contents">
            <div className="user-image">
              <img src={part.img} alt={part.name} />
            </div>
            <div className="user-lower-content">
              {part.content3 && <p>{part.content3}</p>}
            </div>
          </div>

          {/* === RIGHT SIDE (sidebar models) === */}
          <div className="sidebar-section">
            {sidebarGroups.map(
              (group, index) =>
                group.length > 0 && (
                  <div
                    key={index}
                    className="sidebar"
                    style={{ backgroundImage: `url(${interior})` }}
                  >
                    <div className="overlay">
                      <h3>
                        {part.name} Models {index + 1}
                      </h3>
                      <ul>
                        {group.map((model, i) => (
                          <li key={i}>
                            <Link to="/request-a-parts">{model}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedPart;
