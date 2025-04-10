import{_ as m,p as s,v as u,C as _,b as v,o as l,w as h,c as r,e as d,j as t,t as f}from"./framework-BN9qVwRq.js";const x={key:0,class:"vp-sidebar-ad"},y={href:"https://example.com",target:"_blank",class:"simple-ad"},g=["innerHTML"],C={key:1,style:{color:"red",padding:"10px"}},b={__name:"AdComponent",setup(k){const o=s(!1),e=s("初始化中..."),c=s(`
  <div style="border:1px solid #ddd; padding:10px; margin-top:10px;">
    <h4>HTML广告示例</h4>
    <p>这里可以放安全的HTML内容</p>
    <a href="https://example.com" style="color:blue;">点击访问</a>
  </div>
`);u(()=>{e.value="客户端已挂载",o.value=!0,typeof window<"u"&&(e.value="正在加载广告...",setTimeout(()=>{e.value="广告加载完成"},500))});const p=a=>{console.error("广告图片加载失败",a),a.target.src="https://via.placeholder.com/250x150?text=广告加载失败"};return(a,n)=>{const i=_("ClientOnly");return l(),v(i,null,{default:h(()=>[o.value?(l(),r("div",x,[t("a",y,[t("img",{src:"https://via.placeholder.com/250x150?text=广告位",alt:"示例广告",onError:p},null,32),n[0]||(n[0]=t("span",{class:"ad-label"},"赞助商",-1))]),t("div",{class:"html-ad",innerHTML:c.value},null,8,g)])):d("",!0),o.value?d("",!0):(l(),r("div",C," 广告组件加载状态: "+f(e.value),1))]),_:1})}}},H=m(b,[["__scopeId","data-v-624f68f6"]]);export{H as default};
