import{_ as e,p as a,q as i,a1 as d}from"./framework-5866ffd3.js";const n={},s=d(`<h1 id="娱乐功能" tabindex="-1"><a class="header-anchor" href="#娱乐功能" aria-hidden="true">#</a> 娱乐功能</h1><h2 id="称金币" tabindex="-1"><a class="header-anchor" href="#称金币" aria-hidden="true">#</a> 称金币</h2><p>用一个天平称量 16 次，把 8 枚硬币按重量大小排序。</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>称金币
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>称&lt;要称的第一枚硬币编号&gt;&lt;要称的第二枚硬币编号&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>称金币
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>称12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><p>响应规则介绍或当前的称重结果。</p><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例" aria-hidden="true">#</a> 响应示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你有8枚重量各不相同的金币，编号为1-8，和一个天平。你可以用天平比较两枚金币的重量。
你的目标是：称最少的次数（8 枚金币 16 次），将这些金币按从轻到重排序
你可以使用指令“称xy”来比较两枚金币的重量，其中x、y都是金币编号。
例如：称12
你无须提交排序结果，消防栓会自动检测你能否排出来。
------
最近一次结果是：1 轻于 2
1 轻于 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你已经知道哪边更重了，不是吗？
最近一次结果是：1 轻于 2 (重复)
1 轻于 2
3 轻于 4
1 轻于 2 (重复)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>若称重的结果已知（包括可推断的），该次称重不计数。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>先尝试保证 7 次称出 5 枚硬币的重量，再称剩下的，不失为一种好策略。</p></div>`,16),t=[s];function l(r,c){return a(),i("div",null,t)}const v=e(n,[["render",l],["__file","yule.html.vue"]]);export{v as default};
