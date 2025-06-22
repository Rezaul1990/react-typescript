import { ProfileData } from "../../../models/Profile";

interface Props {
  profile: ProfileData;
}
const Template2 : React.FC<Props> = ({ profile }) =>(
  <div style={{ background: '#222', color: '#fff', padding: 20 }}>
    <h2>{profile.name}</h2>
    <p>{profile.bio}</p>
    <img src={profile.avatar} width={100} alt="avatar" />
    <div>
      <a style={{ color: '#0af' }} href={profile.facebook}>Facebook</a> | 
      <a style={{ color: '#0af' }} href={profile.github}>GitHub</a>
    </div>
  </div>
);
export default Template2;
