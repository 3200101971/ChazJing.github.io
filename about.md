---
layout: default
title: 关于我
---

<div class="about-container">
    <div class="about-section">
        <div class="profile-photo">
            <img src="{{ "/assets/images/photo.jpg" | relative_url }}" alt="我的照片">
        </div>
        
        <div class="profile-info">
            <h1>你好，我是 ChazJing</h1>
            <p class="bio">编程小白，依靠AI在尝试搭建网站。偶尔喜欢写文字。网易云重度选手。</p>
            
            <div class="contact-info">
                <h2>联系方式</h2>
                <ul>
                    <li><strong>邮箱：</strong><a href="mailto:chazjing2020@163.com">chazjing2020@163.com</a></li>
                    <li><strong>GitHub：</strong><a href="https://github.com/{{ site.github_username }}" target="_blank">@{{ site.github_username }}</a></li>
                    <li><strong>微信公众号：</strong><a href="#">ChazJing</a></li>
                    <li><strong>个人域名：</strong><a href="https://chazjing.icu/" target="_blank">https://chazjing.icu/</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="about-content">
        <h2>关于这个网站</h2>
        <p>欢迎来到我的小窝！本人没有编程能力，网站全依靠AI搭建，甚至整个步骤都是AI一步步教的，不足之处，敬请谅解！我希望在这里尝试记录我的生活经历。</p>
        
        <h3>网站内容分类</h3>
        <ul>
            <li><strong>经验帖</strong> - 一点点过来人的路罢了</li>
            <li><strong>生活记录</strong> - 当下即所有</li>
            <li><strong>随感</strong> - 很喜欢碎碎念</li>
            <li><strong>回忆</strong> - 记忆即为永恒</li>
            <li><strong>笑一笑</strong> - 希望留下一些笑容片段</li>
        </ul>
        
        <h2>本站搭建历程</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2026.5.3</div>
                <div class="timeline-content">
                    <h3>交互体验优化</h3>
                    <ul>
                        <li>添加文章目录功能（桌面端右侧显示，移动端点击按钮显示）</li>
                        <li>修改鼠标光标为抓取手势</li>
                        <li>添加点击粒子效果</li>
                    </ul>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2026.5.2</div>
                <div class="timeline-content">
                    <h3>域名申请</h3>
                    <ul>
                        <li>成功申请个人域名 https://chazjing.icu/</li>
                    </ul>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2026.5.1</div>
                <div class="timeline-content">
                    <h3>开天辟地</h3>
                    <ul>
                        <li>创建 GitHub 仓库，设置域名</li>
                        <li>搭建网站整体框架（使用 Jekyll）</li>
                        <li>上传网站并公开访问</li>
                        <li>创建网站栏目：首页、关于我、经验帖、生活记录、回忆、随感、笑一笑</li>
                        <li>设置标签和分类超链接跳转</li>
                        <li>添加黑夜模式功能（支持 localStorage 保存设置）</li>
                        <li>完善 Markdown 文章样式</li>
                        <li>完成移动端适配（汉堡菜单）</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
