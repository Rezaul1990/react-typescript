import { ProfileData } from "../../../models/Profile";

interface Props {
  profile: ProfileData;
}

const Template3 : React.FC<Props> = ({ profile }) => (
  <div style={{
    maxWidth: 600,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <img src={profile.avatar} alt="avatar" width={100} style={{ borderRadius: '50%' }} />
      <div>
        <h2>{profile.name}</h2>
        <p style={{ color: '#555' }}>{profile.bio}</p>
        <div style={{ marginTop: 10 }}>
          <a href={profile.facebook} target="_blank" rel="noreferrer" style={{ marginRight: 10 }}>Facebook</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </div>
);

export default Template3;