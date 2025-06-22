import { ProfileData } from "../../../models/Profile";

interface Props {
  profile: ProfileData;
}

const Template4 : React.FC<Props> = ({ profile }) => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <div style={{
      backgroundImage: 'url(https://source.unsplash.com/random/1000x300)',
      height: 200,
      backgroundSize: 'cover',
      position: 'relative',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '10px 20px',
        borderRadius: 8,
      }}>{profile.name}</h1>
    </div>
    <div style={{ padding: 20 }}>
      <img src={profile.avatar} width={100} alt="avatar" style={{ borderRadius: '50%' }} />
      <p style={{ marginTop: 10 }}>{profile.bio}</p>
      <div>
        <a href={profile.facebook} target="_blank" rel="noreferrer" style={{ marginRight: 10 }}>Facebook</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </div>
);
export default Template4;