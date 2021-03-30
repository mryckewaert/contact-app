import "./Contact.css";

function Contact() {
  const picture = "https://www.gravatar.com/avatar/34916?d=robohash&s=300";
  const name = "Purple Robot";
  const online = true;

  return (
    <div className="Contact">
      <img src={picture} className="avatar" alt="avatar"></img>
      <h4 className="name">{name}</h4>
      <div className="status">
        <div className={online ? "status-online" : "status-offline"}></div>
        <p className="status-text">{online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}

export default Contact;