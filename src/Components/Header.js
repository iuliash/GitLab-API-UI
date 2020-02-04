import React from 'react' 

export default function Header() {
    return(
        <div className="header">
            <h1 className="header__title">GitLab API UI</h1>
            <a className='header__docs' href="https://docs.gitlab.com/ee/README.html">GitLab API Docs</a>
        </div>
    )
}