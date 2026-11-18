const notice = document.querySelector('.notice');
    let noticeTimer;
    document.querySelectorAll('[data-demo-action]').forEach((button) => {
      button.addEventListener('click', () => {
        notice.textContent = `${button.dataset.demoAction} is disabled in this demo.`;
        notice.classList.add('visible');
        clearTimeout(noticeTimer);
        noticeTimer = setTimeout(() => notice.classList.remove('visible'), 2400);
      });
    });
