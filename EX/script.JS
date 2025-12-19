const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const result = document.getElementById('result');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selected = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        selected.push(cb.value);
      }
    });

    result.textContent = selected.length > 0
      ? `Ви знаєте: ${selected.join(', ')}`
      : 'Ви знаєте: —';
  });
});
