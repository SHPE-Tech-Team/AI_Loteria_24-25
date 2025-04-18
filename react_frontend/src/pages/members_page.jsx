import React, { useState } from "react";
import Footer from "../components/footer.jsx";
import TitleCard from "../components/title_card.jsx";
import MemberCard from "../components/member_card.jsx";
import "../styles/members_page_style.css";
import { mechanicalTeam, programmingTeam } from "../data/members_data.jsx";

function MembersPage() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const members = isToggled ? mechanicalTeam : programmingTeam;

  return (
    <div>
      <TitleCard
        title="Team Members"
        description="Meet the talented engineers behind SHPE Tech Team's innovative projects. Our diverse team brings together expertise in programming, mechanical engineering, and more."
      />

      <div className="team-section">
        <div className="toggle-container">
          <span className={!isToggled ? 'active-text' : ''}>Programmers</span>
          <button className="toggle-button" onClick={handleToggle}>
            <div className={`toggle-slider ${isToggled ? 'toggled' : ''}`}></div>
          </button>
          <span className={isToggled ? 'active-text' : ''}>Mechanical</span>
        </div>
        <div className="team-section">
          <h2>The Team</h2>
          <div className="team-row">
            {members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MembersPage;
