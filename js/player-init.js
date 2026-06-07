/* ═══════════════════════════════════════════
   player-init.js — shared music player
   sauta.trancymzk.xyz
   APlayer: https://github.com/DIYgod/APlayer
   ═══════════════════════════════════════════ */

(function () {
  function initAPlayer() {
    if (typeof APlayer === 'undefined') {
      console.warn('[sauta] APlayer not loaded');
      return;
    }

    var container = document.createElement('div');
    container.id = 'ap-global';
    document.body.appendChild(container);

    var ap = new APlayer({
      container: container,
      fixed: true,       // fixed bottom bar
      mini: true,        // collapsed by default
      autoplay: false,
      theme: '#55CDFC',
      loop: 'all',
      order: 'list',
      preload: 'auto',
      volume: 0.6,
      mutex: true,
      lrcType: 0,
      audio: [
        {
          name: 'sakuramain',
          artist: '早川咲詩',
          url: './sounds/sakuramain.ogg',
          cover: './images/sautaLOGO.png',
          theme: '#55CDFC'
        }
        /* ── add tracks here ──
        {
          name: "CarCrash'n'Siren",
          artist: '早川咲詩',
          url: './sounds/carcrashndsiren.ogg',
          cover: './images/carcrashndsiren.jpg',
          theme: '#F7A8B8'
        }
        */
      ]
    });

    // sync "currently listening" sidebar element if it exists
    var nowEl = document.getElementById('now-playing');
    if (nowEl) {
      ap.on('play', function () {
        var info = ap.info;
        if (info) {
          nowEl.textContent = info.name;
          nowEl.style.opacity = '1';
          nowEl.style.color = 'var(--white)';
        }
      });
      ap.on('pause', function () {
        if (nowEl) nowEl.style.opacity = '0.4';
      });
    }

    // expose globally for other scripts / DPlayer mutex
    window.sautaPlayer = ap;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAPlayer);
  } else {
    initAPlayer();
  }
})();
