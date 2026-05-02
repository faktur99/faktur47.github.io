(function waitForChart(){
  function init(){
    const data={labels:['Bahasa Indonesia','English'],datasets:[{data:[80,20],backgroundColor:['#0033A0','#6c757d'],hoverOffset:8}]};
    const cfg={type:'doughnut',data:data,options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}};
    const canvas=document.getElementById('langChart');
    if(canvas){canvas.style.height='260px'; const ctx=canvas.getContext('2d'); new Chart(ctx,cfg);}    
  }
  if (window.Chart) return init();
  setTimeout(waitForChart, 150);
})();
