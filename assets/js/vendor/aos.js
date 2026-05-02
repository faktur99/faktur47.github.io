// Local fallback for AOS (lightweight stub)
window.AOS = window.AOS || {
  init: function(options){
    console.info('AOS.init() fallback called');
  }
};
