import Navigation from './sections/Navigation'
import TrialDownload from './sections/TrialDownload'

export default function App(){
  return (
    <>
      <Navigation />
      <header className="hero">
        <div className="container">
          <div className="grid">
            <div className="card">
              <div className="small">Premium dark engineering theme • GitHub Pages ready</div>
              <h1 style={{margin:'10px 0 10px 0', letterSpacing:'-0.6px'}}>MetaMech Solution</h1>
              <p className="small">
                React + Vite starter package with GitHub Actions deployment and a working trial download path.
              </p>
              <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:12}}>
                <a className="btn btn-primary" href="#trial">Download Trial</a>
                <a className="btn" href={import.meta.env.BASE_URL + 'downloads/MetaMech_Trial_QuickStart.pdf'} target="_blank" rel="noreferrer">
                  Open Quick Start PDF
                </a>
              </div>
            </div>
            <div className="card" id="trial">
              <TrialDownload />
            </div>
          </div>
          <div style={{marginTop:14}} className="small">
            Tip: Put your EXE or ZIP into <b>app/public/downloads/</b>. It becomes public at
            <b> /metamech-v2/downloads/</b> after deploy.
          </div>
        </div>
      </header>
      <footer style={{padding:'24px 0', borderTop:'1px solid var(--line)'}}>
        <div className="container" style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
          <div className="small">© {new Date().getFullYear()} MetaMech Solution</div>
          <div className="small">Galway, Ireland</div>
        </div>
      </footer>
    </>
  )
}
