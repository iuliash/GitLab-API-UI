import React from 'react' 

export default function Header() {
    return(
        <div className="header">
            <h1 className="header__title">GitLab API UI</h1>
            <div className="header-info">
                <a className='header-info__title' href="https://docs.gitlab.com/ee/README.html">GitLab API Docs</a>
                <a className='header-info__title'>About</a>
            </div>
        </div>
    )
}