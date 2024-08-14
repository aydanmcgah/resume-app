export function ProfileName({ name }) {
    return <div className="profile-name">{name}</div>;
  }
  
  export function ProfileLocation({ location }) {
    return <div className="profile-location">{location}</div>;
  }
  
  export function ProfileBio({ bio }) {
    return (
      <div className="profile-bio">
        <p>{bio}</p>
      </div>
    );
  }