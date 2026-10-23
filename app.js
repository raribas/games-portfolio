(function () {
  'use strict';
  var T = {
    en: {
      skip: 'Skip to games', hero_title: 'Small games. Big merges.',
      hero_lead: 'Handmade games by aribas.dev. Play instantly in your browser or install them on your phone. No ads, no tracking.',
      hero_cta: 'See the games', games_h: 'Games', shots_label: 'Screenshots',
      shot1: 'Merge Defense main menu', shot2: 'Choosing a five-hero deck', shot3: 'A 1v1 match against the bot',
      chip_deck: 'Deck merge',
      md_desc: 'A Rush-Royale-style tower defense. Build a deck of five heroes, merge matching ones to level them up, and send enemies to your opponent in 1v1 or team up in co-op. Beat the boss before the timer runs out.',
      play: 'Play in browser', version: 'Version', date: 'Date', build: 'Build', size: 'Size', min: 'Requires',
      soon: 'Coming soon', fallback: 'Release info is not reachable right now. Please try again later.',
      sample_note: 'Sample data: the download links below are placeholders until the first release is published.',
      dl_ios: 'Download iOS (IPA)', dl_and: 'Download Android (APK)', changelog: 'Changelog', no_log: 'No changelog available yet.',
      upd_ios_h: 'iOS: install and update', upd_and_h: 'Android: install and update',
      altstore_add: 'Add to AltStore', sidestore_add: 'Add to SideStore', source_url: 'Source URL:',
      ios_1: 'AltStore or SideStore (recommended): add the source with the button above, then install Merge Defense. Updates then appear in the app.',
      ios_2: 'Sideloadly: download the IPA above and install it from your computer. For updates, download the new IPA and install it again.',
      ios_3: 'Apps installed with a free Apple ID expire after 7 days and must be refreshed (AltStore and SideStore can do this automatically).',
      and_1: 'Download the APK above and open it.',
      and_2: 'If asked, allow installing from this source ("unknown sources") for your browser or file manager.',
      and_3: 'To update, download the newest APK and install it over the old one. Your data is kept.',
      ingame: 'The game shows an in-game hint when a newer version is available.',
      imprint: 'Imprint', privacy: 'Privacy', back: 'Back to start',
      imp_title: 'Imprint', imp_notice: 'Placeholder page. The site owner has to enter the legally required details here (name, address, contact) before this site is promoted.',
      imp_name: 'Name: [to be filled in]', imp_addr: 'Address: [to be filled in]', imp_mail: 'Email: [to be filled in]',
      priv_title: 'Privacy', priv_notice: 'Placeholder page. The site owner has to review and complete this text.',
      priv_1: 'This site is static. It does not use cookies, analytics, tracking or external fonts and scripts.',
      priv_2: 'Your language choice is stored only in your browser (localStorage). It is never sent anywhere.',
      priv_3: 'On every visit the hosting server processes technical access data (IP address, time, requested file) in order to deliver the site. Controller and retention details: [to be filled in].',
      priv_4: 'Downloads and the browser game may be served from other hosts (for example GitHub or td.wostools.com), which process your IP address when you open them.'
    },
    de: {
      skip: 'Zu den Spielen springen', hero_title: 'Kleine Spiele. Große Merges.',
      hero_lead: 'Selbstgemachte Spiele von aribas.dev. Sofort im Browser spielen oder auf dem Handy installieren. Ohne Werbung, ohne Tracking.',
      hero_cta: 'Spiele ansehen', games_h: 'Spiele', shots_label: 'Screenshots',
      shot1: 'Hauptmenü von Merge Defense', shot2: 'Auswahl eines Decks mit fünf Helden', shot3: 'Ein 1v1-Match gegen den Bot',
      chip_deck: 'Deck-Merge',
      md_desc: 'Ein Tower Defense im Stil von Rush Royale. Stelle ein Deck aus fünf Helden zusammen, verschmelze gleiche Helden zu höheren Stufen und schicke Gegner im 1v1 zu deinem Gegenspieler oder kämpfe im Koop zusammen. Besiege den Boss, bevor die Zeit abläuft.',
      play: 'Im Browser spielen', version: 'Version', date: 'Datum', build: 'Build', size: 'Größe', min: 'Benötigt',
      soon: 'Bald verfügbar', fallback: 'Die Release-Infos sind gerade nicht erreichbar. Bitte später erneut versuchen.',
      sample_note: 'Beispieldaten: Die Download-Links unten sind Platzhalter, bis das erste Release veröffentlicht ist.',
      dl_ios: 'iOS (IPA) herunterladen', dl_and: 'Android (APK) herunterladen', changelog: 'Changelog', no_log: 'Noch kein Changelog vorhanden.',
      upd_ios_h: 'iOS: Installation und Updates', upd_and_h: 'Android: Installation und Updates',
      altstore_add: 'Zu AltStore hinzufügen', sidestore_add: 'Zu SideStore hinzufügen', source_url: 'Quellen-URL:',
      ios_1: 'AltStore oder SideStore (empfohlen): Quelle über den Button oben hinzufügen und Merge Defense installieren. Updates erscheinen dann in der App.',
      ios_2: 'Sideloadly: IPA oben herunterladen und vom Computer installieren. Für Updates die neue IPA laden und erneut installieren.',
      ios_3: 'Mit einer kostenlosen Apple-ID installierte Apps laufen nach 7 Tagen ab und müssen erneuert werden (AltStore und SideStore können das automatisch).',
      and_1: 'APK oben herunterladen und öffnen.',
      and_2: 'Falls gefragt, die Installation aus dieser Quelle ("unbekannte Quellen") für Browser oder Dateimanager erlauben.',
      and_3: 'Für Updates die neueste APK herunterladen und über die alte installieren. Deine Daten bleiben erhalten.',
      ingame: 'Das Spiel zeigt einen Hinweis im Spiel, sobald eine neuere Version verfügbar ist.',
      imprint: 'Impressum', privacy: 'Datenschutz', back: 'Zurück zur Startseite',
      imp_title: 'Impressum', imp_notice: 'Platzhalterseite. Der Betreiber muss hier die gesetzlich vorgeschriebenen Angaben (Name, Anschrift, Kontakt) eintragen, bevor die Seite beworben wird.',
      imp_name: 'Name: [wird ergänzt]', imp_addr: 'Anschrift: [wird ergänzt]', imp_mail: 'E-Mail: [wird ergänzt]',
      priv_title: 'Datenschutz', priv_notice: 'Platzhalterseite. Der Betreiber muss diesen Text prüfen und vervollständigen.',
      priv_1: 'Diese Seite ist statisch. Sie verwendet keine Cookies, keine Analyse- oder Tracking-Dienste und keine externen Schriften oder Skripte.',
      priv_2: 'Deine Sprachauswahl wird nur in deinem Browser gespeichert (localStorage) und nirgendwohin gesendet.',
      priv_3: 'Bei jedem Besuch verarbeitet der Hosting-Server technische Zugriffsdaten (IP-Adresse, Zeitpunkt, angeforderte Datei), um die Seite auszuliefern. Verantwortlicher und Speicherdauer: [wird ergänzt].',
      priv_4: 'Downloads und das Browserspiel können von anderen Servern ausgeliefert werden (z. B. GitHub oder td.wostools.com), die beim Aufruf deine IP-Adresse verarbeiten.'
    }
  };

  var lang = 'en';
  try { lang = localStorage.getItem('lang') || ''; } catch (e) {}
  if (lang !== 'de' && lang !== 'en') lang = /^de/i.test(navigator.language || '') ? 'de' : 'en';
  var game = null, loaded = false;

  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }
  function $(id) { return document.getElementById(id); }
  function mb(n) { return (n / 1048576).toFixed(1).replace('.', lang === 'de' ? ',' : '.') + ' MB'; }
  function fmtDate(s) {
    var d = new Date(s);
    if (isNaN(d)) return '-';
    return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', { dateStyle: 'medium' }).format(d);
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function safeUrl(u) { return typeof u === 'string' && /^https?:\/\//i.test(u) ? u : null; }

  function dlBox(slot, info, urlKey, label, extra, sample) {
    slot.textContent = '';
    var url = info && safeUrl(info[urlKey]);
    if (!url) { slot.appendChild(el('span', 'soon', t('soon'))); return; }
    var p = el('p', 'actions');
    var a = el('a', 'btn primary', label);
    a.href = url; a.rel = 'noopener'; a.setAttribute('download', '');
    if (sample) a.setAttribute('aria-disabled', 'true');
    p.appendChild(a); slot.appendChild(p);
    var bits = [];
    if (info.size) bits.push(t('size') + ': ' + mb(info.size));
    if (extra) bits.push(extra);
    if (bits.length) slot.appendChild(el('p', 'small', bits.join(' · ')));
    if (info.sha256) slot.appendChild(el('p', 'hash', 'SHA-256: ' + info.sha256));
  }

  function renderGame() {
    var sample = !!(window.__sample);
    $('sample-note').hidden = !(loaded && sample);
    $('load-fallback').hidden = loaded;
    var g = game;
    $('m-version').textContent = g && g.version ? 'v' + g.version : '-';
    $('m-date').textContent = g && g.updated ? fmtDate(g.updated) : '-';
    $('m-build').textContent = g && g.build != null ? g.build : '-';
    dlBox($('ios-slot'), g && g.ios, 'ipa', t('dl_ios'), g && g.ios && g.ios.min_os ? t('min') + ' iOS ' + g.ios.min_os : '', sample);
    dlBox($('and-slot'), g && g.android, 'apk', t('dl_and'), g && g.android && g.android.min_sdk ? t('min') + ' Android API ' + g.android.min_sdk : '', sample);
    var ul = $('changelog'); ul.textContent = '';
    var items = g && g.changelog && (g.changelog[lang] || g.changelog.en);
    if (items && items.length) items.forEach(function (s) { ul.appendChild(el('li', null, String(s))); });
    else ul.appendChild(el('li', null, t('no_log')));
    if (g && safeUrl(g.web)) document.querySelector('[data-i18n=play]').href = g.web;
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (n) { n.alt = t(n.getAttribute('data-i18n-alt')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    var b = $('lang'); if (b) b.textContent = lang === 'de' ? 'EN' : 'DE';
    if ($('m-version')) renderGame();
  }

  $('lang').addEventListener('click', function () {
    lang = lang === 'de' ? 'en' : 'de';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply();
  });
  apply();

  if ($('m-version')) {
    fetch('/latest.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (j) {
        var gs = (j && j.games) || [];
        game = gs.filter(function (x) { return x.id === 'merge-defense'; })[0] || null;
        window.__sample = !!j.sample;
        loaded = !!game;
        renderGame();
      })
      .catch(function () { loaded = false; renderGame(); });
  }
})();
