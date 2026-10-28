(() => {
  'use strict';
  const INITIAL = 14;
  const MAXIMUM = 9400;
  const KEY = 'pka-shiny-swampert-project-2-brokes-v1';
  const input = document.querySelector('#brokes');
  const progress = document.querySelector('.progress');
  const formatter = new Intl.NumberFormat('pt-BR');
  const percentFormatter = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  let current = INITIAL;
  let editing = false;

  function clamp(value) {
    return Math.min(MAXIMUM, Math.max(0, Number.isFinite(value) ? Math.trunc(value) : INITIAL));
  }

  function readStored() {
    try {
      const stored = localStorage.getItem(KEY);
      return stored !== null && /^\d+$/.test(stored) ? clamp(Number(stored)) : INITIAL;
    } catch {
      return INITIAL;
    }
  }

  function render() {
    const percent = current / MAXIMUM * 100;
    if (!editing) input.value = formatter.format(current);
    document.querySelector('#progress-fill').style.width = `${percent}%`;
    document.querySelector('#percentage').textContent = `${percentFormatter.format(percent)}%`;
    document.querySelector('#remaining').textContent = formatter.format(MAXIMUM - current);
    progress.setAttribute('aria-valuenow', String(current));
    progress.setAttribute('aria-valuetext', `${formatter.format(current)} de ${formatter.format(MAXIMUM)} brokes`);
  }

  function setValue(value) {
    current = clamp(value);
    try { localStorage.setItem(KEY, String(current)); } catch { /* Storage may be disabled in a browser source. */ }
    render();
  }

  input.addEventListener('focus', () => {
    editing = true;
    input.value = String(current);
    input.select();
  });
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, 4);
    if (input.value !== '') setValue(Number(input.value));
  });
  input.addEventListener('blur', () => { editing = false; render(); });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') input.blur();
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      setValue(current + (event.key === 'ArrowUp' ? 1 : -1));
      input.value = String(current);
    }
  });
  document.querySelector('#increase').addEventListener('click', () => setValue(current + 1));
  document.querySelector('#decrease').addEventListener('click', () => setValue(current - 1));
  window.addEventListener('storage', (event) => {
    if (event.key === KEY || event.key === null) { current = readStored(); render(); }
  });
  current = readStored();
  render();
})();
