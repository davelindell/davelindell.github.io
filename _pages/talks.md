---
layout: page
permalink: /talks/
title: talks
page_title: selected talks
description:
nav: true
nav_order: 4
---

<div class="talks-section">
{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}
{% for year_group in talks_by_year %}
  <h2 class="year">{{ year_group.name }}</h2>
  {% for talk in year_group.items %}
  <div class="talk-entry">
    <div class="talk-thumbnail">
      <a href="https://www.youtube.com/watch?v={{ talk.youtube_id }}" target="_blank">
        <img src="https://img.youtube.com/vi/{{ talk.youtube_id }}/mqdefault.jpg"
             alt="{{ talk.title }}" class="talk-img">
        <div class="play-overlay">&#9654;</div>
      </a>
    </div>
    <div class="talk-details">
      <div class="talk-title"><a href="https://www.youtube.com/watch?v={{ talk.youtube_id }}" target="_blank">{{ talk.title }}</a></div>
      <div class="talk-venue">{{ talk.venue }}</div>
    </div>
  </div>
  {% endfor %}
{% endfor %}
</div>
