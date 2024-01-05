import{a as b,i as n,S as M,t as _,d as R,h as E,F as A,u as O,b as H,s as U}from"./web-019beeb5.js";/* empty css               */import{m as $,s as N,T as P,p as k}from"./signal-b811acff.js";import{T as a}from"./text-2f0fd6cd.js";import{P as Y}from"./paymentItem-c5bbf25e.js";import{P as j}from"./payInfoItem-3ee7f605.js";const D=_("<div class=alert>");function F(e){return b(M,{get when(){return e.trigger},get children(){const t=D();return n(t,()=>e.message),t}})}const W=_("<div class=wrap>"),X=_("<div class=ctn><div class=ctn_header><div class=title></div><button></button></div><div class=ctn_body><div class=member_list></div><form class=member_input><div class=wrap><input type=text><button type=submit>"),q=_("<div class=guide>이름을 입력하고 [추가]버튼을 눌러보세요!"),z=_("<button class=button_delete>"),G=_("<span class=item><span>");function pe(){const[e,t]=E({show:!1,message:""}),[s,l]=E(0);let i,c;const o=r=>{t({show:!0,message:r}),clearTimeout(c),c=setTimeout(()=>t({...e(),show:!1}),2e3)},d=r=>{r.preventDefault();const u=i.value.trim();if(u!==""){if($.exist(u)){o(a.member.alert_duplicate);return}i.value="",$.add(u)}};return(()=>{const r=X(),u=r.firstChild,x=u.firstChild,S=x.nextSibling,h=u.nextSibling,v=h.firstChild,y=v.nextSibling,T=y.firstChild,C=T.firstChild,w=C.nextSibling;return n(x,()=>a.member.title),S.$$click=()=>{$.count<2?o("2명 이상이어야 해요."):N(P.MONEY)},n(S,()=>$.count+a.member.button),h.$$click=()=>l(0),n(v,b(M,{get when(){return $.count!==0},get fallback(){return q()},get children(){const p=W();return n(p,b(A,{get each(){return $.list},children:f=>(()=>{const m=G(),I=m.firstChild;return m.$$click=g=>{g.stopPropagation(),l(f.id)},n(I,()=>f.name),n(m,b(M,{get when(){return s()===f.id},get children(){const g=z();return g.$$click=()=>$.delete(f.id),n(g,()=>a.member.button_delete),g}}),null),m})()})),p}})),y.addEventListener("submit",d),O(p=>i=p,C),n(w,()=>a.member.button_add),n(r,b(F,{get trigger(){return e().show},get message(){return e().message}}),null),H(()=>U(C,"placeholder",a.member.placeholder)),r})()}R(["click"]);const J=_("<div class=ctn><div class=ctn_header><div class=subtitle></div><div class=title></div><button></button></div><div class=payment_list><div class=table><span class=col_name></span><span class=col_member></span><span class=col_money></span></div><div class=items><div class=button_list><button class=button_add></button><button class=button_delete>"),K=_("<div class=guide>결제 내역을 추가해보세요!");function ge(){const[e,t]=E(0),[s,l]=E(!1);let i;const c=()=>{l(!0),clearTimeout(i),i=setTimeout(()=>l(!1),2e3)};return(()=>{const o=J(),d=o.firstChild,r=d.firstChild,u=r.nextSibling,x=u.nextSibling,S=d.nextSibling,h=S.firstChild,v=h.firstChild,y=v.nextSibling,T=y.nextSibling,C=h.nextSibling,w=C.firstChild,p=w.firstChild,f=p.nextSibling;return o.$$click=()=>t(0),r.$$click=()=>{confirm(a.money.backWarning)&&(k.reset(),N(P.MEMBER))},n(r,()=>a.money.back),n(u,()=>a.money.title),x.$$click=()=>{k.isValid()?N(P.RESULT):c()},n(x,()=>a.money.button),n(v,()=>a.money.label1),n(y,()=>a.money.label2),n(T,()=>a.money.label3),n(C,b(M,{get when(){return k.count!==0},get fallback(){return K()},get children(){return b(A,{get each(){return k.list},children:m=>b(Y,{payment:m,get selected(){return e()===m.id},select:t})})}}),w),p.$$click=m=>{m.stopPropagation();const I=k.add($.list.map(g=>g.id));t(I)},n(p,()=>a.money.button_add),f.$$click=m=>{m.stopPropagation(),t(0),k.delete()},n(f,()=>a.money.button_delete),n(o,b(F,{get trigger(){return s()},message:"채워지지 않은 정보가 있습니다."}),null),o})()}R(["click"]);const Q=_('<svg width=54 height=20 viewBox="0 0 54 20"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 9.5C15.7239 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.7239 10.5 16 10.5V9.5ZM38 10L33 7.11325V12.8868L38 10ZM16 10.5H33.5V9.5H16V10.5Z"fill=black>');function ee(){return Q()}const te=_("<div class=sending_item><div class=col_flexible></div><div class=col_flexible></div><div class=col_money>");function le(e){return(()=>{const t=te(),s=t.firstChild,l=s.nextSibling,i=l.nextSibling;return n(s,()=>$.name(e.sending.from)),n(t,b(ee,{}),l),n(l,()=>$.name(e.sending.to)),n(i,()=>String(e.sending.money).replace(/(\d)(?=(?:\d{3})+(?!\d))/g,"$1,"),null),n(i,()=>` ${a.paymentItem.moneyUnit}`,null),t})()}const ne=()=>{const e=se(),t=ce(e),s=[];return t.forEach(l=>{s.push(...re(l))}),[e,s]},se=()=>{let e=$.list.map(t=>({mid:t.id,pay:[],use:[],money:0,bonus:0,included:!1}));return k.list.forEach(({id:t,payer:s,money:l,members:i})=>{const c=i.length,o=(c-l%c)%c,d=(l+o)/c;e=e.map(r=>r.mid===s?{...r,pay:[...r.pay,{pid:t,money:l}],bonus:r.bonus+o}:r),i.forEach(r=>{e=e.map(u=>u.mid===r?{...u,use:[...u.use,{pid:t,money:d}]}:u)})}),e=e.map(t=>({...t,money:t.use.reduce((s,l)=>s+l.money,0)-t.pay.reduce((s,l)=>s+l.money,0)-t.bonus})),e},ie=e=>{const t=[[]];for(let s=0;s<e;s++){const l=t.length;for(let i=0;i<l;i++){const c=t[i];t.push([...c,s])}}return t},ce=e=>{const t=[],s=ie(e.length);for(let l=1;l<s.length;l++){const i=s[l];if(!ae(e,i))continue;const c=[];i.forEach(o=>{e[o].included=!0,c.push(e[o])}),t.push(c)}return t},ae=(e,t)=>{let s=0;for(let l=0;l<t.length;l++){if(e[t[l]].included)return!1;s+=e[t[l]].money}return s===0},re=e=>{const t=[];e.sort((i,c)=>i.money<c.money?1:-1);const s=e[e.length-1];e.pop();for(let i=0;i<e.length;i++)e[0].money<=Math.abs(s.money)?l(e[0],s):l(e[0],e[e.length-1]),e.sort((c,o)=>c.money<o.money?1:-1);return t;function l(i,c){t.push({from:i.mid,to:c.mid,money:i.money}),c.money+=i.money,i.money=0}},oe=_("<div class=ctn><div class=ctn_header><div class=subtitle></div><div class=title></div></div><div class=ctn_body><div class=result_scroll><div class=ctn_sending><div class=table><span class=col_flexible></span><span> </span><span class=col_flexible></span><span class=col_money></span></div><div class=list></div><button>텍스트로 복사하기</button></div><div class=middle_title>아래 항목을 클릭해서 디테일한 정보를 확인해보세요.</div><div class=table><span class=col_flexible></span><span class=col_money></span><span class=col_money></span><span class=col_money></span></div><div class=list>");function fe(){const[e,t]=E(0),[s,l]=ne();console.log("payInfoList",s),console.log("sendingList",l);const i=async()=>{let c=l.reduce((o,d)=>{const r=$.name(d.from),u=$.name(d.to);return o+`${r} --> ${u} : ${d.money}원
`},`[N빵 정산 결과]

`);c+=`
(똑똑하게 정산하자! N-bread)`;try{await navigator.clipboard.writeText(c),alert("클립보드에 링크가 복사되었습니다.")}catch{alert("복사에 실패하였습니다")}};return(()=>{const c=oe(),o=c.firstChild,d=o.firstChild,r=d.nextSibling,u=o.nextSibling,x=u.firstChild,S=x.firstChild,h=S.firstChild,v=h.firstChild,y=v.nextSibling,T=y.nextSibling,C=T.nextSibling,w=h.nextSibling,p=w.nextSibling,f=S.nextSibling,m=f.nextSibling,I=m.firstChild,g=I.nextSibling,B=g.nextSibling,V=B.nextSibling,Z=m.nextSibling;return c.$$click=()=>t(0),d.$$click=()=>N(P.MONEY),n(d,()=>a.result.back),n(r,()=>a.result.title),n(v,()=>a.result.label1),y.style.setProperty("width","54px"),n(T,()=>a.result.label2),n(C,()=>a.result.label3),n(w,b(A,{each:l,children:L=>b(le,{sending:L})})),p.$$click=()=>i(),n(I,()=>a.result.label4),n(g,()=>a.result.label5),n(B,()=>a.result.label6),n(V,()=>a.result.label7),n(Z,b(A,{each:s,children:L=>b(j,{payInfo:L,get selected(){return e()===L.mid},selectInfo:t})})),c})()}R(["click"]);export{pe as M,fe as R,ge as a};
