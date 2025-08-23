 const WHATSAPP_LINK = 'https://wa.me/+27743494640?text=I\'m%20interested%20in%20pre-ordering%20CyberWear';
  const DISCORD_LINK  = 'https://discord.gg/your-preorder-link';
  document.getElementById('whatsappBtn').href = WHATSAPP_LINK;
  document.getElementById('discordBtn').href = DISCORD_LINK;

  (function(){
    const container = document.getElementById('parallax');
    const layers = container.querySelectorAll('.layer');
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      layers.forEach(el => { const depth = parseFloat(el.getAttribute('data-depth')||'0'); el.style.transform = `translate3d(0, ${y*depth*0.6}px, 0)`; });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
  })();

  (function(){
    const canvas = document.getElementById('codeRain');
    const ctx = canvas.getContext('2d');
    const symbols = '01{}[]<>=+-*/%&|^~$#@!?;:.,\"\'()`';
    let width, height, columns, drops;
    function resize(){ width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; columns = Math.floor(width/16); drops = Array.from({length:columns},()=>Math.random()*-height); }
    function draw(){ ctx.fillStyle='rgba(10,10,10,0.08)'; ctx.fillRect(0,0,width,height); ctx.fillStyle='#10b981'; ctx.font='16px ui-monospace, Menlo, Monaco, Consolas, Courier, monospace'; for(let i=0;i<drops.length;i++){ const char=symbols[Math.floor(Math.random()*symbols.length)]; const x=i*16; const y=drops[i]*16; ctx.fillText(char,x,y); drops[i]+=(Math.random()*0.9+0.6); if(y>height&&Math.random()>0.975)drops[i]=Math.random()*-20; } requestAnimationFrame(draw); }
    window.addEventListener('resize',resize); resize(); draw();
  })();
