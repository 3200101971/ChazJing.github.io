---
layout: default
title: 笑一笑
---

<div class="posts-container">
    <h1 class="page-title">笑一笑</h1>
    <p class="category-desc">希望留下一些笑容片段</p>
    
    {% for post in site.posts %}
    {% if post.categories contains '笑一笑' %}
    <article class="post-item">
        <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
        <p class="post-excerpt"><a href="{{ post.url | relative_url }}">{{ post.excerpt | strip_html | truncate: 100 }}</a></p>
    </article>
    {% endif %}
    {% endfor %}
    
    {% assign has_posts = false %}
    {% for post in site.posts %}
        {% if post.categories contains '笑一笑' %}
            {% assign has_posts = true %}
        {% endif %}
    {% endfor %}
    
    {% if has_posts == false %}
    <p style="color: #888;">暂无此分类的帖子，敬请期待！</p>
    {% endif %}
</div>
