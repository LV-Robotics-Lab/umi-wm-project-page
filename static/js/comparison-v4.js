(() => {
  const player = document.getElementById('comparison-player');
  const caption = document.getElementById('comparison-caption');
  const choices = document.querySelectorAll('.comparison-choice');
  let resumePlayback = false;
  player.addEventListener('loadedmetadata', () => {
    if (resumePlayback) player.play().catch(() => { resumePlayback = false; });
  });
  choices.forEach(button => button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    resumePlayback = !player.paused;
    const title = button.textContent;
    const base = `assets/comparison-v4-${button.dataset.case}`;
    choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    player.poster = `${base}.jpg`;
    player.setAttribute('aria-label', `Nine-panel paired-wrist comparison: ${title}`);
    player.querySelector('source').src = `${base}.mp4`;
    player.querySelector('a').href = `${base}.mp4`;
    caption.textContent = title;
    player.load();
  }));
})();
