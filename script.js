const codes = document.querySelectorAll('.code');

if (codes.length > 0) {
  codes[0].focus();
}

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 1);

    if (e.target.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (code.value === '' && index > 0) {
        codes[index - 1].value = '';
        codes[index - 1].focus();
      }
    }
  });
});