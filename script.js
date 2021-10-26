const text = () => {
  let input = document.querySelector('input');
  const paragraph = document.getElementById('text');
  let debouncedFn;

  function debounce(func, wait) {
    let timeout;

    return function () {
      const later = function() {
        timeout = null;
        func.call();
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const updateInput = () => {
    paragraph.textContent = input.value;
  }
  debouncedFn = debounce(updateInput,300)

  input.addEventListener("input", debouncedFn);
}
text();
