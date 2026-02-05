export default function Navigation(){
  const logoUrl = import.meta.env.BASE_URL + 'metamech-logo.png';
  return (
    <div style={{
      position:'sticky', top:0, zIndex:50,
      background:'linear-gradient(180deg, rgba(11,18,34,.92), rgba(11,18,34,.70))',
      backdropFilter:'blur(10px)',
      borderBottom:'1px solid rgba(255,255,255,.14)'
    }}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 0'}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <img src={logoUrl} alt="MetaMech Solution" style={{height:38, width:'auto'}} />
          <div style={{fontWeight:800, letterSpacing:'.2px'}}>MetaMech Solution</div>
        </div>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <a className="btn" href="#trial">TRIAL</a>
          <a className="btn btn-primary" href={import.meta.env.BASE_URL + 'downloads/MetaMech_Trial_QuickStart.pdf'} target="_blank" rel="noreferrer">QUICK START</a>
        </div>
      </div>
    </div>
  )
}
