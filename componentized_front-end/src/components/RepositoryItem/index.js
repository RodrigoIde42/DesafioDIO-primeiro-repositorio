import React from 'react';

export default function RepositoryItem({name, fullname, linkToRepo}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Full name:</h4>
            <a
              href={linkToRepo}
              target="_blank"
              rel="noreferrer"
            >
                {fullname}
            </a>
        </div>
    )
}
