import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import wallet from './assets/wallet.png'
import chart from './assets/chart.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <nav className="nav">
      <div className="logo">
        <a href="#">
          <img src= { logo } alt="logo" />
        </a>
      </div>

      <div className="menu d-none d-md-block">
        <ul className="main-menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Individuales</a></li>
          <li><a href="#">Estlos</a></li>
          <li><a href="#">Hostorial</a></li>
          <li><a href="#">Compañia</a></li>
        </ul>
      </div>

      <div className="get-started">
        <button className="btn-sec-s">Entrar</button>
        <button className="btn-main-s">Registrate</button>
      </div>
    </nav>

    <section className="sec-home">
      <div className="home-cta">
        <div className="cta-text">
          <span>Entra a tu portafolio web</span>
          <i className="bi bi-arrow-right"></i>
        </div>
        <h2 className="home-title h1">Crea tu portafolio web ahora</h2>
        <p className="home-description">
          Combina estas estrategias para desarrolladores web y obtiene
          las mejores ofertas laborales
        </p>
        <div className="lead-magnet row align-items-center">
          <div className="col input-col">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Enviar email"
            />
          </div>
          <div className="col">
            <button className="btn-main">Registrate</button>
          </div>
        </div>
      </div>
      <div className="home-img d-none d-md-block">
        <img src= { wallet } alt="wallet" />
      </div>
    </section>

    <section className="sec-features">
      <div className="intro">
        <h3>Create your cryptocurrency portfolio today</h3>
        <p>
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
      </div>
      <div className="features">
        <div className="text">
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-graph-up"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Manage your portfolio</h4>
              <p className="description-text">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-calendar"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Recurring buys</h4>
              <p className="description-text">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-phone"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Mobile apps</h4>
              <p className="description-text">
                Stay on top of the markets with the Coinbase app for Android or
                iOS.
              </p>
            </div>
          </div>
        </div>
        <div className="image d-none d-md-block">
          <img src= { chart } alt="chart" />
        </div>
      </div>
    </section>

    <section className="sec-benefits">
      <div className="intro">
        <h3>The most trusted cryptocurrency platform</h3>
        <p>Here are a few reasons why you should choose Coinbase</p>
      </div>
      <div className="benefit-cards row">
        <div className="benefit col-md">
          <i className="bi bi-eye-fill"></i>
          <div className="description">
            <h4 className="title">Secure storage</h4>
            <p className="text">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
          </div>
          <p className="cta">Learn how Coinbase keeps your funds safe and secure</p>
        </div>
        <div className="benefit col-md">
          <i className="bi bi-envelope-fill"></i>
          <div className="description">
            <h4 className="title">Protected by insurance</h4>
            <p className="text">
              Coinbase maintains crypto insurance and all USD cash balances are
              covered by FDIC insurance, up to a maximum of $250,000.
            </p>
          </div>
          <p className="cta my-4">
            Learn how your crypto is covered by our insurance policy
          </p>
        </div>
        <div className="benefit col-md">
          <i className="bi bi-shield-shaded"></i>
          <div className="description">
            <h4 className="title">Industry best practices</h4>
            <p className="text">
              Coinbase supports a variety of the most popular digital
              currencies.
            </p>
          </div>
          <p className="cta">
            Learn how we implement industry best practices for account security
          </p>
        </div>
      </div>
    </section>

    <section className="sec-kpis row">
      <div className="kpi col-md">
        <span className="number">$547B</span>
        <span className="desc">Quarterly volume traded</span>
      </div>
      <div className="kpi col-md">
        <span className="number">100+</span>
        <span className="desc">Countries supported</span>
      </div>
      <div className="kpi col-md">
        <span className="number">89+M</span>
        <span className="desc">Verified users</span>
      </div>
    </section>

    <section className="sec-onboarding">
      <div className="intro">
        <h3>Get started in a few minutes</h3>
        <p>
          Coinbase supports a variety of the most popular digital currencies.
        </p>
      </div>
      <div className="steps">
        <div className="icon-desc">
          <i className="bi bi-person-plus-fill"></i>
          <h4 className="title">Create an account</h4>
        </div>
        <div className="step-separator"></div>
        <div className="icon-desc">
          <i className="bi bi-bank"></i>
          <h4 className="title">Link your bank account</h4>
        </div>
        <div className="step-separator"></div>
        <div className="icon-desc">
          <i className="bi bi-coin"></i>
          <h4 className="title">Purchase some coin</h4>
        </div>
      </div>
    </section>

    <section className="sec-footer-cta">
      <div className="footer-cta">
        <h4 className="cta-title">Earn up to $7 worth of crypto</h4>
        <p className="cta-description">
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </p>
        <button className="btn-main">Acepta promocion</button>
      </div>
    </section>

    <footer className="footer text-center m-2">
      &copy; TODOS LOS DERECHOS RESERVADOS
    </footer>

    </>
  )
}

export default App
