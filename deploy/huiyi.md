---
layout: default
title: 回忆
---

<div class="posts-container">
    <h1 class="page-title">回忆</h1>
    <p class="category-desc">记忆即为永恒</p>
    
    {% for post in site.posts %}
    {% if post.categories contains '回忆' %}
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
        {% if post.categories contains '回忆' %}
            {% assign has_posts = true %}
        {% endif %}
    {% endfor %}
    
    {% if has_posts == false %}
    <p style="color: #888;">暂无此分类的帖子，敬请期待！</p>
    {% endif %}
</div>
