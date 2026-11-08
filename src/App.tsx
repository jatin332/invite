import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUp, CalendarDays, Check, ChevronDown, Copy, MapPin, Menu, Music2, Pause, Play, Share2, Volume2, VolumeX, X } from 'lucide-react'
import { differenceInSeconds } from 'date-fns'

type EventInfo = { title: string; date: string; dateLabel: string; time?: string; description: string }
const events: EventInfo[] = [
  { title: 'Engagement', date: '2027-01-10', dateLabel: '10 January 2027', description: 'A promise made, a beautiful story beginning. Join us for family, blessings and celebration.' },
  { title: 'Sangeet', date: '2027-01-10', dateLabel: '10 January 2027', description: 'A gathering woven with music, laughter and the people we love most.' },
  { title: 'Wedding', date: '2027-01-11T20:00:00+05:30', dateLabel: '11 January 2027', time: '8:00 PM', description: 'With full hearts, we invite you to witness the beginning of our forever.' },
]
const venue = 'Resham Tara, Gwalior, Madhya Pradesh, India'
function PalaceArt({ small = false }: { small?: boolean }) {
  return <svg className={`palace-art ${small ? 'palace-small' : ''}`} viewBox="0 0 900 600" role="img" aria-label="An original illustration of a Rajasthani palace courtyard">
    <defs><pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1.3" fill="#a77f46" opacity=".45"/></pattern></defs>
    <path d="M90 575V310q0-112 90-112t90 112v265M315 575V240q0-142 135-142t135 142v335M630 575V310q0-112 90-112t90 112v265" fill="#e8d9bb" stroke="#9f7846" strokeWidth="4"/>
    <path d="M115 575V322q0-84 65-84t65 84v253M350 575V253q0-110 100-110t100 110v322M655 575V322q0-84 65-84t65 84v253" fill="#681e2d" stroke="#b08d57" strokeWidth="3"/>
    <path d="M78 315q102-177 204 0M300 249q150-240 300 0M618 315q102-177 204 0" fill="none" stroke="#b08d57" strokeWidth="8"/>
    <path d="M390 575V279q0-60 60-60t60 60v296" fill="url(#dots)" stroke="#9f7846" strokeWidth="2"/>
    <path d="M0 575h900M40 575l410-170 410 170M450 405v170" fill="none" stroke="#b08d57" strokeWidth="3" opacity=".75"/>
    <g fill="#68765c" stroke="#b08d57" strokeWidth="2"><path d="M75 485q-50-90 12-160 66 71 12 160zM815 485q50-90-12-160-66 71-12 160z"/><path d="M86 443q-28-70 6-106M812 443q28-70-6-106" fill="none"/></g>
    <g fill="#b08d57"><circle cx="175" cy="420" r="6"/><circle cx="725" cy="420" r="6"/><circle cx="450" cy="187" r="8"/><path d="M450 160q-18-22 0-36 18 14 0 36m-24 8q-22-18-8-34 21 10 8 34m48 0q22-18 8-34-21 10-8 34"/></g>
    <g transform="translate(450 494)" fill="#641d2c" stroke="#b08d57" strokeWidth="2"><path d="M-28 0q-4-50 28-64 32 14 28 64l15 18h-86z"/><path d="M-19-48q-18-30-38-18 8 20 38 25m38-7q18-30 38-18-8 20-38 25"/><circle cy="-38" r="5" fill="#e6d6bc"/><path d="M-14 18v29m28-29v29"/></g>
  </svg>
}
function EventIllustration({ index }: { index: number }) {
  if (index === 0) return <svg className="event-illustration" viewBox="0 0 220 150" aria-label="Intertwined gold engagement rings" role="img"><g fill="none" stroke="#e2c98f" strokeWidth="3"><ellipse cx="94" cy="85" rx="31" ry="43" transform="rotate(-32 94 85)"/><ellipse cx="130" cy="85" rx="31" ry="43" transform="rotate(32 130 85)"/><path d="m111 26 9 13 15 3-10 11 2 15-16-7-14 7 2-15-10-11 15-3z" fill="#d7b975" strokeWidth="1.5"/><path d="M24 125q22-18 38 0m96 0q18-20 38 0M33 30l5 9 10 2-8 7 2 11-9-5-10 5 2-11-8-7 11-2z" strokeWidth="1.3"/></g><g fill="#d7b975"><circle cx="35" cy="112" r="3"/><circle cx="185" cy="112" r="3"/><circle cx="47" cy="47" r="2"/><circle cx="176" cy="42" r="2"/></g></svg>
  if (index === 1) return <svg className="event-illustration" viewBox="0 0 220 150" aria-label="Traditional drums and dance-inspired line art" role="img"><g fill="none" stroke="#e2c98f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M58 78q17-9 34 0v40q-17 11-34 0zM58 78l8-12h18l8 12m-26 2 8 38m11-38-8 38M130 88q15-8 29 0v30q-14 9-29 0zM130 88l7-10h15l7 10m-22 2 6 28m10-28-6 28"/><path d="M105 46q-10-12 0-19 10 7 0 19zm0 12c-5 10-7 21-2 30l-8 22m10-22 14 13 13-7m-28-6-14-9-11 1m17 8 18 34m-4-69 12-10m-12 10-11-12"/><path d="M103 21q-5-8 1-12 7 5 2 12m24 27q8-10 17-4m-17 4q10 7 17 2"/></g><circle cx="105" cy="37" r="7" fill="#e2c98f"/><path d="M29 128h161" stroke="#e2c98f" strokeWidth="1" opacity=".6"/></svg>
  return <svg className="event-illustration" viewBox="0 0 220 150" aria-label="A royal wedding mandap with peacock-feather details" role="img"><g fill="none" stroke="#e2c98f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M42 125V79q0-10 10-10t10 10v46m105 0V79q0-10 10-10t10 10v46M33 70h154M50 66q60-66 120 0M63 71q47-48 94 0M78 69V56q0-31 32-31t32 31v13M92 125V98q0-18 18-18t18 18v27"/><path d="M38 49q-4-16 7-23 12 13-2 25m-1-4q-4-12 4-16m128 18q4-16-7-23-12 13 2 25m1-4q4-12-4-16"/><path d="M47 88h15m-15 12h15m-15 12h15m105-24h15m-15 12h15m-15 12h15M34 129h152"/></g><g fill="#d8bd82"><circle cx="110" cy="19" r="4"/><circle cx="82" cy="47" r="3"/><circle cx="138" cy="47" r="3"/><path d="M109 111q-12-13 1-21 14 9 2 21-4 4-3 11-1-7-4-11"/></g></svg>
}
function Countdown() {
  const target = new Date('2027-01-11T20:00:00+05:30')
  const [left, setLeft] = useState(Math.max(0, differenceInSeconds(target, new Date())))
  useEffect(() => { const timer = window.setInterval(() => setLeft(Math.max(0, differenceInSeconds(target, new Date()))), 1000); return () => window.clearInterval(timer) }, [])
  const parts = [{ label: 'Days', value: Math.floor(left / 86400) }, { label: 'Hours', value: Math.floor(left % 86400 / 3600) }, { label: 'Minutes', value: Math.floor(left % 3600 / 60) }, { label: 'Seconds', value: left % 60 }]
  return <div className="countdown">{left === 0 ? <p className="celebration-live">The celebration has begun. Welcome, with love.</p> : parts.map(item => <div className="count-unit" key={item.label}><strong>{String(item.value).padStart(2, '0')}</strong><span>{item.label}</span></div>)}</div>
}
function addCalendar(event: EventInfo) {
  const start = event.title === 'Wedding' ? '20270111T143000Z' : '20270110'
  const end = event.title === 'Wedding' ? '20270111T183000Z' : '20270111'
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT', `DTSTART${event.title === 'Wedding' ? ':' : ';VALUE=DATE:'}${start}`, `DTEND${event.title === 'Wedding' ? ':' : ';VALUE=DATE:'}${end}`, `SUMMARY:${event.title} · Jatin & Mahika`, `LOCATION:${venue}`, `DESCRIPTION:${event.description}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' })); const a = document.createElement('a'); a.href = url; a.download = `jatin-mahika-${event.title.toLowerCase()}.ics`; a.click(); URL.revokeObjectURL(url)
}
function App() {
  const [opened, setOpened] = useState(false), [doorsOpen, setDoorsOpen] = useState(false), [expanded, setExpanded] = useState<number | null>(null), [menu, setMenu] = useState(false), [copied, setCopied] = useState(false), [rsvpSent, setRsvpSent] = useState(false), [attend, setAttend] = useState('Yes, with joy'), [showTop, setShowTop] = useState(false), [musicPlaying, setMusicPlaying] = useState(false), [musicMuted, setMusicMuted] = useState(false)
  const musicRef = useRef<HTMLAudioElement | null>(null)
  const reducedMotion = useReducedMotion()
  useEffect(() => { const fn = () => setShowTop(window.scrollY > 500); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  useEffect(() => () => { const music = musicRef.current; if (music) { music.pause(); music.src = '' } }, [])
  const reveal = { initial: { opacity: 0, y: reducedMotion ? 0 : 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .16 }, transition: { duration: .7 } }
  const nav = <>{[['Our story', '#story'], ['Celebrations', '#events'], ['The venue', '#venue'], ['RSVP', '#rsvp']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>)}</>
  async function share() { if (navigator.share) await navigator.share({ title: 'Jatin & Mahika | Wedding Invitation', text: 'Join us on 11 January 2027 at Resham Tara, Gwalior.' }).catch(() => undefined); else { await navigator.clipboard?.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 1800) } }
  async function copyAddress() { await navigator.clipboard?.writeText(venue); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  async function playMusic() { try { if (!musicRef.current) { const audio = new Audio('/reference/Backgroundsong.mp3'); audio.loop = true; audio.preload = 'auto'; audio.volume = .85; audio.muted = musicMuted; musicRef.current = audio } await musicRef.current.play(); setMusicPlaying(true) } catch { setMusicPlaying(false) } }
  function pauseMusic() { musicRef.current?.pause(); setMusicPlaying(false) }
  function toggleMute() { const nextMuted = !musicMuted; setMusicMuted(nextMuted); if (musicRef.current) musicRef.current.muted = nextMuted }
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const form = new FormData(e.currentTarget); const guest = String(form.get('name')); const phone = String(form.get('phone')); const count = String(form.get('count')); const message = String(form.get('message') || ''); const note = `Wedding RSVP — Jatin & Mahika\nName: ${guest}\nMobile: ${phone}\nAttending: ${attend}\nGuests: ${count}${message ? `\nMessage: ${message}` : ''}`; setRsvpSent(true); window.open(`https://wa.me/919785589861?text=${encodeURIComponent(note)}`, '_blank', 'noopener,noreferrer') }
  return <>
    <div className="grain" aria-hidden="true" />
    <AnimatePresence>{!opened && <motion.div className="opening" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .8 }}>
      <div className={`opening-frame ${doorsOpen ? 'doors-open' : ''}`}><div className="opening-sun" /><PalaceArt /><div className="opening-copy"><p className="devanagari">॥ श्री गणेशाय नमः ॥</p><p className="devanagari verse">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br/>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p><span className="tiny-rule">✦</span><p className="opening-intro">A royal invitation to celebrate</p><h1>JATIN <i>&</i> MAHIKA</h1><div className="opening-date"><strong>11</strong><span className="opening-month">JANUARY<br/>2027</span><i/><span className="opening-venue">RESHAM TARA<br/>GWALIOR, MADHYA PRADESH</span></div><button className="gold-button" onClick={() => { void playMusic(); setDoorsOpen(true); window.setTimeout(() => setOpened(true), reducedMotion ? 0 : 1100) }}>Open wedding invitation <span>↗</span></button></div><div className="palace-door door-left" aria-hidden="true"><span>❋</span><i/><b>J</b></div><div className="palace-door door-right" aria-hidden="true"><span>❋</span><i/><b>M</b></div></div>
    </motion.div>}</AnimatePresence>
    {opened && <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>
      <header className="topbar"><a className="monogram" href="#home">J<span>&</span>M</a><nav className={menu ? 'nav open' : 'nav'}>{nav}<a className="nav-rsvp" href="#rsvp" onClick={() => setMenu(false)}>Kindly reply <span>↗</span></a></nav><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></header>
      <section className="hero" id="home"><div className="hero-bg"/><div className="hero-flower flower-a">✿</div><div className="hero-flower flower-b">✿</div><div className="hero-text"><p className="eyebrow">THE ROYAL WEDDING CELEBRATION</p><h1>JATIN<span className="ampersand">&</span>MAHIKA</h1><div className="hero-divider"><i/><span>❋</span><i/></div><div className="hero-details"><p className="hero-date">11 JANUARY 2027</p><p className="hero-location">Resham Tara <span>·</span> Gwalior, Madhya Pradesh</p></div><a href="#story" className="scroll-cue">SCROLL TO DISCOVER <ArrowDown size={14}/></a></div><div className="hero-art"><PalaceArt/></div><div className="side-note">A PROMISE · A CELEBRATION · A FOREVER</div></section>
      <section className="count-section"><p className="eyebrow">UNTIL WE SAY “I DO”</p><Countdown/></section>
      <motion.section className="story section-pad" id="story" {...reveal}>
        <div className="section-index">01 <i/></div>
        <p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p>
        <h2>Two families.<br/><em>One beautiful beginning.</em></h2>
        <p className="family-invitation">Together with great joy, our families invite you to celebrate Jatin and Mahika.</p>
        <div className="family-grid">
          <div className="family groom-family">
            <span className="ornament">❋</span><p className="family-kicker">THE GROOM’S FAMILY</p>
            <div className="family-elders">
              <div className="family-person"><h3>Hemlata Hassani</h3><p className="family-role">Groom’s mother</p></div>
              <p className="family-lineage">Daughter of</p>
              <div className="family-person"><h4>Narayan Das Parwani</h4><p className="family-role">Groom’s grandfather</p></div>
            </div>
            <div className="family-person family-sibling"><h4>Nitin Hassani</h4><p className="family-role">Groom’s brother</p></div>
          </div>
          <div className="family bride-family">
            <span className="ornament">❋</span><p className="family-kicker">THE BRIDE’S FAMILY</p>
            <h3>Vijay Chhabra<br/><span>&</span><br/>Priya Chhabra</h3><p className="family-role">The bride’s parents</p>
            <div className="family-person family-sibling"><h4>Gaurav Chhabra</h4><p className="family-role">Bride’s brother</p></div>
          </div>
        </div>
        <div className="guest-grid">
          <div className="guest-card groom-guests">
            <p className="guest-kicker">THE GROOM’S GUESTS</p>
            <div className="guest-cluster"><p>Meena Lalwani <span>(Masi)</span><i>·</i> Ravi Kumar <span>(Mosa)</span></p><small>Aniket Lalwani <i>·</i> Palak Lalwani</small></div>
            <div className="guest-cluster"><p>Annu Vishnani <span>(Masi)</span><i>·</i> Dileep Vishnani <span>(Mosa)</span></p><small>Siya Vishnani <i>·</i> Ayush Vishnani <i>·</i> Kartik Vishnani</small></div>
            <div className="guest-cluster"><p>Muskaan Bodhwani <span>(Masi)</span><i>·</i> Arjun Bodhwani <span>(Mosa)</span></p><small>Tanisha Bodhwani <span>(Tannu)</span></small></div>
          </div>
          <div className="guest-card bride-guests"><p className="guest-kicker">THE BRIDE’S GUESTS</p><div className="guest-empty" aria-label="Bride's guests will be added later"/></div>
        </div>
        <div className="story-end">JATIN <span>✦</span> MAHIKA</div>
      </motion.section>
      <section className="events-section section-pad" id="events"><motion.div {...reveal} className="section-heading"><div className="section-index">02 <i/></div><p className="eyebrow">SAVE THESE MOMENTS</p><h2>Our <em>celebrations</em></h2><p className="section-deck">Three gatherings, one story, and the people who make it ours.</p></motion.div><div className="event-grid">{events.map((event, i) => <motion.article className={`event-card event-${i+1}`} key={event.title} {...reveal}><div className="event-art"><div className="event-orbit"/><EventIllustration index={i}/><small>GWALIOR · 2027</small></div><div className="event-content"><span className="event-number">0{i+1} / CELEBRATION</span><h3>{event.title}</h3><p className="event-date">{event.dateLabel}</p>{event.time && <p className="event-time">{event.time}</p>}<p className="event-venue">Resham Tara<br/>Gwalior, Madhya Pradesh</p><button className="text-button" onClick={() => setExpanded(expanded === i ? null : i)} aria-expanded={expanded === i}>{expanded === i ? 'Close details' : 'Explore details'} <ChevronDown size={15} className={expanded === i ? 'turned' : ''}/></button><AnimatePresence>{expanded === i && <motion.div className="event-extra" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{event.description}</p><button className="calendar-button" onClick={() => addCalendar(event)}><CalendarDays size={15}/> Add to calendar</button></motion.div>}</AnimatePresence></div></motion.article>)}</div></section>
      <motion.section className="venue-section section-pad" id="venue" {...reveal}><div className="venue-art"><PalaceArt small/><span className="venue-seal">THE<br/>GATHERING<br/>PLACE</span></div><div className="venue-copy"><div className="section-index">03 <i/></div><p className="eyebrow">WHERE OUR STORY UNFOLDS</p><h2>Meet us<br/><em>in Gwalior.</em></h2><p className="venue-name">Resham Tara</p><p className="venue-address">Gwalior, Madhya Pradesh, India</p><div className="venue-actions"><a className="gold-button" href="https://www.google.com/maps/dir/?api=1&destination=Resham+Tara%2C+Gwalior%2C+Madhya+Pradesh%2C+India" target="_blank" rel="noreferrer"><MapPin size={15}/> Get directions</a><button className="outline-button" onClick={copyAddress}>{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? 'Copied' : 'Copy address'}</button></div></div></motion.section>
      <section className="rsvp-section section-pad" id="rsvp"><motion.div className="rsvp-copy" {...reveal}><div className="section-index">04 <i/></div><p className="eyebrow">A NOTE BACK WOULD MEAN SO MUCH</p><h2>Will you<br/><em>join us?</em></h2><p>We would be honoured to celebrate this day with you. Kindly share your response below.</p><a href="https://wa.me/919785589861" target="_blank" rel="noreferrer" className="phone-link">RSVP · +91 97855 89861 ↗</a></motion.div><motion.div className="rsvp-card" {...reveal}>{rsvpSent ? <div className="confirmation"><span className="confirm-seal">✓</span><p className="eyebrow">THANK YOU</p><h3>Your reply is on its way.</h3><p>WhatsApp has opened with your RSVP ready to send. We can’t wait to celebrate together.</p><button className="text-button" onClick={() => setRsvpSent(false)}>Send another response ↗</button></div> : <form onSubmit={submit}><div className="form-top"><span className="form-kicker">KINDLY REPLY</span><span>✦</span></div><label>Full name<input name="name" autoComplete="name" placeholder="Your name" required/></label><div className="form-row"><label>Mobile number<input name="phone" type="tel" autoComplete="tel" placeholder="Your number" required pattern="[+0-9 ()-]{7,}"/></label><label>Guests<select name="count" defaultValue="1"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option></select></label></div><fieldset><legend>Will you be joining us?</legend><div className="radio-row">{['Yes, with joy', 'Regretfully no'].map(option => <button type="button" key={option} className={attend === option ? 'radio-choice active' : 'radio-choice'} onClick={() => setAttend(option)}>{attend === option && <Check size={13}/>} {option}</button>)}</div></fieldset><label>A little note <span className="optional">OPTIONAL</span><textarea name="message" rows={2} placeholder="Send the couple a message…"/></label><button type="submit" className="gold-button submit-button">Send RSVP on WhatsApp <span>↗</span></button><p className="form-note">Your reply will open in WhatsApp to send to the family.</p></form>}</motion.div></section>
      <footer className="footer"><div className="footer-palace"><PalaceArt small/></div><div className="footer-frame"><p className="eyebrow">A BEAUTIFUL JOURNEY BEGINS</p><h2>JATIN <i>&</i> MAHIKA</h2><span className="footer-date">11 JANUARY 2027</span><p className="footer-note">Your presence and blessings will make our celebration truly special.</p><p className="devanagari footer-hindi">आपकी उपस्थिति एवं आशीर्वाद हमारे लिए अनमोल हैं।</p><a className="footer-phone" href="https://wa.me/919785589861">RSVP · 9785589861</a><p className="with-love">With love,<br/><em>The Chhabra & Hassani Families</em></p><button className="share-button" onClick={share}><Share2 size={14}/> {copied ? 'Link copied' : 'Share invitation'}</button><button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO THE BEGINNING ↑</button></div></footer>
      <div className="floating-controls"><button className="music-control" onClick={() => musicPlaying ? pauseMusic() : void playMusic()} aria-label={musicPlaying ? 'Pause background music' : 'Play background music'} title={musicPlaying ? 'Pause wedding music' : 'Play wedding music'}><Music2 size={17}/>{musicPlaying ? <Pause size={12}/> : <Play size={12}/>}</button><button className="music-control mute-control" onClick={toggleMute} aria-label={musicMuted ? 'Unmute background music' : 'Mute background music'} title={musicMuted ? 'Unmute wedding music' : 'Mute wedding music'}>{musicMuted ? <VolumeX size={16}/> : <Volume2 size={16}/>}</button><span className="music-add">WEDDING<br/>MUSIC</span></div>
      <AnimatePresence>{showTop && <motion.button className="to-top" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={17}/></motion.button>}</AnimatePresence>
    </motion.main>}
  </>
}
export default App
