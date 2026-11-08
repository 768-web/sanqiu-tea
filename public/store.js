import {getProduct} from './catalog.js';
export const KEY = 'sanqiu-tea-v1';
export function normalize(value={}) {
  const cart={};
  for (const [id,n] of Object.entries(value.cart||{})) if(getProduct(id) && Number.isFinite(n) && n>0) cart[id]=Math.min(99,Math.floor(n));
  return {cart, favorites:[...new Set((Array.isArray(value.favorites)?value.favorites:[]).filter(id=>getProduct(id)))], preference:typeof value.preference==='string'?value.preference.slice(0,60):''};
}
export function readState(storage) {
  try { return normalize(JSON.parse(storage.getItem(KEY)||'{}')||{}); } catch { return normalize(); }
}
export function setQuantity(state,id,quantity) {
  if(!getProduct(id))return state;
  const cart={...state.cart};
  const n=Math.max(0,Math.min(99,Math.floor(Number(quantity)||0)));
  if(n)cart[id]=n; else delete cart[id];
  return {...state,cart};
}
export const itemCount=state=>Object.values(state.cart).reduce((sum,n)=>sum+n,0);
export function inquiryText(state,{recipient='',message='',timing=''}={}) {
  const rows=Object.entries(state.cart).filter(([id])=>getProduct(id)).map(([id,n])=>`· 三秋${getProduct(id).name} × ${n}（${getProduct(id).specification}）`);
  return ['三秋茶业 · 选茶咨询单','',...rows,'', recipient?`用途 / 收礼对象：${recipient}`:'', timing?`期望时间：${timing}`:'',message?`留言：${message}`:'','请协助确认实际商品规格、价格、包装与发货安排。','本茶单仅用于咨询，尚未下单或付款。'].filter(v=>v!==undefined).join('\n');
}
