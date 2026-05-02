(function(){
  async function loadInclude(el){
    const url = el.getAttribute('data-include');
    if (!url) return;
    try{
      const res = await fetch(url);
      if (!res.ok) return;
      const text = await res.text();
      el.innerHTML = text;
      // execute scripts in loaded content
      const tmp = document.createElement('div'); tmp.innerHTML = text;
      const scripts = tmp.querySelectorAll('script');
      scripts.forEach(s => {
        const ns = document.createElement('script');
        if (s.src) {
          ns.src = s.src;
          ns.async = false;
        } else {
          ns.textContent = s.textContent;
        }
        document.body.appendChild(ns);
      });
    }catch(err){
      console.error('include failed', url, err);
    }
  }

  function init(){
    const els = document.querySelectorAll('[data-include]');
    els.forEach(el => loadInclude(el));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
