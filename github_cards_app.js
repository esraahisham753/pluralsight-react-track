
const Card = (props) => {
  const profile = props;
  
  return (
      <div className='github-profile' style={{margin: '1rem'}}>
        <img src={profile.avatar_url} />
        <div className='info' style={{display: 'inline-block', marginLeft: 10}}>
          <div className='name' style={{fontSize: '125%'}}>{profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    );
}



const Form = (props) => {
  const [userName, setUserName] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`)
    props.onSubmit(resp.data);
    setUserName('');
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userName}
          onChange={event => setUserName(event.target.value)}
          placeholder="Add GitHub user"
          required
          />
        <button type="submit">Add Card</button>
      </form>
    );
}



const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
};

const App = (props) => {
  const [profiles, setProfiles] = useState([]);
  
  const addProfile = (profileData) => {
      setProfiles([...profiles, profileData]);
  }
  
  return (
      <div>
        <div className="header">{props.title}</div>
        <Form onSubmit={addProfile} />
        <CardList profiles={profiles} />
      </div>
  );
}


ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);

