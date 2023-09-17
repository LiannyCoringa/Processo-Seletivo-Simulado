import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button id="favoritas" onClick={ () => navigate('/favorits') }>Favoritas</button>
    </div>
  )
}

export default NavBar;
