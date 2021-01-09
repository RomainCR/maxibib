import React from 'react'

export const News = () => {
  const newFiles = ["ressources1.pdf",
    "ressources2.pdf",
    "ressources3.pdf",
    "ressources4.pdf",
    "ressources5.pdf",
    "ressources6.pdf",
    "ressources7.pdf",
    "ressources8.pdf",
    "ressources9.pdf"]
  return (
    <div className="news">
      <h4>Actu</h4>
      <p>
        blablablablablablablablablabal
        Itasperro consequi ut il el inimolorepel milita sam ute sus apitiur aut pore,
        odiorepera ne ditae non reius dolorepel magnatur solor abora nobitiis de et
      </p>
      <h4>Dernières ressources ajoutées :</h4>
      <ul>
        {newFiles.map(file => {
          return <li>
            {file}
          </li>
        })}
      </ul>
      <h4>L'univers MaxiBib : </h4>
      <div className="links">
        <a href="http://corndog.io/">CornDog</a>
        <a href="https://thatsthefinger.com/">ThatsTheFinger</a>
      </div>
    </div>
  )
}
