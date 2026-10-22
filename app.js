const grid=document.querySelector('#project-grid');
const dialog=document.querySelector('#project-dialog');
let lastTrigger;
function renderProjects(filter='All') {
 const shown=projects.filter(p=>filter==='All'||p.category===filter);
 grid.innerHTML=shown.map(p=>`<article class="project-card"><button class="project-image" data-project="${p.id}" aria-label="Explore ${p.title}"><img src="${p.images[0]}" alt="${p.title} project" loading="lazy" width="750" height="500"><span class="open-arrow" aria-hidden="true">↗</span></button><div class="card-copy"><div class="project-meta"><span>${p.category}</span><span>0${projects.indexOf(p)+1}</span></div><h3><button data-project="${p.id}">${p.title}</button></h3><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></article>`).join('');
 document.querySelector('#project-count').textContent=`Showing ${shown.length} projects`;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
 renderProjects(button.dataset.filter);
}));
grid.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-project]');if(!trigger)return;
 const p=projects.find(item=>item.id===trigger.dataset.project);lastTrigger=trigger;
 document.querySelector('#dialog-content').innerHTML=`<div class="dialog-body"><p class="eyebrow">${p.category}</p><h2 id="dialog-title">${p.title}</h2><p>${p.description}</p><ul>${p.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p class="gallery-note">Project gallery · Select an image to view it at full size.</p><div class="gallery">${p.images.map((src,i)=>`<a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.title} image ${i+1}"><img src="${src}" alt="${p.title} — project image ${i+1}" loading="lazy"></a>`).join('')}</div></div>`;
 dialog.showModal();document.body.classList.add('modal-open');
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});
const navLinks=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
document.querySelector('#year').textContent=new Date().getFullYear();renderProjects();
