import React from 'react'
import AppStoreBadge from './assets/img/app-store-badge.svg'
import PlayStoreBadge from "./assets/img/google-play-badge.svg"


const AppBadge = () => {
  return (
    <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
            <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src={PlayStoreBadge}
                        alt="..." /></a>
                <a href="#!"><img className="app-badge" src={AppStoreBadge} alt="..." /></a>
            </div>
        </div>
    </section>
  )
}

export default AppBadge