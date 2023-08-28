import React from 'react'
import OutfitsList from './OutfitsList'
import './Home.css'
import outfits from './outfits'

const Home = () => {


    return (
        <div className="Home">
            <div className="images">
               {outfits.map((outfit) => (
                <OutfitsList items={outfit} key={outfit.id} />
               ))}
            </div>
            </div>

    );
}

export default Home;