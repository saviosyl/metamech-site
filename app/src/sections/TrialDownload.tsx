export default function TrialDownload(){
  const trialUrl = import.meta.env.BASE_URL + 'downloads/MetaMech_Trial_Package.zip';
  return (
    <div>
      <h2 style={{margin:'0 0 8px 0'}}>Download 3‑Day Trial</h2>
      <div className="small" style={{marginBottom:12}}>
        This demo package is hosted from <b>public/downloads</b> and works on GitHub Pages.
      </div>
      <a className="btn btn-green" href={trialUrl} download>
        ⬇ Download MetaMech Trial Package (ZIP)
      </a>
      <div className="small" style={{marginTop:10}}>
        File path: <b>/downloads/MetaMech_Trial_Package.zip</b>
      </div>
    </div>
  )
}
