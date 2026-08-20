// uiskin-theme — Blue Glass Theme (ocean fantasy) client half — TEMPLATE.
// The five data-URI constants below (BG_URI, STICKER_URI, SETTINGS_DECOR_URI,
// SETTINGS_DIVIDER_URI, NEW_SESSION_SKIN_URI) are filled with base64 data URIs
// by scripts/build-client.mjs, which writes lib/client.js. Do not edit
// lib/client.js by hand; edit this template and rebuild.
window.__ModuleLoader__.load({
  id: "uiskin-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    const React = require("react");

    const BG_URI = "__BG_URI__";
    const STICKER_URI = "__STICKER_URI__";
    const SETTINGS_DECOR_URI = "__SETTINGS_DECOR_URI__";
    const SETTINGS_DIVIDER_URI = "__SETTINGS_DIVIDER_URI__";
    const NEW_SESSION_SKIN_URI = "__NEW_SESSION_SKIN_URI__";

    // Inject one stylesheet as a <style> tag, removed on unload (the static
    // twin of the dynamic runner's `styles.insert`).
    function insertStyle(css) {
      const tag = document.createElement("style");
      tag.setAttribute("data-plugin-css", "uiskin-theme");
      tag.textContent = css;
      document.head.appendChild(tag);
      return () => { tag.remove() };
    }

    const TOKENS = {
      '--dsw-alias-bg-base': { light: 'rgba(236, 244, 252, 0.55)', dark: 'rgba(8, 20, 46, 0.42)' },
      '--dsw-alias-bg-layer-1': { light: 'rgba(250, 252, 255, 0.95)', dark: 'rgba(15, 34, 74, 0.80)' },
      '--dsw-alias-bg-layer-2': { light: 'rgba(243, 247, 253, 0.95)', dark: 'rgba(22, 46, 94, 0.78)' },
      '--dsw-alias-bg-overlay': { light: 'rgba(248, 251, 255, 0.98)', dark: 'rgba(10, 24, 54, 0.95)' },
      '--dsw-alias-border-l1': { light: 'rgba(59, 130, 246, 0.28)', dark: 'rgba(96, 165, 250, 0.30)' },
      '--dsw-alias-border-l2': { light: 'rgba(59, 130, 246, 0.55)', dark: 'rgba(96, 165, 250, 0.55)' },
      '--dsw-alias-brand-primary': { light: '#2563c0', dark: '#5b9cf5' },
      '--dsw-alias-label-primary': { light: '#0d2a56', dark: '#eef4fd' },
      '--dsw-alias-label-secondary': { light: '#46608c', dark: '#a7bfe3' },
      '--dsw-alias-state-error-primary': { light: '#dc2626', dark: '#f87171' },
      '--dsw-alias-state-success-primary': { light: '#16a34a', dark: '#4ade80' },
      '--dsw-alias-state-warn-primary': { light: '#d97706', dark: '#fbbf24' },
      '--dsw-specific-sidebar-fill': { light: 'rgba(205, 224, 246, 0.66)', dark: 'rgba(9, 22, 50, 0.66)' },
    }

    const BASE_CSS = [
      ':root { --ds-theme-bg-image: linear-gradient(135deg, #dceaf8 0%, #9cc0e8 22%, #6b9ad8 45%, #3a6cb8 72%, #16325f 100%); }',
      'html, body { min-height: 100%; background-color: #a8c6e4; }',
      '.pI_x6G_centerCol { position: relative; overflow: hidden; background-color: #c8dcf0; background-image: linear-gradient(rgba(5, 14, 34, 0.18), rgba(5, 14, 34, 0.18)), var(--ds-theme-bg-image); background-size: cover, cover; background-position: center, center; background-repeat: no-repeat, no-repeat; }',
      '.pI_x6G_centerCol > * { background: transparent; }',
      'body:not([data-ds-dark-theme]) { --dsw-specific-bubble: #f6f9ff !important; }',
      '.hHd-Xa_footerActions { flex-wrap: wrap; }',
    ].join('\n')

    const OCEAN_WAVE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 12' preserveAspectRatio='none'%3E%3Cpath d='M0 6 C15 0 15 0 30 6 C45 12 45 12 60 6 C75 0 75 0 90 6 C105 12 105 12 120 6 L120 12 L0 12 Z' fill='%2338bdf8' fill-opacity='0.35'/%3E%3C/svg%3E"

    const OCEAN_GLASS = 'border: 1px solid transparent; background: linear-gradient(var(--dsh-ocean-glass), var(--dsh-ocean-glass)) padding-box, linear-gradient(135deg, rgba(125,211,252,0.18) 0%, rgba(37,99,180,0.45) 35%, rgba(56,189,248,0.45) 65%, rgba(186,230,253,0.25) 100%) border-box; backdrop-filter: blur(14px) saturate(150%); -webkit-backdrop-filter: blur(14px) saturate(150%); box-shadow: 0 0 0 1px rgba(56,189,248,0.05), 0 12px 32px rgba(10,40,90,0.16), 0 2px 8px rgba(10,40,90,0.10), inset 0 1px 0 rgba(255,255,255,0.45);'

    const OCEAN_CSS = [
      ':root { --dsh-ocean-glass: rgba(255, 255, 255, 0.62); }',
      'body[data-ds-dark-theme] { --dsh-ocean-glass: rgba(22, 38, 70, 0.5); }',
      '.gdEzaW_bubble { position: relative; ' + OCEAN_GLASS + ' }',
      '[data-composer-card] { position: relative; ' + OCEAN_GLASS + ' }',
      '.Sxvs8a_root { padding: 14px 18px; border-radius: 20px; position: relative; ' + OCEAN_GLASS + ' }',
      '.gdEzaW_bubble::before, [data-composer-card]::before, .Sxvs8a_root::before { content: ""; position: absolute; top: 1px; left: 10%; right: 10%; height: 6px; background-image: url("' + OCEAN_WAVE + '"); background-repeat: repeat-x; background-size: 48px 6px; pointer-events: none; opacity: 0.28; }',
      '.gdEzaW_bubble::after, [data-composer-card]::after, .Sxvs8a_root::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 22px; pointer-events: none; background-image: radial-gradient(circle at 88% 82%, rgba(186,230,253,0.4) 0 4px, transparent 5px), radial-gradient(circle at 8% 90%, rgba(125,211,252,0.35) 0 3px, transparent 4px), radial-gradient(circle at 92% 16%, rgba(255,255,255,0.35) 0 3px, transparent 4px); }',
    ].join('\n')

    const FLOURISH = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 36'%3E%3Cpath d='M4 24 C14 14 20 14 30 24 S46 34 56 24' fill='none' stroke='rgba(120,170,225,0.55)' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 30 C22 20 28 20 38 30' fill='none' stroke='rgba(200,167,106,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M72 12 L76 17 L81 19 L76 21 L72 26 L68 21 L63 19 L68 17 Z' fill='rgba(150,200,245,0.55)'/%3E%3Ccircle cx='60' cy='30' r='1.5' fill='rgba(200,167,106,0.5)'/%3E%3C/svg%3E"

    const WHALE_EMBLEM = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 46'%3E%3Cpath d='M14 26 C70 18 110 18 170 26 S240 34 265 26' fill='none' stroke='rgba(130,180,235,0.45)' stroke-width='1.4' stroke-linecap='round'/%3E%3Cpath d='M14 32 C70 24 110 24 170 32 S240 40 265 32' fill='none' stroke='rgba(200,175,130,0.3)' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M546 26 C490 18 450 18 390 26 S320 34 295 26' fill='none' stroke='rgba(130,180,235,0.45)' stroke-width='1.4' stroke-linecap='round'/%3E%3Cpath d='M546 32 C490 24 450 24 390 32 S320 40 295 32' fill='none' stroke='rgba(200,175,130,0.3)' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M180 20 L183 23.5 L180 27 L177 23.5 Z' fill='rgba(150,200,245,0.55)'/%3E%3Cpath d='M380 20 L383 23.5 L380 27 L377 23.5 Z' fill='rgba(150,200,245,0.55)'/%3E%3Cpath d='M280 8 C276 16 268 20 260 20 C262 26 270 30 280 30 C290 30 298 26 300 20 C292 20 284 16 280 8 Z' fill='rgba(120,185,245,0.75)' stroke='rgba(200,175,130,0.65)' stroke-width='1.2'/%3E%3Cpath d='M280 16 L285 22 L280 28 L275 22 Z' fill='rgba(170,215,250,0.9)' stroke='rgba(200,175,130,0.8)' stroke-width='1'/%3E%3C/svg%3E"

    const COMPOSER_CSS = [
      '[data-composer-card] { border: 1px solid transparent !important; background: linear-gradient(180deg, rgba(249,252,255,0.85), rgba(226,241,253,0.62)) padding-box, linear-gradient(135deg, rgba(140,195,245,0.45), rgba(205,230,252,0.7), rgba(140,195,245,0.35)) border-box !important; backdrop-filter: blur(18px) saturate(150%); -webkit-backdrop-filter: blur(18px) saturate(150%); box-shadow: 0 0 0 1px rgba(150,200,245,0.08), 0 10px 36px rgba(40,90,160,0.16), 0 0 28px rgba(150,205,250,0.2), inset 0 1px 0 rgba(255,255,255,0.6); }',
      '[data-composer-card]::before { content: ""; position: absolute; top: -22px; left: 50%; transform: translateX(-50%); width: 62%; aspect-ratio: 12.17; background-image: url("' + WHALE_EMBLEM + '"); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; pointer-events: none; z-index: 1; }',
      '[data-composer-card]::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 22px; pointer-events: none; background-image: radial-gradient(circle at 14px 14px, rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at calc(100% - 14px) 14px, rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at 14px calc(100% - 14px), rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at calc(100% - 14px) calc(100% - 14px), rgba(160,210,250,0.5) 0 4px, rgba(160,210,250,0.15) 4px 5px, transparent 6px), radial-gradient(circle at 22% 18%, rgba(186,230,253,0.28) 0 2px, transparent 3px), radial-gradient(circle at 66% 24%, rgba(186,230,253,0.22) 0 3px, transparent 4px), radial-gradient(circle at 30% 78%, rgba(186,230,253,0.2) 0 2px, transparent 3px), radial-gradient(circle at 78% 70%, rgba(186,230,253,0.18) 0 2px, transparent 3px); }',
      '[data-composer-card] .uV2eYG_add, [data-composer-card] .uV2eYG_tools button { width: 30px !important; height: 30px !important; border-radius: 50% !important; background: rgba(255,255,255,0.55) !important; border: 1px solid rgba(200,175,130,0.45) !important; box-shadow: 0 2px 6px rgba(40,90,160,0.12), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(150,200,245,0.25); color: #2f4a6b !important; transition: background-color 0.15s ease, box-shadow 0.15s ease; }',
      '[data-composer-card] .uV2eYG_add:hover, [data-composer-card] .uV2eYG_tools button:hover { background: rgba(255,255,255,0.75) !important; box-shadow: 0 0 0 1px rgba(150,200,245,0.4), 0 2px 8px rgba(120,180,240,0.25), inset 0 1px 0 rgba(255,255,255,0.8); }',
      '.uV2eYG_primary { width: 34px !important; height: 34px !important; border-radius: 50% !important; background: linear-gradient(180deg, rgba(150,200,245,0.7), rgba(110,170,225,0.6)) !important; border: 1px solid rgba(200,225,250,0.6) !important; box-shadow: 0 2px 8px rgba(60,120,190,0.25), inset 0 1px 0 rgba(255,255,255,0.5); color: #f2f8ff !important; }',
      '.uV2eYG_primary:hover:not(:disabled) { background: linear-gradient(180deg, rgba(165,212,248,0.8), rgba(125,182,235,0.7)) !important; box-shadow: 0 0 0 1px rgba(160,210,250,0.5), 0 2px 10px rgba(90,150,215,0.3), inset 0 1px 0 rgba(255,255,255,0.6); }',
      '[data-composer-card] textarea::placeholder { color: #7d97b8 !important; font-family: "STKaiti", "KaiTi", "STSong", "Georgia", serif; font-style: italic; letter-spacing: 0.04em; opacity: 0.9; }',
    ].join('\n')

    const PERMISSION_CSS = [
      '.uV2eYG_modes { position: relative; }',
      '.uV2eYG_modes [role="menu"] { position: absolute !important; left: 0 !important; right: auto !important; bottom: calc(100% + 8px) !important; top: auto !important; z-index: 1200 !important; width: 300px !important; box-sizing: border-box !important; background: #ffffff !important; border: 1px solid #dfe4ea !important; border-radius: 12px !important; box-shadow: 0 10px 30px rgba(30, 60, 100, 0.16) !important; padding: 6px !important; margin: 0 !important; max-height: none !important; overflow: visible !important; }',
      '.uV2eYG_modes [role="menu"] > [role="presentation"] { display: flex !important; flex-direction: column !important; gap: 2px !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] { display: flex !important; flex-direction: row !important; align-items: center !important; gap: 12px !important; width: 100% !important; min-height: 52px !important; height: auto !important; box-sizing: border-box !important; padding: 8px 12px !important; background: transparent !important; border: none !important; border-radius: 8px !important; text-align: left !important; color: #16335e !important; font-size: 14px !important; font-weight: 400 !important; opacity: 1 !important; visibility: visible !important; cursor: pointer !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"]:hover { background: rgba(59, 157, 245, 0.08) !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"]:has(> svg) { background: rgba(59, 157, 245, 0.10) !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > span:first-child { width: 36px !important; height: 36px !important; min-width: 36px !important; border-radius: 50% !important; background: rgba(59, 157, 245, 0.12) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; flex: none !important; color: #3B9DF5 !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > span:nth-child(2) { flex: 1 1 auto !important; min-width: 0 !important; color: #16335e !important; font-size: 14px !important; line-height: 20px !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }',
      '.uV2eYG_modes [role="menu"] [role="menuitem"] > svg { width: 16px !important; height: 16px !important; flex: none !important; color: #3B9DF5 !important; }',
    ].join('\n')

    const MODEL_CSS = [
      '._7KE1Ra_trigger { gap: 5px; }',
      '._7KE1Ra_triggerLabel { background: linear-gradient(90deg, #1d3f6e 0%, #2e6da8 45%, #3fa8d8 70%, #7fd4ec 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; font-size: 12px !important; font-weight: 700 !important; line-height: 18px !important; letter-spacing: 0.02em; font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif !important; filter: drop-shadow(0 1px 1px rgba(255,255,255,0.55)) drop-shadow(0 0 3px rgba(63,168,216,0.3)); }',
      '._7KE1Ra_triggerEffort { background: linear-gradient(90deg, #a97c3f 0%, #d9b36a 40%, #f0d48a 60%, #c9a05c 100%); -webkit-background-clip: text !important; background-clip: text !important; -webkit-text-fill-color: transparent !important; color: transparent !important; font-size: 12px !important; font-weight: 700 !important; line-height: 18px !important; letter-spacing: 0.03em; font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif !important; filter: drop-shadow(0 1px 1px rgba(255,255,255,0.5)) drop-shadow(0 0 4px rgba(233,196,124,0.45)); display: inline-flex; align-items: center; }',
      '._7KE1Ra_triggerEffort::before { content: "✦"; margin-right: 5px; color: rgba(150, 175, 205, 0.75); font-size: 8px; font-weight: 400; line-height: 1; text-shadow: 0 0 3px rgba(150, 200, 245, 0.6); }',
      '._7KE1Ra_chevron { color: #5d7fa6 !important; width: 11px !important; height: 11px !important; filter: drop-shadow(0 0 3px rgba(120, 180, 235, 0.5)); }',
    ].join('\n')

    const SIDEBAR_CSS = [
      ':root { --ocean-ice-glass: rgba(246, 251, 255, 0.6); --ocean-ice-panel: rgba(244, 250, 255, 0.82); --ocean-blue-line: rgba(120, 170, 225, 0.5); --ocean-blue-line-soft: rgba(120, 170, 225, 0.32); --ocean-gold: #c8a76a; --ocean-gold-soft: rgba(200, 167, 106, 0.5); --ocean-gold-faint: rgba(200, 167, 106, 0.28); --ocean-text: #16335e; --ocean-text-soft: #52749e; --ocean-hover: rgba(190, 220, 246, 0.5); --ocean-selected: rgba(150, 200, 245, 0.22); --ocean-shadow: 0 8px 24px rgba(40, 80, 140, 0.12); --ocean-shadow-sm: 0 2px 8px rgba(40, 80, 140, 0.08); --ds-new-session-scale: 1; }',
      'body[data-ds-dark-theme] { --dsw-specific-sidebar-fill: rgba(238, 246, 252, 0.94); }',
      '.hHd-Xa_root { background: linear-gradient(180deg, rgba(238, 246, 252, 0.94), rgba(222, 240, 250, 0.9)) !important; color: var(--ocean-text) !important; position: relative; overflow: hidden; }',
      // Bottom cartoon character as a BACKGROUND decoration: direct child of the
      // root, absolute, just above the bottom wave divider (root-relative
      // bottom 145px ≈ wave top), z-index 0 with pointer-events none — every
      // control (root children raised to z-index 1) stays above it, and the
      // root's overflow:hidden clips it to the sidebar bounds.
      '.hHd-Xa_root > :not(.uiskin-sidebar-sticker) { position: relative; z-index: 1; }',
      '.hHd-Xa_root > .uiskin-sidebar-sticker { position: absolute; left: 50%; transform: translateX(-50%); bottom: 145px; height: 96px; width: auto; object-fit: contain; z-index: 0; pointer-events: none; }',
      '.hHd-Xa_root.hHd-Xa_collapsed > .uiskin-sidebar-sticker { height: 40px; bottom: 44px; }',
      '.hHd-Xa_logoRow { height: auto; min-height: 60px; margin-bottom: 0; padding: 8px 12px; border-radius: 16px; background: var(--ocean-ice-glass); border: 1px solid var(--ocean-blue-line); box-shadow: var(--ocean-shadow), inset 0 0 0 1px var(--ocean-gold-faint); position: relative; }',
      '.hHd-Xa_logoRow::before, .hHd-Xa_logoRow::after { content: ""; position: absolute; top: 50%; width: 40px; height: 26px; background-image: url("' + FLOURISH + '"); background-size: contain; background-repeat: no-repeat; background-position: center; pointer-events: none; opacity: 0.6; }',
      '.hHd-Xa_logoRow::before { left: 4px; transform: translateY(-50%); }',
      '.hHd-Xa_logoRow::after { right: 4px; transform: translateY(-50%) scaleX(-1); }',
      // The brand wordmark ("DeepSeek HARNESS") is left exactly as the system
      // renders it — no themed HARNESS badge, no mask, no overlay. The color
      // is themed so the wordmark picks up the ocean text color; nudged 3px
      // right of the logo row's padding edge.
      '.hHd-Xa_brand { position: relative; color: var(--ocean-text) !important; margin-left: 8px; }',
      '.hHd-Xa_iconButton { box-sizing: border-box; color: var(--ocean-text) !important; border-radius: 50% !important; background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(214, 235, 252, 0.62)) !important; border: 1px solid rgba(120, 180, 235, 0.5) !important; box-shadow: 0 2px 8px rgba(60, 120, 190, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(150, 200, 245, 0.22) !important; backdrop-filter: blur(8px) saturate(140%); -webkit-backdrop-filter: blur(8px) saturate(140%); transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease; }',
      '.hHd-Xa_iconButton:hover { background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(226, 242, 254, 0.76)) !important; border-color: rgba(120, 180, 235, 0.72) !important; box-shadow: 0 0 0 1px rgba(150, 205, 250, 0.45), 0 3px 10px rgba(80, 140, 210, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.9) !important; transform: translateY(-1px); }',
      '.hHd-Xa_newSession { position: relative; width: 80%; margin: 0 auto 0; height: auto; aspect-ratio: 2.9 / 1; min-height: 0; background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; justify-content: center; align-items: center; gap: 8px; overflow: visible; transition: filter 0.15s ease; }',
      '.hHd-Xa_newSession::before { content: ""; position: absolute; left: 50%; top: 50%; width: 100%; height: 100%; transform: translate(-50%, -50%) scale(var(--ds-new-session-scale, 1)); transform-origin: center; background-image: var(--ds-new-session-skin, none); background-size: contain; background-repeat: no-repeat; background-position: center; pointer-events: none; will-change: transform; }',
      '.hHd-Xa_newSession svg { width: 18px !important; height: 18px !important; flex: none !important; pointer-events: none; }',
      '.hHd-Xa_newSessionLabel { font-size: 14px; font-weight: 600; line-height: 1; color: #173F73 !important; white-space: nowrap !important; max-width: none !important; pointer-events: none; }',
      '.hHd-Xa_newSession:hover { filter: brightness(1.08); }',
      '.hHd-Xa_newSession:focus-visible { outline: 2px solid rgba(90, 145, 205, 0.65); outline-offset: 2px; }',
      '.hHd-Xa_newSession:disabled { opacity: 0.5; }',
      '.qDHVXG_sectionHeader { margin-top: 0 !important; }',
      '.qDHVXG_sectionLabel { color: var(--ocean-text-soft); font-weight: 600; letter-spacing: 0.02em; }',
      '.qDHVXG_iconButton, .qDHVXG_searchButton { color: var(--ocean-text-soft); border-radius: 8px; }',
      '.qDHVXG_iconButton:hover, .qDHVXG_searchButton:hover { background: var(--ocean-hover); color: var(--ocean-text); }',
      '.qDHVXG_iconButton:focus-visible, .qDHVXG_searchButton:focus-visible { outline: 2px solid rgba(90, 145, 205, 0.65); outline-offset: 1px; }',
      '.YDXeBa_projectRow { box-sizing: border-box; height: 36px; margin: 2px 0; border-radius: 12px; background: var(--ocean-ice-panel); border: 1px solid var(--ocean-blue-line-soft); box-shadow: var(--ocean-shadow-sm), inset 0 0 0 1px var(--ocean-gold-faint); padding: 0 10px; color: var(--ocean-text); }',
      '.YDXeBa_projectRow:hover { background: rgba(240, 248, 255, 0.95); border-color: var(--ocean-blue-line); }',
      '.YDXeBa_projectRow .YDXeBa_title { color: var(--ocean-text); font-weight: 600; }',
      '.YDXeBa_sessionRow { box-sizing: border-box; height: 32px; margin: 1px 0; border-radius: 10px; border: 1px solid var(--ocean-gold-faint); box-shadow: var(--ocean-shadow-sm); padding: 0 8px; color: var(--ocean-text); background: transparent; }',
      '.YDXeBa_sessionRow:hover { background: var(--ocean-hover); border-color: var(--ocean-gold-soft); }',
      '.YDXeBa_sessionRow.YDXeBa_selected { background: var(--ocean-selected); border-color: var(--ocean-blue-line); box-shadow: inset 0 0 0 1px var(--ocean-blue-line), inset 0 0 10px rgba(150, 200, 245, 0.3); }',
      '.YDXeBa_sessionRow .YDXeBa_title { color: var(--ocean-text); }',
      '.YDXeBa_sessionRow .YDXeBa_time, .YDXeBa_sessionRow .YDXeBa_meta { color: var(--ocean-text-soft); }',
    ].join('\n')

    const FOOTER_CSS = [
      '.qDHVXG_fade { background: transparent !important; }',
      '.hHd-Xa_footArea, .hHd-Xa_footerActions, .hHd-Xa_settingsArea { background: transparent; border: none; box-shadow: none; }',
      '.Nqubda_layer { margin: 0; order: 1; }',
      '.hHd-Xa_settingsArea { position: relative; margin-top: 0; padding: 0 0 10px; }',
      '.VOzbGW_trigger { box-sizing: border-box; width: 94%; margin: 0 auto; height: auto; min-height: 0; background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; display: block; overflow: visible; transition: filter 0.15s ease, transform 0.1s ease; }',
      '.VOzbGW_trigger:hover { background: transparent !important; filter: brightness(1.08); transform: translateY(-1px); }',
      '.VOzbGW_trigger:active { transform: translateY(0); }',
      '.VOzbGW_trigger:focus-visible { outline: none; }',
    ].join('\n')

    // Keep the theme's injected <style> tags pinned at the END of <head> so
    // their rules always win the cascade. The app injects its own per-plugin
    // <style> tags as chunks load; on a cold first load some arrive AFTER our
    // tags and (equal specificity, no !important) would override the skin —
    // that made the sidebar color and the new-session button flicker between
    // themed and default across refreshes. For <style> tags, style-sheet order
    // follows DOM order, so re-appending ours on every head mutation pins them
    // last. App rules with higher specificity (e.g. .hHd-Xa_collapsed .x) still
    // win where intended.
    function keepThemeCssLast() {
      const observer = new MutationObserver(() => {
        const head = document.head
        const tags = [...head.querySelectorAll('style[data-plugin-css="uiskin-theme"]')]
        if (!tags.length) return
        if (tags.includes(head.lastElementChild)) return
        const fragment = document.createDocumentFragment()
        for (const tag of tags) fragment.appendChild(tag)
        head.appendChild(fragment)
      })
      observer.observe(document.head, { childList: true })
      return () => observer.disconnect()
    }


    // The system wordmark is one SVG: "DeepSeek" letters + a dark rounded chip
    // (rect x=129.3..181.3, y=5.5..19.5) carrying the HARNESS letters — whose
    // fill is var(--dsw-alias-label-primary-inverted), undefined here, so the
    // letters are invisible on the dark chip. This injects a real <svg> over the
    // letters (viewBox x=132.8..178.4, y=8.9..16.1 of the 182x24 wordmark),
    // re-drawing the same HARNESS letter paths filled with a gold gradient on
    // top of the chip. No CSS masks involved.
    function injectHarnessGold() {
      const PATHS = [
        "M132.848 8.93205H134.08V16.137H132.848V8.93205ZM136.5 8.93205H137.732V16.137H136.5V8.93205ZM133.365 13.024V11.99H137.193V13.024H133.365Z",
        "M140.397 14.432L140.672 13.453H143.202L143.532 14.432H140.397ZM140.287 16.137H139.055L141.277 8.93205H142.201L142.146 9.74605L140.947 13.915H140.969L140.287 16.137ZM145.039 16.137H143.741L143.07 13.948L143.081 13.937L141.871 9.74605L141.926 8.93205H142.817L145.039 16.137Z",
        "M146.846 8.93205H149.068C149.852 8.93205 150.443 9.11538 150.839 9.48205C151.235 9.84138 151.433 10.3327 151.433 10.956C151.433 11.22 151.396 11.4657 151.323 11.693C151.249 11.9204 151.125 12.1257 150.949 12.309C150.773 12.4924 150.531 12.65 150.223 12.782C149.922 12.9067 149.541 13.0057 149.079 13.079V13.321H146.846V12.639L148.023 12.485C148.631 12.4044 149.09 12.298 149.398 12.166C149.706 12.034 149.915 11.8764 150.025 11.693C150.135 11.5024 150.19 11.2934 150.19 11.066C150.19 10.6994 150.083 10.417 149.871 10.219C149.658 10.021 149.324 9.92205 148.87 9.92205H146.846V8.93205ZM146.395 8.93205H147.627V16.137H146.395V8.93205ZM151.917 16.093V16.137H150.366L149.024 14.322C148.87 14.1094 148.73 13.9407 148.606 13.816C148.481 13.684 148.345 13.5887 148.199 13.53C148.052 13.464 147.872 13.42 147.66 13.398C147.447 13.3687 147.176 13.3504 146.846 13.343V13.145H149.079C149.233 13.211 149.368 13.2844 149.486 13.365C149.61 13.4457 149.735 13.5447 149.86 13.662C149.992 13.7794 150.138 13.937 150.3 14.135L151.917 16.093Z",
        "M153.58 9.57005L153.591 8.93205H154.46L157.584 15.51V16.137H156.704L153.58 9.57005ZM158.024 16.137H156.968L156.88 8.93205H158.024V16.137ZM154.24 16.137H153.096V8.93205H154.152L154.24 16.137Z",
        "M159.963 8.93205H161.206V16.137H159.963V8.93205ZM160.095 9.96605V8.93205H164.858V9.96605H160.095ZM160.095 16.137V15.103H164.902V16.137H160.095ZM160.095 13.013V11.99H164.374V13.013H160.095Z",
        "M169.052 15.257C169.543 15.257 169.895 15.1654 170.108 14.982C170.328 14.7987 170.438 14.5457 170.438 14.223C170.438 14.047 170.405 13.8967 170.339 13.772C170.273 13.6474 170.152 13.5337 169.976 13.431C169.807 13.321 169.558 13.2147 169.228 13.112L168.491 12.881C167.846 12.6757 167.38 12.4044 167.094 12.067C166.808 11.7297 166.665 11.3007 166.665 10.78C166.665 10.428 166.76 10.1017 166.951 9.80105C167.142 9.50038 167.428 9.25838 167.809 9.07505C168.19 8.89172 168.663 8.80005 169.228 8.80005C169.631 8.80005 169.998 8.82938 170.328 8.88805C170.665 8.93938 171.039 9.01638 171.45 9.11905L171.274 10.175C170.834 10.0504 170.442 9.96238 170.097 9.91105C169.76 9.85238 169.463 9.82305 169.206 9.82305C168.737 9.82305 168.403 9.90738 168.205 10.076C168.007 10.2374 167.908 10.439 167.908 10.681C167.908 10.857 167.941 11.0147 168.007 11.154C168.073 11.286 168.19 11.407 168.359 11.517C168.535 11.627 168.784 11.7334 169.107 11.836L169.866 12.078C170.526 12.276 170.995 12.5327 171.274 12.848C171.553 13.156 171.692 13.585 171.692 14.135C171.692 14.5604 171.589 14.9344 171.384 15.257C171.179 15.5797 170.878 15.8327 170.482 16.016C170.093 16.1994 169.609 16.291 169.03 16.291C168.627 16.291 168.212 16.247 167.787 16.159C167.362 16.071 166.9 15.9427 166.401 15.774L166.665 14.718C167.156 14.894 167.6 15.0297 167.996 15.125C168.399 15.213 168.751 15.257 169.052 15.257Z",
        "M175.809 15.257C176.3 15.257 176.652 15.1654 176.865 14.982C177.085 14.7987 177.195 14.5457 177.195 14.223C177.195 14.047 177.162 13.8967 177.096 13.772C177.03 13.6474 176.909 13.5337 176.733 13.431C176.564 13.321 176.315 13.2147 175.985 13.112L175.248 12.881C174.603 12.6757 174.137 12.4044 173.851 12.067C173.565 11.7297 173.422 11.3007 173.422 10.78C173.422 10.428 173.517 10.1017 173.708 9.80105C173.899 9.50038 174.185 9.25838 174.566 9.07505C174.947 8.89172 175.42 8.80005 175.985 8.80005C176.388 8.80005 176.755 8.82938 177.085 8.88805C177.422 8.93938 177.796 9.01638 178.207 9.11905L178.031 10.175C177.591 10.0504 177.199 9.96238 176.854 9.91105C176.517 9.85238 176.22 9.82305 175.963 9.82305C175.494 9.82305 175.16 9.90738 174.962 10.076C174.764 10.2374 174.665 10.439 174.665 10.681C174.665 10.857 174.698 11.0147 174.764 11.154C174.83 11.286 174.947 11.407 175.116 11.517C175.292 11.627 175.541 11.7334 175.864 11.836L176.623 12.078C177.283 12.276 177.752 12.5327 178.031 12.848C178.31 13.156 178.449 13.585 178.449 14.135C178.449 14.5604 178.346 14.9344 178.141 15.257C177.936 15.5797 177.635 15.8327 177.239 16.016C176.85 16.1994 176.366 16.291 175.787 16.291C175.384 16.291 174.969 16.247 174.544 16.159C174.119 16.071 173.657 15.9427 173.158 15.774L173.422 14.718C173.913 14.894 174.357 15.0297 174.753 15.125C175.156 15.213 175.508 15.257 175.809 15.257Z"
      ];
      let holder = null;
      function build() {
        const brand = document.querySelector('.hHd-Xa_brand');
        if (!brand || holder) return;
        holder = document.createElement('span');
        holder.className = 'uiskin-harness-gold';
        holder.setAttribute('aria-hidden', 'true');
        holder.style.cssText = 'position:absolute;left:132.8px;top:8.9px;width:45.6px;height:7.2px;box-sizing:border-box;pointer-events:none;';
        const NS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '132.8 8.9 45.6 7.2');
        svg.setAttribute('width', '45.6');
        svg.setAttribute('height', '7.2');
        svg.style.display = 'block';
        const defs = document.createElementNS(NS, 'defs');
        const grad = document.createElementNS(NS, 'linearGradient');
        grad.setAttribute('id', 'uiskin-harness-gold-grad');
        grad.setAttribute('x1', '0'); grad.setAttribute('y1', '0'); grad.setAttribute('x2', '1'); grad.setAttribute('y2', '0');
        for (const [off, col] of [['0%', '#a97c3f'], ['40%', '#d9b36a'], ['60%', '#f0d48a'], ['100%', '#c9a05c']]) {
          const stop = document.createElementNS(NS, 'stop');
          stop.setAttribute('offset', off); stop.setAttribute('stop-color', col);
          grad.appendChild(stop);
        }
        defs.appendChild(grad);
        svg.appendChild(defs);
        for (const d of PATHS) {
          const p = document.createElementNS(NS, 'path');
          p.setAttribute('d', d);
          p.setAttribute('fill', 'url(#uiskin-harness-gold-grad)');
          svg.appendChild(p);
        }
        holder.appendChild(svg);
        brand.appendChild(holder);
      }
      build();
      const observer = new MutationObserver(build);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => { observer.disconnect(); if (holder) holder.remove(); };
    }

    // The bottom cartoon character becomes a BACKGROUND decoration of the
    // sidebar: injected as a direct child of the sidebar root, absolutely
    // positioned just above the bottom wave divider, with z-index 0 and
    // pointer-events none so every control stays above it. The root's
    // overflow:hidden clips it to the sidebar bounds; the size (96px wide /
    // 40px collapsed) comes from CSS so it follows the sidebar state.
    function injectSidebarSticker() {
      let img = null;
      function build() {
        const root = document.querySelector('.hHd-Xa_root');
        if (!root || img) return;
        img = document.createElement('img');
        img.className = 'uiskin-sidebar-sticker';
        img.src = STICKER_URI;
        img.alt = '';
        img.draggable = false;
        root.appendChild(img);
      }
      build();
      const observer = new MutationObserver(build);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => { observer.disconnect(); if (img) img.remove(); };
    }

    function apply(ctx) {
      ctx.effect(() => {
        const disposers = []
        const theme = ctx.theme
        if (theme !== undefined) {
          disposers.push(theme.overrideTokens('blue-glass-theme', TOKENS))
        }
        disposers.push(keepThemeCssLast())
        disposers.push(injectHarnessGold())
        disposers.push(injectSidebarSticker())
        disposers.push(insertStyle(BASE_CSS))
        disposers.push(insertStyle(OCEAN_CSS))
        disposers.push(insertStyle(COMPOSER_CSS))
        disposers.push(insertStyle(PERMISSION_CSS))
        disposers.push(insertStyle(MODEL_CSS))
        disposers.push(insertStyle(SIDEBAR_CSS))
        disposers.push(insertStyle(FOOTER_CSS))
        return () => { for (let i = 0; i < disposers.length; i++) disposers[i]() }
      })

      ctx.effect(() => {
        const disposers = []
        disposers.push(insertStyle(':root { --ds-theme-bg-image: url("' + BG_URI + '"); }'))
        disposers.push(insertStyle(':root { --ds-new-session-skin: url("' + NEW_SESSION_SKIN_URI + '"); }'))
        return () => { for (let i = 0; i < disposers.length; i++) disposers[i]() }
      })

      function SettingsWhaleButton(props) {
        return React.createElement('img', {
          src: SETTINGS_DECOR_URI,
          alt: '设置',
          role: 'img',
          draggable: false,
          style: {
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          },
        })
      }

      function SidebarDivider(props) {
        return React.createElement('div', {
          style: { flexBasis: '100%', order: 0, display: 'flex', justifyContent: 'center', padding: '2px 6px 0', background: 'transparent', pointerEvents: 'none' },
        }, React.createElement('img', {
          src: SETTINGS_DIVIDER_URI,
          alt: '',
          draggable: false,
          style: { width: '100%', height: 44, objectFit: 'cover', display: 'block' },
        }))
      }

      function SidebarSticker(props) {
        // Layout placeholder only: keeps the footer flow exactly as before so the
        // wave divider stays put. The actual character is injected by
        // injectSidebarSticker() as an absolutely-positioned background layer of
        // the sidebar root (below all controls, clipped by the sidebar).
        const wide = !!(props && props.wide)
        return React.createElement('div', {
          style: { flexBasis: '100%', order: -1, flex: 'none', width: 118, height: wide ? 96 : 40, background: 'transparent', pointerEvents: 'none' },
        })
      }

      const slots = ctx.slots
      if (slots !== undefined) {
        // settings.trigger is a SINGLE slot also claimed by the built-in
        // settings-general trigger at priority 0. Shadow it with a negative
        // priority (lowest renders) — the dynamic runner did the same by
        // allocating a unique descending priority per registration.
        slots.inject('settings.trigger', () => slots.register(
          { name: 'settings.trigger', priority: -100 },
          (props) => React.createElement(SettingsWhaleButton, props),
        ))
        slots.inject('sidebar.footer.action', () => slots.register(
          { name: 'sidebar.footer.action', id: 'theme-divider', order: 0, label: '' },
          (props) => React.createElement(SidebarDivider, props),
        ))
        slots.inject('sidebar.footer.action', () => slots.register(
          { name: 'sidebar.footer.action', id: 'theme-sticker', order: 0, label: '主题贴图' },
          (props) => React.createElement(SidebarSticker, props),
        ))
      }
    }

    const inject = ["theme", "slots"];

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
