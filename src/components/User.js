import React from 'react';
import GitHubLogo from '../assets/githublogo.png';

const User = ({ name, batch, major, github, favLang, city, oraginzation }) => {
    const githubUsername = github ? "https://github.com/" + github : "";
    return (
        <div className="user">
            <div className="user__details">
                <h1>{name}</h1>
                <p><strong>{major}</strong></p>
                <p>Batch: {batch}</p>
                <p>Oraginzation: {oraginzation}</p>
                <p>Favorite Language: {favLang}</p>
                <p>City: {city}</p>
            </div>
            <div>
                <a href={githubUsername} target="_blank" rel="noreferrer">
                    <img src={GitHubLogo} alt="" />
                </a>
            </div>
        </div>
    )
}

export default User;