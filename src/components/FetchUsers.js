import React, { Component } from 'react';
import profiles from '../profiles.json';
import User from './User';

class FetchUser extends Component {
    render() {
        return (
            <div className="profiles">
                {profiles.map((data) => {
                    return (
                        <User
                            key={data.githubUsername}
                            name={data.name}
                            batch={data.batch}
                            major={data.major}
                            github={data.githubUsername}
                            favLang={data.favoriteLanguage}
                            city={data.city}
                            oraginzation={data.oraginzation}
                        />
                    )
                })}
            </div>
        )
    }
}

export default FetchUser;