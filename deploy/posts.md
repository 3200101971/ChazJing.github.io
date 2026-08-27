---
layout: default
title: 所有帖子
---

<div class="posts-container">
    <h1 class="page-title">所有帖子</h1>
    
    {% for post in site.posts %}
    <article class="post-item">
        <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            {% if post.categories %}
            <span class="post-categories">
                {% for category in post.categories %}
                {% case category %}
                {% when "经验帖" %}
                <a href="{{ site.baseurl }}/jingyan">{{ category }}</a>
                {% when "生活记录" %}
                <a href="{{ site.baseurl }}/shenghuo">{{ category }}</a>
                {% when "回忆" %}
                <a href="{{ site.baseurl }}/huiyi">{{ category }}</a>
                {% when "随感" %}
                <a href="{{ site.baseurl }}/suigan">{{ category }}</a>
                {% when "笑一笑" %}
                <a href="{{ site.baseurl }}/xiaoyixiao">{{ category }}</a>
                {% else %}
                {{ category }}
                {% endcase %}
                {% endfor %}
            </span>
            {% endif %}
        </div>
        <p class="post-excerpt">{{ post.excerpt }}</p>
    </article>
    {% endfor %}
</div>