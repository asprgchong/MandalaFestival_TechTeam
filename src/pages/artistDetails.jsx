import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

const artistDetails = () => {
    let playlist = 0;
    const location = useLocation()
    const { from } = location.state
    if (from == "Chethan Anant" || from == "Juan Pastor"){
        playlist = 1;
    }

    return (
        <>
            <Navbar/>
            <h3>{from}</h3>
            <div className='artistDetails'>
                    {playlist ? (
                        <Link to="/playlist">Listen to more songs</Link>
                    ) : null}
            </div>
        </>
    )
}

export default artistDetails

{/* <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
    </button>
    <p>
        Edit <code>src/App.jsx</code> and save to test HMR
    </p>
</div>
<p className="read-the-docs">
    Click on the Vite and React logos to learn more
</p> */}