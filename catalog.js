// 已确认价格、规格、来源与客服后，仅在此处维护。
export const brand = {
  name: '三秋茶业', wechat: '', phone: '',
  notice: '首版体验 · 商品信息确认后开放购买',
};
export const products = [
  {id:'chuchang', name:'初尝', en:'THE FIRST SIP', subtitle:'先试几杯，再选喜欢的', scene:'第一次喝', kind:'sample', tag:'从这一杯开始', image:'sample',
   description:'第一次见面，不妨从几杯茶开始。同一款红茶的小份试喝，给自己一点时间，找到喜欢的味道。',
   detail:'适合第一次接触三秋，或还不确定自己喜欢哪种红茶口感的人。留出两三次不同时间冲泡的机会，再决定是否选择日饮装。',
   features:['同款红茶小份体验','附冲泡说明','喝过再选正装'], price:null, specification:'试喝份量确认中', note:'图中包装为设计概念，实际茶样数量与规格待确认。'},
  {id:'riyin', name:'日饮', en:'THE EVERYDAY RITUAL', subtitle:'把喜欢的茶，留在日常', scene:'自己慢慢喝', kind:'daily', tag:'办公室的一杯茶', image:'daily',
   description:'工作再忙，也想给自己留一杯茶的时间。选一款喝得惯的红茶，陪伴普通而具体的每一天。',
   detail:'面向日常自饮与办公室场景。三秋首轮聚焦一款红茶，先把茶品信息、保存方式与冲泡体验讲清楚。',
   features:['一款红茶认真选择','日常自饮场景','记录茶品与批次'], price:null, specification:'正装规格确认中', note:'外观为包装设计概念，净含量与最终售价待确认。'},
  {id:'jianshan', name:'见山', en:'A GIFT WITH THOUGHT', subtitle:'给重要的人，一份认真选的茶', scene:'送一份心意', kind:'gift', tag:'把心意装进茶里', image:'gift',
   description:'不必用复杂的话表达心意。一份茶，一张手写卡片，把想说的话留给重要的人。',
   detail:'在同款红茶正装基础上，按需搭配礼盒、纸卡与贺卡。先确认收礼人的饮茶习惯、数量和时间，再选择合适的方案。',
   features:['同款红茶礼赠加配','可整理贺卡留言','按实际需求确认'], price:null, specification:'礼赠方案按需确认', note:'礼盒为设计概念，包装费用和交期需另行确认。'},
];
export const getProduct = id => products.find(p => p.id === id);
