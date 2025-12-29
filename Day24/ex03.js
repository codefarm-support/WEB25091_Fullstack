setTimeout(() => {
  document.body.innerHTML = `
    <div class="modal">
      <button class="close-btn">X</button>
      <h2>Sale 50%</h2>
      <p>CODEFARM</p>
    </div>
  `;

  const closeBtn = document.querySelector('.close-btn');
  const modal = document.querySelector('.modal');

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.remove(); 
  });
}, 2000);
