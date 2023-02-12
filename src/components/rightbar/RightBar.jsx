import React from "react";
import "./rightBar.scss";
import defaultUser from "../../assets2/default-user.png";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={defaultUser} alt={defaultUser} />
              <div className="online" />
              <span> Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
