import { ProfileData } from "../../../models/Profile";

interface Props {
  profile: ProfileData;
}

const Template1 : React.FC<Props> = ({ profile }) =>  (
  <div style={{ padding: 20 }}>
    <img src={profile.avatar} width={120} alt="avatar" />
    <h1>{profile.name}</h1>
    <p>{profile.bio}</p>
    <p><a href={profile.facebook}>Facebook</a></p>
    <p><a href={profile.github}>GitHub</a></p>
  </div>
);
export default Template1;
