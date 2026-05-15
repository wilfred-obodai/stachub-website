import { useEffect, useState } from 'react';

// ─── RETAILTRACK SCREENS ──────────────────────────────────────────────────────

export function RetailTrackDashboard() {
  return (
    <div style={{ background: '#f8faff', padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', gap: '5px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ background: '#1E40AF', borderRadius: '5px', padding: '6px 10px' }}>
        <div style={{ color: 'white', fontWeight: 700, fontSize: '9px' }}>RetailTrack</div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '7px' }}>Dashboard</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '4px' }}>
        {[{ label:'Revenue', value:'₵12.5k', color:'#1E40AF' }, { label:'Sales', value:'234', color:'#374151' }, { label:'Profit', value:'₵4.2K', color:'#16a34a' }, { label:'Staff', value:'12', color:'#374151' }].map((s,i) => (
          <div key={i} style={{ background:'white', borderRadius:'4px', padding:'4px', textAlign:'center', border:'0.5px solid #e5e7eb', boxShadow:'0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize:'7px', color:'#6b7280' }}>{s.label}</div>
            <div style={{ fontSize:'10px', fontWeight:700, color:s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
      <div style={{ background:'white', borderRadius:'5px', padding:'6px 8px', border:'0.5px solid #e5e7eb', flex:1 }}>
        <div style={{ fontWeight:700, color:'#111', fontSize:'8px', marginBottom:'5px' }}>Top Staff Performance</div>
        {[{ name:'Kwame A.', val:'₵6K' }, { name:'Ama B.', val:'₵4.8K' }, { name:'Kofi C.', val:'₵3.2K' }].map((r,i) => (
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'3px 0', borderBottom:'0.5px solid #f3f4f6' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'4px' }}>
              <div style={{ width:'13px', height:'13px', background:'#1E40AF', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'6px', fontWeight:700 }}>{i+1}</div>
              <span style={{ color:'#374151', fontSize:'7.5px' }}>{r.name}</span>
            </div>
            <span style={{ color:'#F59E0B', fontWeight:700, fontSize:'7.5px' }}>{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RetailTrackInventory() {
  return (
    <div style={{ background:'white', padding:'10px', height:'100%', display:'flex', flexDirection:'column', gap:'5px' }}>
      <div style={{ fontWeight:700, color:'#111', fontSize:'9px', borderBottom:'1px solid #f3f4f6', paddingBottom:'4px' }}>Inventory</div>
      {[{ name:'Frozen Chicken 1kg', stock:24, low:false }, { name:'Milo 400g', stock:8, low:true }, { name:'Cooking Oil 2L', stock:15, low:false }, { name:'Rice 5kg', stock:3, low:true }, { name:'Bottled Water', stock:48, low:false }].map((item,i) => (
        <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'3px 0', borderBottom:'0.5px solid #f3f4f6' }}>
          <span style={{ fontSize:'7.5px', color:'#374151' }}>{item.name}</span>
          <span style={{ fontSize:'7.5px', fontWeight:700, color:item.low?'#ef4444':'#16a34a', background:item.low?'#fef2f2':'#f0fdf4', padding:'1px 5px', borderRadius:'8px' }}>{item.stock} {item.low?'⚠':'✓'}</span>
        </div>
      ))}
    </div>
  );
}

export function RetailTrackCashier() {
  return (
    <div style={{ background:'#f8faff', padding:'10px', height:'100%', display:'flex', flexDirection:'column', gap:'4px' }}>
      <div style={{ background:'#1E40AF', borderRadius:'5px', padding:'5px 8px' }}>
        <div style={{ color:'white', fontWeight:700, fontSize:'8px' }}>Point of Sale</div>
      </div>
      {[{ name:'Frozen Chicken 1kg', price:'₵120' }, { name:'Milo 400g', price:'₵28' }, { name:'Cooking Oil 2L', price:'₵65' }, { name:'Rice 5kg', price:'₵85' }].map((item,i) => (
        <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'3px 0', borderBottom:'0.5px solid #e5e7eb' }}>
          <span style={{ fontSize:'7.5px', color:'#374151' }}>{item.name}</span>
          <span style={{ fontSize:'7.5px', fontWeight:700, color:'#1E40AF' }}>{item.price}</span>
        </div>
      ))}
      <div style={{ background:'#F59E0B', borderRadius:'5px', padding:'6px 8px', marginTop:'auto', display:'flex', justifyContent:'space-between', boxShadow:'0 2px 8px rgba(245,158,11,0.3)' }}>
        <span style={{ fontSize:'9px', fontWeight:700, color:'white' }}>Total</span>
        <span style={{ fontSize:'9px', fontWeight:700, color:'white' }}>₵298</span>
      </div>
    </div>
  );
}

export function ComingSoonScreen() {
  return (
    <div style={{ background:'linear-gradient(135deg,#f3e8ff,#ede9fe)', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px' }}>
      <div style={{ fontSize:'32px' }}>🔮</div>
      <div style={{ fontWeight:700, color:'#7c3aed', fontSize:'11px' }}>Coming Soon</div>
      <div style={{ fontSize:'9px', color:'#6d28d9', opacity:0.7 }}>2026</div>
    </div>
  );
}

// ─── STACHUB BRANDED SCREENS ──────────────────────────────────────────────────

export function StachubSplashScreen() {
  return (
    <div style={{ background:'linear-gradient(135deg,#1E3A8A,#1E40AF)', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px' }}>
      <div style={{ width:'56px', height:'56px', background:'rgba(255,255,255,0.15)', borderRadius:'50%', border:'2.5px solid #F59E0B', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:'26px', color:'white', boxShadow:'0 0 0 8px rgba(245,158,11,0.12)' }}>S</div>
      <div style={{ color:'white', fontSize:'20px', fontWeight:700, fontFamily:'Georgia,serif', letterSpacing:'0.02em' }}>Stachub</div>
      <div style={{ width:'36px', height:'1.5px', background:'rgba(255,255,255,0.3)' }} />
      <div style={{ color:'#F59E0B', fontSize:'10px', fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase' as const }}>The Hub Is Yours</div>
    </div>
  );
}

export function StachubMissionScreen() {
  return (
    <div style={{ background:'white', padding:'16px', height:'100%', display:'flex', flexDirection:'column', gap:'9px' }}>
      <div style={{ fontWeight:800, color:'#1E40AF', fontSize:'11px', textTransform:'uppercase' as const, letterSpacing:'0.07em' }}>What we do</div>
      <div style={{ height:'0.5px', background:'#e5e7eb' }} />
      {['Identify real problems worth solving','Build simple, powerful software','Launch & grow with our users'].map((point,i) => (
        <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px' }}>
          <div style={{ width:'8px', height:'8px', background:'#F59E0B', borderRadius:'50%', marginTop:'3px', flexShrink:0, boxShadow:'0 0 0 3px rgba(245,158,11,0.15)' }} />
          <div style={{ fontSize:'9px', color:'#374151', lineHeight:1.6 }}>{point}</div>
        </div>
      ))}
      <div style={{ height:'0.5px', background:'#e5e7eb' }} />
      <div style={{ fontWeight:700, color:'#111', fontSize:'10px' }}>Our mission</div>
      <div style={{ fontSize:'9px', color:'#6b7280', lineHeight:1.6 }}>World-class software built from Ghana for businesses everywhere.</div>
      <div style={{ marginTop:'auto', fontSize:'8px', color:'#9ca3af', display:'flex', alignItems:'center', gap:'4px' }}>
        <span>🇬🇭</span> Founded in Accra, Ghana · Est. 2024
      </div>
    </div>
  );
}

export function StachubTrustScreen() {
  return (
    <div style={{ background:'#f8faff', padding:'16px', height:'100%', display:'flex', flexDirection:'column', gap:'9px' }}>
      <div style={{ fontWeight:800, color:'#1E40AF', fontSize:'11px', textTransform:'uppercase' as const, letterSpacing:'0.07em' }}>Why trust Stachub</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'6px' }}>
        {[{ val:'500+', lbl:'Businesses' }, { val:'14+', lbl:'Countries' }, { val:'24/7', lbl:'Support' }].map((s,i) => (
          <div key={i} style={{ background:'#1E40AF', borderRadius:'8px', padding:'9px 4px', textAlign:'center' as const, boxShadow:'0 4px 12px rgba(30,64,175,0.25)' }}>
            <div style={{ fontSize:'15px', fontWeight:800, color:'#FACC15', lineHeight:1.2 }}>{s.val}</div>
            <div style={{ fontSize:'8px', color:'rgba(255,255,255,0.95)', marginTop:'3px' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
        {['Bank-grade encryption (AES-256)','Ghanaian-built & proudly owned','Real human support team'].map((b,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', background:'white', borderRadius:'7px', padding:'6px 9px', border:'0.5px solid #e5e7eb' }}>
            <div style={{ width:'7px', height:'7px', background:'#22c55e', borderRadius:'50%', flexShrink:0, boxShadow:'0 0 0 3px rgba(34,197,94,0.15)' }} />
            <div style={{ fontSize:'8.5px', color:'#374151' }}>{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── IPHONE SCREENS ───────────────────────────────────────────────────────────

export function RetailTrackSplashScreen() {
  return (
    <div style={{ background:'linear-gradient(160deg,#1E3A8A,#1E40AF)', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px', paddingTop:'24px' }}>
      <div style={{ width:'52px', height:'52px', background:'rgba(255,255,255,0.15)', borderRadius:'14px', border:'2px solid rgba(245,158,11,0.8)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'26px', boxShadow:'0 8px 24px rgba(0,0,0,0.3)' }}>🛍️</div>
      <div style={{ color:'white', fontSize:'14px', fontWeight:700 }}>RetailTrack</div>
      <div style={{ width:'64px', height:'3px', background:'rgba(255,255,255,0.15)', borderRadius:'2px', overflow:'hidden' }}>
        <div style={{ height:'100%', width:'70%', background:'#F59E0B', borderRadius:'2px', boxShadow:'0 0 8px rgba(245,158,11,0.5)' }} />
      </div>
      <div style={{ color:'rgba(255,255,255,0.5)', fontSize:'9px', marginTop:'16px' }}>
        Powered by <span style={{ color:'#F59E0B', fontWeight:700 }}>Stachub</span>
      </div>
    </div>
  );
}

export function IPhoneCashierScreen() {
  return (
    <div style={{ background:'#f8faff', padding:'26px 11px 11px', display:'flex', flexDirection:'column', gap:'5px', height:'100%' }}>
      <div style={{ background:'#1E40AF', borderRadius:'7px', padding:'7px 10px', marginBottom:'3px', boxShadow:'0 2px 8px rgba(30,64,175,0.2)' }}>
        <div style={{ color:'white', fontWeight:700, fontSize:'9px' }}>Today's Sales</div>
        <div style={{ color:'rgba(255,255,255,0.75)', fontSize:'7.5px' }}>Forever Victorious Enterprise</div>
      </div>
      {[{ name:'Frozen Chicken 1kg', price:'GH₵120' }, { name:'Milo 400g', price:'GH₵28' }, { name:'Cooking Oil 2L', price:'GH₵65' }, { name:'Rice 5kg', price:'GH₵85' }].map((item,i) => (
        <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'0.5px solid #e5e7eb' }}>
          <span style={{ fontSize:'8px', color:'#374151' }}>{item.name}</span>
          <span style={{ fontSize:'8px', fontWeight:700, color:'#1E40AF' }}>{item.price}</span>
        </div>
      ))}
      <div style={{ background:'#F59E0B', borderRadius:'7px', padding:'7px 10px', marginTop:'auto', display:'flex', justifyContent:'space-between', boxShadow:'0 4px 12px rgba(245,158,11,0.35)' }}>
        <span style={{ fontSize:'9px', fontWeight:700, color:'white' }}>Total</span>
        <span style={{ fontSize:'9px', fontWeight:700, color:'white' }}>GH₵298</span>
      </div>
    </div>
  );
}

export function IPhoneTrustScreen() {
  return (
    <div style={{ background:'white', padding:'26px 11px 11px', display:'flex', flexDirection:'column', gap:'8px', height:'100%' }}>
      <div style={{ fontWeight:800, fontSize:'9px', color:'#1E40AF', textTransform:'uppercase' as const, letterSpacing:'0.05em' }}>Why Stachub</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'4px' }}>
        {[{ val:'500+', lbl:'Businesses' }, { val:'14+', lbl:'Countries' }, { val:'24/7', lbl:'Support' }].map((s,i) => (
          <div key={i} style={{ background:'#1E40AF', borderRadius:'6px', padding:'7px 2px', textAlign:'center' as const, boxShadow:'0 2px 8px rgba(30,64,175,0.2)' }}>
            <div style={{ fontSize:'12px', fontWeight:800, color:'#FACC15', lineHeight:1.2 }}>{s.val}</div>
            <div style={{ fontSize:'7px', color:'rgba(255,255,255,0.95)', marginTop:'2px' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      {['Encrypted & secure','Built in Accra, Ghana','Human support 24/7'].map((b,i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:'6px', background:'#f0fdf4', borderRadius:'6px', padding:'6px 8px', border:'0.5px solid #bbf7d0' }}>
          <div style={{ width:'6px', height:'6px', background:'#22c55e', borderRadius:'50%', flexShrink:0 }} />
          <div style={{ fontSize:'8px', color:'#166534' }}>{b}</div>
        </div>
      ))}
    </div>
  );
}

// ─── DESKTOP / iMAC MOCKUP ────────────────────────────────────────────────────

interface DesktopProps { screens: React.ReactNode[]; intervalMs?: number; screenHeight?: number; }

export function DesktopMockup({ screens, intervalMs = 4000, screenHeight = 190 }: DesktopProps) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (screens.length <= 1) return;
    const t = setInterval(() => setIdx(i => (i + 1) % screens.length), intervalMs);
    return () => clearInterval(t);
  }, [screens.length, intervalMs]);

  return (
    <div style={{ width:'100%', display:'flex', flexDirection:'column', alignItems:'center' }}>
      <div style={{ width:'100%', background:'linear-gradient(180deg,#1a1a1a,#222)', borderRadius:'10px 10px 4px 4px', padding:'10px 10px 6px', border:'2px solid #2a2a2a', boxShadow:'inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.5)' }}>
        <div style={{ display:'flex', gap:'4px', marginBottom:'6px' }}>
          <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#ff5f57' }} />
          <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#febc2e' }} />
          <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#28c840' }} />
        </div>
        <div style={{ background:'rgba(255,255,255,0.08)', borderRadius:'4px', padding:'3px 8px', marginBottom:'6px', display:'flex', alignItems:'center', gap:'5px' }}>
          <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:'rgba(255,255,255,0.2)' }} />
          <div style={{ fontSize:'7px', color:'rgba(255,255,255,0.35)', flex:1 }}>stachubgh.com</div>
        </div>
        <div style={{ background:'#000', borderRadius:'5px', overflow:'hidden', height:`${screenHeight}px`, position:'relative' }}>
          {screens.map((screen,i) => (
            <div key={i} style={{ position:'absolute', inset:0, opacity:i===idx?1:0, transition:'opacity 0.7s ease' }}>{screen}</div>
          ))}
        </div>
      </div>
      <div style={{ width:'100%', background:'#1a1a1a', height:'14px', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'0 0 3px 3px', borderTop:'1px solid #111' }}>
        <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#2a2a2a', border:'0.5px solid #333' }} />
      </div>
      <div style={{ width:'18px', height:'22px', background:'linear-gradient(180deg,#222,#1a1a1a)', marginTop:'-1px' }} />
      <div style={{ width:'55%', height:'7px', background:'linear-gradient(180deg,#222,#1a1a1a)', borderRadius:'0 0 8px 8px', boxShadow:'0 2px 8px rgba(0,0,0,0.3)' }} />
    </div>
  );
}

// ─── IPHONE 17 PRO — screenHeight prop for consistent sizing everywhere ───────

interface IPhoneProps { screens: React.ReactNode[]; intervalMs?: number; screenHeight?: number; }

export function IPhone17ProMockup({ screens, intervalMs = 4000, screenHeight = 270 }: IPhoneProps) {
  const [idx, setIdx] = useState(0);
  const [diExpanded, setDiExpanded] = useState(false);

  useEffect(() => {
    if (screens.length <= 1) return;
    const t = setInterval(() => {
      setDiExpanded(true);
      setTimeout(() => setDiExpanded(false), 500);
      setTimeout(() => setIdx(i => (i + 1) % screens.length), 350);
    }, intervalMs);
    return () => clearInterval(t);
  }, [screens.length, intervalMs]);

  return (
    <div style={{ width:'100%', position:'relative' }}>
      <div style={{ background:'linear-gradient(160deg,#2e2e2e 0%,#1c1c1c 50%,#252525 100%)', borderRadius:'36px', padding:'12px 9px', boxShadow:'inset 0 0 0 1.5px rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.95), 0 24px 48px rgba(0,0,0,0.4)', position:'relative' }}>
        <div style={{ position:'absolute', top:0, left:'18%', right:'18%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', left:'-3.5px', top:'46px', width:'3.5px', height:'13px', background:'#3a3a3a', borderRadius:'2px 0 0 2px' }} />
        <div style={{ position:'absolute', left:'-3.5px', top:'66px', width:'3.5px', height:'26px', background:'#3a3a3a', borderRadius:'2px 0 0 2px' }} />
        <div style={{ position:'absolute', left:'-3.5px', top:'99px', width:'3.5px', height:'26px', background:'#3a3a3a', borderRadius:'2px 0 0 2px' }} />
        <div style={{ position:'absolute', right:'-3.5px', top:'80px', width:'3.5px', height:'34px', background:'#3a3a3a', borderRadius:'0 2px 2px 0' }} />
        <div style={{ background:'#000', borderRadius:'26px', overflow:'hidden', position:'relative' }}>
          <div style={{ position:'absolute', top:'10px', left:'50%', transform:'translateX(-50%)', width:diExpanded?'68px':'46px', height:diExpanded?'16px':'12px', background:'#000', borderRadius:'20px', zIndex:20, transition:'width 0.28s cubic-bezier(0.34,1.56,0.64,1), height 0.28s cubic-bezier(0.34,1.56,0.64,1)', boxShadow:'0 0 0 2px #111' }} />
          <div style={{ height:`${screenHeight}px`, position:'relative' }}>
            {screens.map((screen,i) => (
              <div key={i} style={{ position:'absolute', inset:0, opacity:i===idx?1:0, transition:'opacity 0.45s ease' }}>{screen}</div>
            ))}
          </div>
          <div style={{ background:'#0a0a0a', padding:'6px 0 9px', display:'flex', justifyContent:'center' }}>
            <div style={{ width:'44px', height:'4px', background:'rgba(255,255,255,0.22)', borderRadius:'2px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const MacBookMockup = DesktopMockup;
export const iPhoneMockup = IPhone17ProMockup;