export function ProfileCard(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.image} alt="" />
      </div>
      <div className="cardContent">
        <div className="cardName">
          {props.firstName} {props.lastName}
        </div>
        <div className="cardRole">{props.role}</div>
        <div className="cardBio">{props.bio}</div>
      </div>
    </div>
  );
}
