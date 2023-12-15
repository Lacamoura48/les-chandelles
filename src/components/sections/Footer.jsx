import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-t-black py-8">
    <div className="flex md:flex-row flex-col lg:gap-10 gap-6 max-w-7xl mx-auto px-2 lg:px-0">
      <div className="flex-[2]">
        <div className="lg:mb-6 mb-4">
          <h3 className="font-dm text-2xl">Aide</h3>
          <p>
            Centre d'aide, Litiges et rapports, Protection des acheteurs,
            Signaler une violation des DPI, Informations réglementées,
            Conformité à l'intégrité
          </p>
        </div>
        <div>
          <h3 className="font-dm text-2xl">Parcourir par catégorie</h3>
          <p>
            Tous les populaires, Produit, Promotion, Prix bas, Excellent
            rapport qualité-prix, Commentaires, Blog, Portail vendeur, BLACK
            FRIDAY, Assistant Les chandelles
          </p>
        </div>
      </div>
      <div className="flex-[2]">
        <div className="lg:mb-4 mb-2">
          <h3 className="font-dm text-2xl lg:mb-4 mb-2">Payer avec</h3>
          <div className="flex items-center gap-3">
            <img className="w-9" src="/images/master.png" alt="" />
            <img className="w-9" src="/images/paypal.png" alt="" />
            <img className="w-9" src="/images/visa.png" alt="" />
          </div>
        </div>
        <div>
          <h3 className="font-dm text-2xl lg:mb-4 mb-2">Rester connecté</h3>
          <div className="flex items-center gap-3">
            <a href="">
              <img className="w-6" src="/images/Facebook.png" alt="" />
            </a>
            <a href="">
              <img className="w-6" src="/images/Instagram.png" alt="" />
            </a>
            <a href="">
              <img className="w-6" src="/images/Linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ul className="flex md:block">
          <li>
            <div className="flex gap-4 mb-6 items-center">
              <img
                src="/images/cashless.png"
                className="lg:w-11 w-8"
                alt="cashless"
              />
              <p className="md:text-normal text-sm">Modes de paiement</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 mb-6 items-center">
              <img
                src="/images/exchange.png"
                className="lg:w-11 w-8"
                alt="exchange"
              />
              <p className="md:text-normal text-sm">Free exchange</p>
            </div>
          </li>
          <li>
            <div className="flex gap-4 mb-6 items-center">
              <img
                src="/images/express.png"
                className="lg:w-11 w-8"
                alt="express"
              />
              <p className="md:text-normal text-sm">Free shipping</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer