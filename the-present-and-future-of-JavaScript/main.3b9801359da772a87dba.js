!function(t){function n(n){for(var r,o,s=n[0],l=n[1],p=n[2],c=0,d=[];c<s.length;c++)o=s[c],a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(h&&h(n);d.length;)d.shift()();return i.push.apply(i,p||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,o=1;o<e.length;o++){var l=e[o];0!==a[l]&&(r=!1)}r&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},o={5:0},a={5:0};var i=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[];o[t]?n.push(o[t]):0!==o[t]&&{0:1,2:1}[t]&&n.push(o[t]=new Promise(function(n,e){for(var r=t+".3b9801359da772a87dba.css",o=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=(c=a[i]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return n()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){var c;if((l=(c=p[i]).getAttribute("data-href"))===r||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,e(a)},h.href=o,document.getElementsByTagName("head")[0].appendChild(h)}).then(function(){o[t]=0}));var e=a[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=a[t]=[n,r]});n.push(e[2]=r);var i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(t){return s.p+""+({1:"Sidebar",2:"presenter.host",3:"presenter.view"}[t]||t)+".3b9801359da772a87dba.js"}(t);var p=setTimeout(function(){c({type:"timeout",target:l})},12e4);function c(n){l.onerror=l.onload=null,clearTimeout(p);var e=a[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,e[1](i)}a[t]=void 0}}l.onerror=l.onload=c,i.appendChild(l)}return Promise.all(n)},s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var h=p;i.push([103,4]),e()}([,,,function(t,n,e){"use strict";var r=e(0),o=e.n(r);n.a=function(t){var n=t.slides,e=(t.currentIndex,t.className),r=void 0===e?void 0:e;return o.a.createElement("article",{className:r},n.map(function(t,n){return o.a.createElement("section",{key:n,className:t.meta.className,"data-bespoke-backdrop":t.meta.background,"data-bespoke-fx-direction":t.meta.fx.direction,"data-bespoke-fx-transition":t.meta.fx.transition,dangerouslySetInnerHTML:{__html:t.context}})}))}},,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(20),i=e.n(a),s=e(19),l=e.n(s),p=function(t){var n=t.displayed,e=void 0===n||n;return o.a.createElement("div",{className:e?"page-loader":"page-loader-fadeout"},o.a.createElement(l.a,{type:"bars"}))},c=e(3),h=function(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"},d=e(2),u=e.n(d),m=function(t){var n={fx:{direction:"",transition:""},note:"",sectionTitle:"",className:"",shouldReplace:!1,background:"default"};if(void 0===t)return n;var e=t.match(/<!-- direction: (.+) -->/);n.fx.direction=e?e[1]:"horizontal";var r=t.match(/<!-- transition: (.+) -->/);n.fx.transition=r?r[1]:"none";var o=t.match(/<!-- background: (.+) -->/);n.background=o?o[1]:"default";var a=t.match(/<!-- sectionTitle: (.+) -->/);a&&(n.background="section-title",n.className="section-title",n.sectionTitle=a[1]);var i=t.match(/<!-- note[\s\S]*-->/g);return n.note=i?i[0].replace(/<!-- note/g,"").replace(/-->/g,""):"",t.match(/<!-- contents -->/)&&(n.shouldReplace=!0),n};var f=e(18),b=e.n(f),g=e(17),y=e.n(g),v=e(16),x=e.n(v),w=e(15),S=e.n(w),k=e(14),E=e.n(k),C=e(13),j=e.n(C),A=e(12),T=e.n(A),O=e(11),M=e.n(O),N=e(10),_=e.n(N),P=e(9),B=e.n(P);e(92);var I=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=[S()(),x()(),E()(),j()(),T()(),M()(),_()(),B()()];return b.a.from("article",[t()].concat(e,[y()()],function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(n.map(function(t){return t()}))))},F=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},L=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();var D=function(t){function n(t){var r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var a=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));a.changeLoaderState=function(){window.onload=function(){setTimeout(function(){return a.setState({loader:!1})},500)}},a.goTo=function(t){window.slide.bespoke.slide(t)},a.onSetSidebarOpen=function(t){a.setState({opened:t})},a.setupBespoke=function(){window.slide={},window.slide.bespoke=I(a.props.theme)},a.getContent=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{displayed:a.state.loader}),a.content?o.a.createElement(r.content,{slides:a.slides,loadedBespoke:!a.state.loader}):o.a.createElement(c.a,{slides:a.slides,currentIndex:a.state.slideInfo.index}))},a.state={loaded:!1,opened:!1,loader:!0,SidebarComponent:null,slideInfo:{total:0,index:location.hash.slice(1)||0,current:"0"}},a.slides=[],a.contentsList=[],a.setupBespokeFlag=!1,t.slides.forEach(function(t,n){var e=m(t);a.slides.push({meta:e,context:t}),""!==e.sectionTitle&&a.contentsList.push({title:e.sectionTitle,index:n+1})}),0!==a.contentsList.length&&a.slides.forEach(function(t,n){var e,r,i;t.meta.shouldReplace&&(a.slides[n].context=(e=t.context,r=a.contentsList,i=o.a.createElement("ul",{class:"contents"},r.map(function(t,n){return o.a.createElement("li",{key:n},o.a.createElement("a",{href:"#"+t.index},t.title))})),e.replace(/<!-- contents -->/,u()(i))))});var i=h();return"view"===i?e.e(3).then(e.bind(null,120)).then(function(t){a.content=t.default,a.setState({loaded:!0}),a.setupBespokeFlag=!0,a.changeLoaderState()}):"host"===i?e.e(2).then(e.bind(null,119)).then(function(t){a.content=t.default,a.setState({loaded:!0}),a.setupBespokeFlag=!0,a.changeLoaderState()}):a.changeLoaderState(),a}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,o.a.Component),L(n,[{key:"componentDidMount",value:function(){var t=this;"common"===h()&&(this.setupBespoke(),e.e(0).then(e.bind(null,6))),e.e(1).then(e.bind(null,118)).then(function(n){var e=n.default;t.setState({SidebarComponent:e});var r=window.slide.bespoke.slide()+1;t.setState({slideInfo:{total:(""+t.slides.length).padStart(2,"0"),index:r,current:(""+r).padStart(2,"0")}}),window.slide.bespoke.on("activate",function(){var n=window.slide.bespoke.slide()+1;t.setState({slideInfo:F({},t.state.slideInfo,{index:n,current:(""+n).padStart(2,"0")})})})})}},{key:"UNSAFE_componentWillUpdate",value:function(){this.setupBespokeFlag&&(this.setupBespoke(),this.setupBespokeFlag=!1)}},{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,this.state.SidebarComponent?o.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,opened:this.state.opened,contents:this.contentsList,onSetOpen:this.onSetSidebarOpen,slideInfo:this.state.slideInfo}):null,o.a.createElement("i",{style:{width:50},className:"btn-sidebar fa fa-bars",onClick:function(){return t.onSetSidebarOpen(!0)}})),this.getContent())}}]),n}(),q=function(){var t=document.createElement("div");return t.id="root",document.body.appendChild(t),t},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];i.a.render(o.a.createElement(D,{theme:n,slides:t}),q())},J=function(t){return{id:(n=t).id,slides:n.keys().sort().map(function(t){return n(t)})};var n};e(88),e(84);"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js");var U=void 0;try{U=e(81)}catch(t){console.error(t)}var z=J(e(78));if(void 0===U)throw new Error("Could not find theme");R(z.slides,U)},,function(t,n,e){},function(t,n,e){var r=e(23);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){if("/Users/about_hiroppy/Programming/fusuma/samples/the-present-and-future-of-JavaScript/style.css".match(/\+*.css$/i))try{e(24)}catch(t){console.error(t)}},function(t,n){t.exports='\x3c!-- background: js --\x3e\n<h1 id="the-end">THE END</h1>\n<h4 id="enjoy-your-javascript-life-">ENJOY YOUR JAVASCRIPT LIFE 😎</h4>\n<p>repo: <a href="https://github.com/hiroppy/slides">https://github.com/hiroppy/slides</a></p>\n'},function(t,n){t.exports='<h2 id="stuff-">stuff📖</h2>\n<p><br></p>\n<ul>\n<li><a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">Standard ECMA-262</a></li>\n<li><a href="https://github.com/tc39">Ecma TC39</a></li>\n<li><a href="https://esdiscuss.org/">ECMAScript Discussion Archives</a></li>\n</ul>\n'},function(t,n,e){t.exports=e.p+"108d427bda145c173f914136f118c55d.png"},function(t,n,e){t.exports='<h2 id="node-festival-in-tokyo-">Node Festival in Tokyo🗼</h2>\n<p>largest Node.js conference in Japan!!!</p>\n<p><img src="'+e(28)+'" class="node-fest"></p>\n<p><a href="http://nodefest.jp/2017">http://nodefest.jp/2017</a></p>\n'},function(t,n){t.exports='<h2 id="information-">information 💁</h2>\n'},function(t,n){t.exports='<h2 id="node-js-collaborator-summit">Node.js Collaborator Summit</h2>\n<p><br></p>\n<p>The Node.js Foundation hosts regular summits for active contributors to the node.js project.</p>\n<p><br></p>\n<p>Node.js Foundation has a lot of working groups.<br>570 members and 113 teams</p>\n<p><br></p>\n<ul>\n<li>Oct 06-07 2017, Vancouver, British Columbia, Canada</li>\n<li>May 04-05 2017, Berlin, Germany</li>\n<li>Dec 01-02 2016, Austin, Texas, USA</li>\n<li>Sep 17-18 2016, Amsterdam, Netherlands</li>\n<li>Aug 06-07 2015, San Francisco, California, USA</li>\n</ul>\n<p><a href="https://github.com/nodejs/summit" class="ref-link" target="_blank">\n  https://github.com/nodejs/summit\n</a></p>\n'},function(t,n){t.exports='<h2 id="lts">LTS</h2>\n<p><br></p>\n<p>A even version released in April is subject to LTS.<br>LTS will be supported for 18 months and then will be in maintenance mode for 12 months.</p>\n<p><br>\n<br></p>\n<p><strong>codename</strong></p>\n<ul>\n<li>Node4: Argon</li>\n<li>Node6: Boron</li>\n<li>Node8: Carbon</li>\n</ul>\n<p><a class="ref-link" href="https://github.com/nodejs/Release" target="_blank">\n  https://github.com/nodejs/Release\n</a></p>\n'},function(t,n,e){t.exports=e.p+"862ad2d8c02ca650c45203c0a47eb2a2.png"},function(t,n,e){t.exports='\x3c!-- background: black --\x3e\n<h2 id="lts">LTS</h2>\n<p><img src="'+e(33)+'" alt=""></p>\n'},function(t,n){t.exports='\x3c!-- background: node --\x3e\n<h2 id="node-js">Node.js</h2>\n<p><br>\nIf time is left over...😴</p>\n'},function(t,n){t.exports='<h2 id="summary">summary</h2>\n<p><br></p>\n<ul>\n<li>ECMAScript will be renewed every year (ES{that year})</li>\n<li>ECMAScript is managed by TC39 and has 5 stages</li>\n<li>anyone can make suggestions</li>\n<li>the next release will be June 2018!!</li>\n</ul>\n'},function(t,n){t.exports='<h2 id="temporal">Temporal</h2>\n<p>stage-1</p>\n<pre><code class="lang-javascript">let civilDate = new CivilDate(year, month, day); // month 1 - 12\n\nlet year = civilDate.year;\nlet month = civilDate.month;\nlet day = civilDate.day;\n\nnew CivilTime(hour, minute[[[, second], millisecond], nanosecond]);\nlet hour = civilTime.hour;\nlet minute = civilTime.minute;\nlet second = civilTime.second;\nlet millisecond = civilTime.millisecond;\nlet nanosecond = civilTime.nanosecond;\n\nlet myCivilDate = new CivilDate(2016, 2, 29);\nlet newCivilDate = myCivilDate.plus({years: 1, months: 2});\n//results in civil date with value 2017-4-28\n</code></pre>\n<p><a class="ref-link" href="https://github.com/tc39/proposal-temporal" target="_blank">\n  https://github.com/tc39/proposal-temporal\n</a></p>\n'},function(t,n){t.exports='<h2 id="promise-try">Promise.try</h2>\n<p>stage-1</p>\n<pre><code class="lang-javascript">function getUserById(id) {\n  return Promise.try(() =&gt; {\n    if (typeof id !== &#39;number&#39;) {\n      throw new Error(&#39;id must be a number&#39;);\n    }\n\n    return db.getUserById(id);\n  });\n}\n</code></pre>\n<p><a class="ref-link" href="https://github.com/tc39/proposal-promise-try" target="_blank">\n  https://github.com/tc39/proposal-promise-try\n</a></p>\n'},function(t,n){t.exports='<h2 id="partial-application-syntax">Partial Application Syntax</h2>\n<p>stage-1</p>\n<pre><code class="lang-javascript">function add(x, y) { return x + y; }\n\n// before\nconst addOne = add.bind(null, 1); // this, the left(x = 1), the right(y = undefined)\naddOne(2); // 3\n\n// after\nconst addOne = add(1, ?); // apply from the left(x)\naddOne(2); // 3\n\nconst addTen = add(?, 10); // apply from the right(y)\naddTen(2); // 12\n\nconst f = (...x) =&gt; x;\nconst g = f(..., 9, ...);\ng(1, 2, 3); // [1, 2, 3, 9, 1, 2, 3]\n\nconst res = a |&gt; f(?, 1) |&gt; g(?, 2); // const res = g(f(a, 1), 2);\n</code></pre>\n<p><a class="ref-link" href="https://github.com/rbuckton/proposal-partial-application" target="_blank">\n  https://github.com/rbuckton/proposal-partial-application\n</a></p>\n'},function(t,n){t.exports='<h2 id="pipeline-operator">Pipeline Operator</h2>\n<p>stage-1</p>\n<pre><code class="lang-javascript">function doubleSay (str) { return str + &#39;, &#39; + str; }\nfunction capitalize (str) { return str[0].toUpperCase() + str.substring(1); }\nfunction exclaim (str) { return str + &#39;!&#39;; }\n\n// exclaim(capitalize(doubleSay(&#39;hello&#39;))); // &#39;Hello, hello!&#39;\nlet result = &quot;hello&quot;\n  |&gt; doubleSay // the argument is &#39;hello&#39;\n  |&gt; capitalize\n  |&gt; exclaim;  // &#39;Hello, hello!&#39;\n\nfunction double (x) { return x + x; }\nfunction add (x, y) { return x + y; }\nfunction boundScore (min, max, score) { return Math.max(min, Math.min(max, score)); }\n\n// boundScore(0, 100, add(7, double(person.score)));\nlet newScore = 25\n  |&gt; double                      // the argument is 25\n  |&gt; _ =&gt; add(7, _)              // `_` is the return value of `double`\n  |&gt; _ =&gt; boundScore(0, 100, _); // 57 // `_` is the return value of `add`\n</code></pre>\n<p><a class="ref-link" href="https://github.com/tc39/proposal-pipeline-operator" target="_blank">\n  https://github.com/tc39/proposal-pipeline-operator \n</a></p>\n'},function(t,n){t.exports='<h2 id="optional-chaining">Optional Chaining</h2>\n<p>stage-1</p>\n<pre><code class="lang-javascript">// before\nconst fooInput = myForm.querySelector(&#39;input[name=foo]&#39;);\nconst fooValue = fooInput ? fooInput.value : undefined;\n\n// after\nconst fooValue = myForm.querySelector(&#39;input[name=foo]&#39;)?.value;\n\nconst obj = {\n  foo: {\n    bar: {\n      baz: 42\n    }\n  }\n};\n\nobj?.foo?.bar?.baz;   // 42\nobj?.qux?.baz;        // undefined\nobj?.foo.bar.qux?.(); // undefined\n</code></pre>\n<p><a class="ref-link" href="https://github.com/tc39/proposal-optional-chaining" target="_blank">\n  https://github.com/tc39/proposal-optional-chaining\n</a></p>\n'},function(t,n){t.exports='<h2 id="promise-prototype-finally">Promise.prototype.finally</h2>\n<p>stage-3</p>\n<pre><code class="lang-javascript">let finished = false;\n\nfetch()\n  .then((res) =&gt; {\n    // finished = true;\n  })\n  .catch((err) =&gt; {\n    // finished = true;\n  })\n  .finally(() =&gt; {\n    finished = true;\n  });\n</code></pre>\n<p><a class="ref-link" target="_blank" href="https://github.com/tc39/proposal-promise-finally">\n  https://github.com/tc39/proposal-promise-finally\n</a></p>\n'},function(t,n){t.exports='<h2 id="optional-catch-binding">Optional Catch Binding</h2>\n<p>stage-3</p>\n<pre><code class="lang-javascript">let data;\n\ntry {\n  data = JSON.parse(str);\n} catch { //  you don&#39;t need the binding `()`\n  data = &#39;default&#39;;\n}\n</code></pre>\n<p><a class="ref-link" href="https://github.com/tc39/proposal-optional-catch-binding" target="_blank">\n  https://github.com/tc39/proposal-optional-catch-binding\n</a></p>\n'},function(t,n){t.exports='<h2 id="class-fields">class fields</h2>\n<p>stage-3</p>\n<pre><code class="lang-javascript">class Counter extends HTMLElement {\n  x = 0;  // public fields \n  #y = 0; // private fields\n\n  constructor() {\n    super();\n    this.onclick = this.clicked.bind(this);\n  }\n\n  clicked() {\n    this.x++;\n    this.#y++;\n    window.requestAnimationFrame(this.render.bind(this));\n  }\n\n  render() {\n    this.textContent = this.#y.toString();\n  }\n}\n</code></pre>\n<p><a class="ref-link" target="_blank" href="https://github.com/tc39/proposal-class-fields">\n  https://github.com/tc39/proposal-class-fields\n</a></p>\n'},function(t,n){t.exports='<h2 id="proposals-of-interest-">Proposals of Interest🙃</h2>\n<p>Introducing some proposals that I am interested in.</p>\n<p><br>\n<br></p>\n<p><em>Note: stage-1 is subject to change</em></p>\n'},function(t,n){t.exports='<h2 id="proposal-updates">Proposal updates</h2>\n<p>the 60th meeting on 26-28 September 2017 (about 2 weeks ago!!)</p>\n<table class="common-table proposal-updates-table">\n  <thead>\n    <tr>\n      <td>Proposal</td>\n      <td>Stage</td>\n      <td>Description</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-import-meta">import.meta</a>\n      </th>\n      <th>2 → 3</th>\n    </tr>\n    <tr>\n      <th>export ns from &#39;mod&#39;;</th>\n      <th>2 → N/A</th>\n      <th>\n        it moved to <a href="https://github.com/tc39/ecma262/pull/1005">https://github.com/tc39/ecma262/pull/1005</a>\n      </th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-flatMap">Array.prototype.flat{Map,ten}</a>\n      </th>\n      <th>1 → 2</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-throw-expressions">throw Expressions</a>\n      </th>\n      <th>1 → 2</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-string-matchall">String.prototype.matchAll</a>\n      </th>\n      <th>1 → 2</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/littledan/proposal-extensible-numeric-literals">Extensible numeric literals</a>\n      </th>\n      <th>0 → 1</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/michaelficarra/proposal-first-class-protocols">First-Class Protocols</a>\n      </th>\n      <th>0 → 1</th>\n      <th>it was called <code>Interfaces</code> in stage-0</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-json-superset">JSON superset</a>\n      </th>\n      <th>0 → 1</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/gisenberg/proposal-nullary-coalescing">nullary coalescing</a>\n      </th>\n      <th>0 → 1</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/rbuckton/proposal-partial-application">Partial application</a>\n      </th>\n      <th>0 → 1</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/tc39/proposal-pipeline-operator">Pipeline Operator</a>\n      </th>\n      <th>0 → 1</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://gist.github.com/lukewagner/2735af7eea411e18cf20">ArrayBuffer.transfer</a>\n      </th>\n      <th>N/A → 0</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/jasnell/proposal-istypes">Builtins.typeOf() and Builtins.is()</a>\n      </th>\n      <th>N/A → 0</th>\n    </tr>\n    <tr>\n      <th>\n        <a href="https://github.com/rbuckton/proposal-shorthand-improvements">Object Shorthand Improvements</a>\n      </th>\n      <th>N/A → 0</th>\n    </tr>\n  </tbody>\n</table>\n\n<p><a href="https://github.com/tc39/agendas/blob/master/2017/09.md" target="_blank" class="ref-link">\n  https://github.com/tc39/agendas/blob/master/2017/09.md\n</a></p>\n'},function(t,n){t.exports='<h2 id="candidate-features-stage-3-">Candidate Features(Stage-3)</h2>\n<p>Proposal list that may enter the next release(ES2018).</p>\n<ul>\n<li><a href="https://github.com/tc39/proposal-async-iteration">Asynchronous Iteration</a></li>\n<li><a href="https://github.com/tc39/proposal-bigint">BigInt</a></li>\n<li><a href="https://github.com/tc39/proposal-class-fields">Class Fields</a></li>\n<li><a href="https://github.com/tc39/proposal-global">global</a></li>\n<li><a href="https://github.com/tc39/Function-prototype-toString-revision">Function.prototype.toString revision</a></li>\n<li><a href="https://github.com/tc39/proposal-dynamic-import">import()</a></li>\n<li><a href="https://github.com/tc39/proposal-import-meta">import.meta</a></li>\n<li><a href="https://github.com/tc39/proposal-regexp-legacy-features">Legacy RegExp features in JavaScript</a></li>\n<li><a href="https://github.com/tc39/proposal-optional-catch-binding">Optional catch binding</a></li>\n<li><a href="https://github.com/tc39/proposal-promise-finally">Promise.prototype.finally</a></li>\n<li><a href="https://github.com/tc39/proposal-regexp-lookbehind">RegExp Lookbehind Assertions</a></li>\n<li><a href="https://github.com/tc39/proposal-regexp-unicode-property-escapes">RegExp named capture groups</a></li>\n<li><a href="https://github.com/tc39/proposal-object-rest-spread">Rest/Spread Properties</a></li>\n<li><a href="https://github.com/tc39/proposal-regexp-dotall-flag">s (dotAll) flag for regular expressions</a></li>\n</ul>\n'},function(t,n,e){t.exports=e.p+"1fb28174f7608df398657579122935e9.png"},function(t,n,e){t.exports='<h2 id="browser-compatibility">Browser Compatibility</h2>\n<p><br></p>\n<p><img src="'+e(48)+'" alt="desctop-browsers"></p>\n'},function(t,n){t.exports='<h2 id="es2018">ES2018</h2>\n<pre><code class="lang-javascript">const tag = (obj) =&gt; ({\n  Raw: obj.raw,\n  Cooked: obj\n});\n\ntag`\\u{4B}`; // ES2015 ~\n// { Raw: [ &#39;\\\\u{4B}&#39; ], Cooked: [ &#39;K&#39; ] }\n\n// ES2018 ~\ntag`\\uu ${1} \\xx`; // a Unicode escape\n// { Raw: [ &#39;\\\\uu &#39;, &#39; \\\\xx&#39; ], Cooked: [ undefined, undefined ] }\ntag`\\100`; // an octal escape \n</code></pre>\n<p><br></p>\n<p>Escape sequences are limited in ES2015. For example, Latex, Path, octal escape, etc...<br>Therefore, It will release that restriction.<br>An illegal escape sequence is put in the Cooked array as <code>undefined</code>.</p>\n<p><br></p>\n<p><a class="ref-link" target="_blank" href="https://tc39.github.io/proposal-template-literal-revision/">\n  https://tc39.github.io/proposal-template-literal-revision/\n</a></p>\n'},function(t,n){t.exports='<h2 id="es2018">ES2018</h2>\n<ul>\n<li>Template Literal Revision</li>\n</ul>\n<p><br>\nCurrently, this is the only one in stage-4.</p>\n<p><a class="ref-link" href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">\n  https://github.com/tc39/proposals/blob/master/finished-proposals.md\n</a></p>\n'},function(t,n){t.exports="<p>Next Year is ...?</p>\n"},function(t,n,e){t.exports=e.p+"d7c5620de72ab8768cff02e1411efc2f.png"},function(t,n,e){t.exports='<h2 id="browser-compatibility">Browser Compatibility</h2>\n<p><br></p>\n<p><img src="'+e(53)+'" alt="desctop-browsers"></p>\n<p><br></p>\n<p>The bottom row is <code>Shared memory and atomics</code>.</p>\n'},function(t,n){t.exports='<h2 id="es2017">ES2017</h2>\n<pre><code class="lang-javascript">const obj = { a: 1, b: 2 };\n\nObject.values(obj);    // [1, 2]\nObject.entries(obj);   // [ [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ] ]\nObject.getOwnPropertyDescriptors(obj); \n// { a: { value: 1, writable: true, enumerable: true, configurable: true },\n//   b: { value: 2, writable: true, enumerable: true, configurable: true } }\n\nconst str = &#39;es2017&#39;;\nstr.padStart(10);      // &#39;    es2017&#39;\nstr.padEnd(10);        // &#39;es2017    &#39;\n\nconst fetch = (data,) =&gt; new Promise((resolve) =&gt; resolve()); // Comma is allowed\n\n(async() =&gt; { // async/await\n  await fetch({a: 1});\n})();\n</code></pre>\n'},function(t,n){t.exports='<h2 id="es2017">ES2017</h2>\n<div class="list">\n  <ul>\n    <li>Async Functions</li>\n    <li>Shared memory and atomics</li>\n    <li>Object.values/Object.entries</li>\n    <li>String padding</li>\n    <li>Object.getOwnPropertyDescriptors()</li>\n    <li>Trailing commas in function parameter lists and calls</li>\n  <ul>\n</div>\n'},function(t,n,e){t.exports=e.p+"2c7a13a4b8ea6dd0c664b4c2cf5339c6.png"},function(t,n,e){t.exports='<h2 id="browser-compatibility">Browser Compatibility</h2>\n<p><br></p>\n<p><img src="'+e(57)+'" alt="desctop-browsers"></p>\n<p><br></p>\n<p>Oh... IE🙄</p>\n'},function(t,n){t.exports='<h2 id="es2016">ES2016</h2>\n<pre><code class="lang-javascript">[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].includes(&#39;a&#39;); // true\n\n6 ** 2 === Math.pow(6, 2);     // true\n</code></pre>\n'},function(t,n){t.exports='<h2 id="es2016">ES2016</h2>\n<div class="list">\n  <ul>\n    <li>Array.prototype.includes</li>\n    <li>Exponentiation Operator (**)</li>\n  </ul>\n</div>\n'},function(t,n){t.exports='<h2 id="esm-es-modules-">ESM (ES Modules)</h2>\n<pre><code class="lang-javascript">import { foo } from &#39;https://sample-xxx/foo.js&#39;;\n\nexport default function out() {}\n\n// Node.js  e.g. main.mjs\nimport fs from &#39;fs&#39;;\n// can not use `named export`\n// import { readFile } from &#39;fs&#39;; // error: because of `fs` is CJS\n// You have to know what the import package is\nimport foo from &#39;./foo.mjs&#39;; // if you use same code on both server and browser\n// the browser does not automatically give extensions\n</code></pre>\n<p><br></p>\n<p>Loader Standard in whatwg/loader.<br>Chrome, Firefox, Safari and Edge support ESM.<br>Node.js supports ESM as stability-1 from 8.5.0.🎉<br>But, Node.js still has many TODO because of backward compatible now.(e.g. <code>.mjs</code>)</p>\n<p><a class="ref-link" href="https://github.com/whatwg/loader" target="_blank">\n  https://github.com/whatwg/loader\n</a></p>\n'},function(t,n,e){t.exports=e.p+"29870e0cb8842cd0c90778278d32db70.png"},function(t,n,e){t.exports='<h2 id="browser-compatibility">Browser Compatibility</h2>\n<p><br></p>\n<p><img src="'+e(62)+'" alt="desctop-browsers"></p>\n<p><br></p>\n<p>We want to forget IE.😇<br>Tail Call Optimisation is not implemented except for Safari.(probably the priority is low)</p>\n'},function(t,n){t.exports='<h2 id="es2015">ES2015</h2>\n<pre><code class="lang-javascript">class Robot {\n  constructor(...args) {\n    const [\n      age,\n      name\n    ] = args;\n\n    this.name = name;\n  }\n\n  say() {\n    return `hello, ${this.name}`;\n  }\n}\n</code></pre>\n'},function(t,n){t.exports='<h2 id="es2015">ES2015</h2>\n<div class="list">\n  <ul>\n    <li>Arrow Functions</li>\n    <li>Classes</li>\n    <li>Template Strings</li>\n    <li>Destructuring</li>\n    <li>Default parameters</li>\n    <li>Rest parameters</li>\n    <li>Spread Operator</li>\n    <li>let, const statement</li>\n    <li>Modules</li>\n    <li>Promise</li>\n    <li>Generators</li>\n  </ul>\n  <ul>\n    <li>for...of</li>\n    <li>Unicode</li>\n    <li>Map, Set, WeakMap, WeakSet</li>\n    <li>Proxy</li>\n    <li>Symbol</li>\n    <li>Subclassable Built-ins</li>\n    <li>Binary and Octal Literals</li>\n    <li>Number, Math, Object.assign</li>\n    <li>Array.from, Array.of</li>\n    <li>Array.prototype.copyWithin</li>\n    <li>Reflect</li>\n    <li>Tail Calls</li>\n  </ul>\n</div>\n'},function(t,n){t.exports='<h2 id="babel-babylon">babel/babylon</h2>\n<p><br></p>\n<p>Babylon is a JavaScript parser for Babel.<br>Integrate TC39&#39;s Test262 suite to Babylon.</p>\n<p><a class="ref-link" href="https://github.com/babel/babylon/pull/654" target="_blank">\n  https://github.com/babel/babylon/pull/654\n</a></p>\n'},function(t,n){t.exports='<h2 id="stages">stages</h2>\n<table class="stages-list">\n  <tbody>\n    <tr>\n      <th><strong>stage-0</strong></th>\n      <th>Strawman</th>\n      <th>\n        A free-form way of submitting ideas for evolving ECMAScript.<br>\n        <em><span class="required">what’s required: </span></em>\n          Create the document and add to proposal page on GitHub.\n      </th>\n    </tr>\n    <tr>\n      <th><strong>stage-1</strong></th>\n      <th>Proposal</th>\n      <th>\n        Create a polyfill and demos and identifying potential issues.<br>\n        <em><span class="required">what’s required: </span></em>\n          At this stage, a champion who is responsible for the proposal is required.<br>\n        <em><span class="champion">A champion is someone approved by TC39 to take responsiblilty for the proposal.</span></em>\n      </th>\n    </tr>\n    <tr>\n      <th><strong>stage-2</strong></th>\n      <th>Draft</th>\n      <th>\n        A first version of what will be in the specification.<br>\n        <em><span class="required">what’s required: </span></em>\n          The proposal must now additionally have a formal syntax description.\n      </th>\n    </tr>\n    <tr>\n      <th><strong>stage-3</strong></th>\n      <th>Candidate</th>\n      <th>\n        The proposal is mostly finished and now needs feedback from implementations and users to progress further.<br>\n        <em><span class="required">what’s required: </span></em>\n          Spec text finished. Review and sign off by TC39 reviewers and the ECMAScript spec editor.\n      </th>\n    </tr>\n    <tr>\n      <th><strong>stage-4</strong></th>\n      <th>Finished</th>\n      <th>\n        A feature will be in the next release as the standard.<br>\n        <em><span class="required">what’s required: </span></em>\n          After Test262 acceptance tests, implement to more than two browsers.\n      </th>\n    </tr>\n  </tbody>\n</table>\n\n<p><br></p>\n<p>Current proposals status is <a href="https://github.com/tc39/proposals#active-proposals">here</a>.</p>\n<p><a href="http://exploringjs.com/es2016-es2017/ch_tc39-process.html" target="_blank" class="ref-link">\n  http://exploringjs.com/es2016-es2017/ch_tc39-process.html\n</a></p>\n'},function(t,n){t.exports='<h2 id="tc39-process">TC39 Process</h2>\n<p>Needs to pass five processes to formulate specifications.<br>It is called stage-X.(0 - 4)</p>\n<p><br></p>\n<p>TC39&#39;s meeting is held every two months and this stages will change.</p>\n<p><br></p>\n<table class="common-table">\n  <thead>\n    <tr>\n      <td>Dates</td>\n      <td>Location</td>\n      <td>Host</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>2017-01-24 to 2017-01-26</th>\n      <th>San Jose, CA</th>\n      <th>PayPal</th>\n    </tr>\n    <tr>\n      <th>2017-03-21 to 2017-03-23</th>\n      <th>Portland, OR</th>\n      <th>Mozilla</th>\n    </tr>\n    <tr>\n      <th>2017-05-23 to 2017-05-25</th>\n      <th>New York, NY</th>\n      <th>Google</th>\n    </tr>\n    <tr>\n      <th>2017-07-25 to 2017-07-27</th>\n      <th>Redmond, WA</th>\n      <th>Microsoft</th>\n    </tr>\n    <tr>\n      <th>2017-09-26 to 2017-09-28</th>\n      <th>Boston, MA</th>\n      <th>Bocoup</th>\n    </tr>\n    <tr>\n      <th>2017-11-28 to 2017-11-30</th>\n      <th>San Francisco, CA</th>\n      <th>Airbnb</th>\n    </tr>\n  </tbody>\n</table>\n'},function(t,n){t.exports='<h2 id="understand-the-process-">understand the process🤓</h2>\n'},function(t,n){t.exports='<p><p class="big">JavaScript will continue to evolve💪</p>\n<br>\nSpecifications are updated every year.</p>\n'},function(t,n){t.exports='<h2 id="editions">Editions</h2>\n<div class="timeline">\n  <table>\n    <thead>\n      <tr>\n        <th>Edition</th>\n        <th>Name</th>\n        <th>Year</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th>1</th>\n        <th>ECMAScript 1</th>\n        <th>06 / 1997</th>\n      </tr>\n      <tr>\n        <th>2</th>\n        <th>ECMAScript 2</th>\n        <th>06 / 1998</th>\n      </tr>\n      <tr>\n        <th>3</th>\n        <th>ECMAScript 3</th>\n        <th>12 / 1999</th>\n      </tr>\n      <tr>\n        <th>4</th>\n        <th>ECMAScript 4</th>\n        <th>Abandoned</th>\n      </tr>\n      <tr>\n        <th>5</th>\n        <th>ECMAScript 5</th>\n        <th>12 / 2009</th>\n      </tr>\n      <tr>\n        <th>5.1</th>\n        <th>ECMAScript 5.1</th>\n        <th>06 / 2011</th>\n      </tr>\n      <tr>\n        <th>6</th>\n        <th>ECMAScript 2015</th>\n        <th>06 / 2015</th>\n      </tr>\n      <tr>\n        <th>7</th>\n        <th>ECMAScript 2016</th>\n        <th>06 / 2016</th>\n      </tr>\n      <tr>\n        <th>8</th>\n        <th>ECMAScript 2017</th>\n        <th>06 / 2017</th>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'},function(t,n){t.exports='<h2 id="tc39">TC39</h2>\n<p><em>Technical Committee 39</em></p>\n<p><br>\n<br></p>\n<div class="card">\n  <div class="card-text">\n    <span class="title">Ecma TC39</span>\n    <span class="description">Ecma International, Technical Committee 39 - ECMAScript</span>\n    <a href="http://ecma-international.org/memento/TC39.htm" target="_blank">\n      http://ecma-international.org/memento/TC39.htm\n    </a>\n  </div>\n  <img class="tc39" />\n</div>\n\n<p><br>\n<br></p>\n<p>Maintains ECMA-262 and ECMA-402.<br>Members of the committee are all major browser vendors and companies.</p>\n'},function(t,n){t.exports='<h2 id="ecmascript">ECMAScript</h2>\n<p><br></p>\n<p>Specification of JavaScript by Ecma International.</p>\n<p><br>\n<br></p>\n<p>So... what is JavaScript?🤔</p>\n<p><br>\n<br></p>\n<div class="left-box">\n<strong>ECMAScript</strong> - JavaScript&#39;s specification(standardization)\n<br>\n<strong>JavaScript</strong> &nbsp;&nbsp; - implementation based on ECMAScript\n</div>\n'},function(t,n){t.exports='\x3c!-- contents --\x3e\n<h2 id="contents">contents</h2>\n<p><br></p>\n<ul>\n<li><a href="#5">ECMAScript</a></li>\n<li><a href="#9">understand the process</a></li>\n<li><a href="#13">ES2015</a></li>\n<li><a href="#17">ES2016</a></li>\n<li><a href="#20">ES2017</a></li>\n<li><a href="#24">ES2018</a></li>\n<li><a href="#28">proposal updates</a></li>\n<li><a href="#29">proposals of interest</a></li>\n<li><a href="#38">summary</a></li>\n<li><a href="#39">node.js</a></li>\n<li><a href="#37">information</a></li>\n</ul>\n'},function(t,n,e){t.exports=e.p+"a9a8cea4e554f09c840cfeac52379174.png"},function(t,n,e){t.exports='<p><img src="'+e(75)+'" alt=""></p>\n<p><br></p>\n<p>Node Interactive(2017-10-04 - 2017-10-05)<br>and Node.js Collaborator Summit(2017-10-06 - 2017-10-07)</p>\n<p><strong>The events are being held now!!</strong></p>\n'},function(t,n){t.exports='\x3c!-- background: hyper-drive --\x3e\n<h1 id="the-present-and-future-of-javascript">the present and future of JavaScript</h1>\n<p>2017/10/08</p>\n<p><a class="ref-link" target="_blank" href="https://github.com/hiroppy/slides">\n  https://github.com/hiroppy/slides\n</a></p>\n'},function(t,n,e){var r={"./0-title.md":77,"./0-z-events.md":76,"./01-content.md":74,"./02-ecma/0-ecmascript.md":73,"./02-ecma/01-tc39.md":72,"./02-ecma/02-history.md":71,"./03-evolution.md":70,"./04-unserstand-the-process.md":69,"./05-stages/0-description.md":68,"./05-stages/01-stages.md":67,"./05-stages/02-babylon.md":66,"./06-es/0-es2015-0.md":65,"./06-es/0-es2015-1.md":64,"./06-es/0-es2015-2.md":63,"./06-es/0-es2015-3.md":61,"./06-es/01-es2016-0.md":60,"./06-es/01-es2016-1.md":59,"./06-es/01-es2016-2.md":58,"./06-es/02-es2017-0.md":56,"./06-es/02-es2017-1.md":55,"./06-es/02-es2017-2.md":54,"./06-es/03-next-yaer.md":52,"./06-es/04-es2018-0.md":51,"./06-es/04-es2018-1.md":50,"./06-es/04-es2018-2.md":49,"./06-es/04-es2018-3.md":47,"./07-updates/0-proposal-updates.md":46,"./08-interested-proposal/0-title.md":45,"./08-interested-proposal/01-class-fields.md":44,"./08-interested-proposal/01-optional-catch-binding.md":43,"./08-interested-proposal/01-promise-finally.md":42,"./08-interested-proposal/03-optional-chaining.md":41,"./08-interested-proposal/03-p0-pipeline-operator.md":40,"./08-interested-proposal/03-p1-partial-application.md":39,"./08-interested-proposal/03-promise-try.md":38,"./08-interested-proposal/03-temporal.md":37,"./09-summary.md":36,"./10-node/0-title.md":35,"./10-node/01-lts.md":34,"./10-node/02-lts.md":32,"./10-node/03-summit.md":31,"./11-info/0-title.md":30,"./11-info/01-nodefest.md":29,"./11-info/02-stuff.md":27,"./12-end.md":26};function o(t){var n=a(t);return e(n)}function a(t){var n=r[t];if(!(n+1)){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e}return n}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=78},,,,,,,,,function(t,n,e){},function(t,n,e){var r=e(87);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},,,,,,,,,,,,,,,function(t,n,e){e(21),t.exports=e(25)}]);