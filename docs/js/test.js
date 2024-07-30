document.addEventListener('DOMContentLoaded', () => {

  const svgContainer = document.querySelector('.main-visual');
  const svgSources = [
    './svg/leaf-1.svg',
    './svg/leaf-2.svg',
    './svg/leaf-3.svg',
    './svg/leaf-4.svg',
    './svg/leaf-5.svg'
  ]

  let currentBreakpoint = window.matchMedia("(min-width: 768px)").matches ? 'pc' : 'sp';
  
  const applyAnimation = () =>{
    const isPC = window.matchMedia("(min-width: 768px)").matches;
    const pathId = isPC ? 'animationPath_pc' : 'animationPath_sp';
    const path = document.querySelector(`#${pathId}`);
    const svgCount = isPC ? 15 : 10;
    let delayTime = 0;

    //既存のdiv要素を削除
    svgContainer.innerHTML = '';
    
    for(let i = 1;i <= svgCount;i++){
      //img要素の生成
      const div = document.createElement('div');
      div.style.backgroundImage = `url(${svgSources[(i - 1) % svgSources.length]})`;
      div.className = 'leaf animationPath';
      
      //アニメーション付与
      div.style.offsetPath = `path('${path.getAttribute('d')}')`; //img要素にpath軌道を設定
      div.style.animationDelay = `${delayTime}s`;
      
      svgContainer.appendChild(div);
      
      delayTime++;
    
  }
}

const checkBreakpoint = () =>{
  const isPC = window.matchMedia("(min-width: 768px)").matches;
  const newBreakpoint = isPC ? 'pc' : 'sp';

  if(newBreakpoint !== currentBreakpoint){
    currentBreakpoint = newBreakpoint;
    applyAnimation();
  }
}

window.addEventListener('resize',checkBreakpoint);

//初回実行
applyAnimation();
});