# Jatin & Mahika — Royal Wedding Invitation

A mobile-first, interactive wedding invitation for Jatin Hassani and Mahika Chhabra. Built with React, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Lucide React, and date-fns.

## Contents

- [Requirements](#requirements)
- [Install and run](#install-and-run)
- [Build and preview](#build-and-preview)
- [Deploy](#deploy)
- [Project structure](#project-structure)
- [Wedding details and event dates](#wedding-details-and-event-dates)
- [RSVP behavior](#rsvp-behavior)
- [Calendar downloads](#calendar-downloads)
- [Music](#music)
- [Artwork, fonts, and sharing preview](#artwork-fonts-and-sharing-preview)
- [Accessibility and responsive behavior](#accessibility-and-responsive-behavior)
- [Troubleshooting](#troubleshooting)

## Requirements

- Node.js 20 or newer (Node.js 22 LTS is recommended).
- npm, included with Node.js.
- Internet access during dependency installation. Google Fonts are also loaded remotely; the site uses system font fallbacks if they cannot load.

Check the installed versions:

```bash
node --version
npm --version
```

## Install and run

Open a terminal in this project directory, then install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed in the terminal (Vite normally uses `http://localhost:5173`). Stop the server with `Ctrl+C`.

## Build and preview

Create and type-check the production build:

```bash
npm run build
```

Vite writes the static website to `dist/`. Preview that production build locally with:

```bash
npm run preview
```

## Deploy

This is a static Vite site. Deploy the contents of `dist/` to any static host, or connect the repository to a host with these settings:

- **Build command:** `npm run build`
- **Publish/output directory:** `dist`
- **Install command:** `npm install` (usually detected automatically)

For a deployment under a subdirectory instead of a domain root, configure Vite's `base` option in `vite.config.ts` to match that path before building.

## Project structure

```text
public/
  assets/             Favicon and social sharing artwork
src/
  App.tsx             Invitation sections, interactions, and reusable artwork
  main.tsx            React entry point
  style.css           Theme, layout, responsive styles, and motion preferences
index.html            Page title, SEO description, Open Graph tags, and fonts
vite.config.ts        Vite, React, and Tailwind configuration
```

## Wedding details and event dates

The event data is near the top of `src/App.tsx`, in the `events` array. Update that data when event information changes. The countdown target is set separately in the `Countdown` component, and the wedding calendar time is handled in `addCalendar()` in the same file. Update all of these locations together if the wedding date or time changes.

Current invitation details:

- **Couple:** Jatin Hassani and Mahika Chhabra
- **Wedding:** 11 January 2027 at 8:00 PM IST
- **Venue:** Resham Tara, Gwalior, Madhya Pradesh, India
- **Engagement:** 10 January 2027 at Resham Tara; time not specified
- **Sangeet:** 10 January 2027 at Resham Tara; time not specified
- **RSVP:** +91 97855 89861

Engagement and Sangeet calendar entries are all-day events because their times have not been confirmed. The map button uses a Google Maps search/directions URL for the venue and does not assume coordinates.

## RSVP behavior

The form checks the required fields in the browser and opens WhatsApp with a prefilled message addressed to +91 97855 89861. The guest must still send that message in WhatsApp. RSVP information is **not stored by this website**.

To save RSVPs in a database, replace or extend the `submit()` handler in `src/App.tsx` with a request to your own backend or form service. Add server-side validation and privacy information before collecting submissions that way.

## Calendar downloads

Each event card has an **Add to calendar** action that downloads an `.ics` file. Guests can open the file with a calendar app. Engagement and Sangeet are all-day entries; the wedding event is scheduled for 8:00 PM India Standard Time.

## Music

No audio file was supplied, so the music button is disabled and labeled as coming soon. To add music:

1. Add a music file you have permission to use at `public/assets/wedding-music.mp3`.
2. In `src/App.tsx`, add an HTML audio element or `Audio` instance that loads `/assets/wedding-music.mp3`.
3. Connect the floating button to play/pause and mute state, and handle playback errors.
4. Start playback only after the guest clicks the invitation or music control. Browsers generally block autoplay before user interaction.
5. Update the music note in the UI and this section of the README to describe the included track.

## Artwork, fonts, and sharing preview

The palace and event illustrations are original inline SVGs in `src/App.tsx`; the visual theme and responsive layouts are in `src/style.css`. The favicon and social preview image are in `public/assets/`.

Page title, description, Open Graph metadata, favicon reference, and Google Fonts are configured in `index.html`. Before sharing a deployed link widely, replace the relative Open Graph image path with its full public URL if your hosting platform or preview crawler requires an absolute URL. Update the social card artwork in `public/assets/og-card.svg` if the event branding changes.

## Accessibility and responsive behavior

- Layouts adapt for narrow mobile screens and desktop widths.
- Navigation and interactive controls have labels or visible text.
- Reduced-motion preferences are respected for decorative animation.
- Event details can be expanded by keyboard-accessible buttons.
- The music control stays disabled until an audio asset is configured.

## Troubleshooting

### `npm: command not found`

Install Node.js 20 or newer from [nodejs.org](https://nodejs.org/), close and reopen the terminal, then verify `node --version` and `npm --version`.

### Dependency installation fails

Check the network connection and retry `npm install`. If a prior install was interrupted, remove the incomplete `node_modules` directory and run the install command again.

### Port 5173 is already in use

Vite will offer another available port in the terminal. Open the alternate URL it prints.

### Google Fonts do not load

The site has local system font fallbacks. Google Fonts are an enhancement and are not required for the app to run.
