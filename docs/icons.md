---
layout: default
title: Icons
icons:
    - ghost
    - chevron-down
    - users
    - tag
    - tablet
    - menu
    - settings
    - search
    - search-left
    - rss
    - preview
    - app
    - pin
    - pc
    - pacman
    - edit
    - mobile
    - image
    - mail
    - list
    - info
    - home
    - grid
    - fullscreen
    - question
    - external
    - error
    - comments
    - close
    - chevron
    - calendar
    - archive
    - services
    - appearance
    - video
    - trash
    - reply
    - stats
    - featured
    - unfeatured
    - clock
    - settings2
    - camera
    - power
    - lock
    - content
    - user
    - support
    - success
    - notification
    - add
    - check
    - x
    - link
    - camera
    - repost
    - weather-rain
    - weather-sun
    - weather-partial
    - weather-snow
    - weather-cloudy
    - lightning
---

# Icon List

<div class="gui-icons clearfix">
    {% for icon in page.icons %}
        <div class="gui-icon clearfix">
            <span class="icon">
                <span class="icon icon-{{icon}}"></span>
            </span>
            <span class="name">{{icon | replace:'-',' ' | capitalize}}</span><br>
            <code class="var">icon-{{icon}}</code>
        </div>
    {% endfor %}
</div>

<!-- <table class="table">
    <thead>
        <tr>
            <th>Icon</th>
            <th>CSS Class</th>
            <th>Name</th>
            <th>Sass Variable</th>
        </tr>
    </thead>
    <tr>
        <td>
            <span class="icon-ghost"></span>
        </td>
        <td><code>.icon-ghost</code></td>
        <td>Ghost</td>
        <td><code>$i-ghost</code></td>
    </tr>

    {% for icon in page.icons %}
        <tr>
            <td>
                <span class="icon-{{icon}}"></span>
            </td>
            <td><code>.icon-{{icon}}</code></td>
            <td>Ghost</td>
            <td><code>$i-{{icon}}</code></td>
        </tr>
    {% endfor %}

</table> -->

# Using Icons

You can either add a CSS class to an element, or add it directly to a rule set in your Sass.

{% highlight html %}
<a class="button icon-mail">Email</a>
{% endhighlight %}

{% highlight scss %}
.element {
    @include icon($i-mail);
}
{% endhighlight %}

# Sass Icon Mixins

We have 2 utility Sass mixins you cvan use to add icons directly to a rule set.

**Note:** Only the `$char` is required.

{% highlight scss %}
// Add icon to :before
@include icon($i-mail, 2em, $darkgrey);

// Add icon to :after
@include icon-after($i-mail, 2em, $darkgrey);
{% endhighlight %}

You can also add styles to the icon by adding properties between curley braces, including other mixins.

{% highlight scss %}
// Add icon to :before, with extra styles
@include icon($i-mail, 2em, $darkgrey) {
    @include gradient($blue, $green);
    outline: 1px solid $darkgrey;
}
{% endhighlight %}
