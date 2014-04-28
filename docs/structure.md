---
layout: default
title: Structure
---

# Nav Bar

<div class="gui-example">
    <header id="global-header" class="navbar" style="position: relative;">
        <a class="ghost-logo" href="#" data-off-canvas="left" title="/">
            <span class="hidden">Ghost </span>
        </a>
        <nav id="global-nav" role="navigation">
            <ul id="main-menu">
                <li class="content"><a href="#">Content</a></li>
                <li class="editor"><a href="#">New Post</a></li>
                <li class="settings active"><a href="#">Settings</a></li>
                <li id="usermenu" class="usermenu subnav">
                    <a href="#" data-toggle="ul" class="dropdown">
                        <img class="avatar" src="https://s.gravatar.com/avatar/73bc36ee2c308a29afbcffde2535a362" alt="Avatar">
                        <span class="name">Paul Davis</span>
                    </a>
                    <ul class="overlay" style="display: none;">
                        <li class="usermenu-profile"><a href="#">Your Profile</a></li>
                        <li class="divider"></li>
                        <li class="usermenu-help"><a href="#">Help / Support</a></li>
                        <li class="divider"></li>
                        <li class="usermenu-signout"><a href="#">Sign Out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</div>

{% highlight html %}
<header id="global-header" class="navbar">
    <a class="ghost-logo" href="/" data-off-canvas="left" title="/">
        <span class="hidden">Ghost </span>
    </a>
    <nav id="global-nav" role="navigation">
        <ul id="main-menu">
            <li class="content"><a href="/ghost/">Content</a></li>
            <li class="editor"><a href="/ghost/editor/">New Post</a></li>
            <li class="settings active"><a href="/ghost/settings/">Settings</a></li>
            <li id="usermenu" class="usermenu subnav">
                <a href="#" data-toggle="ul" class="dropdown">
                    <img class="avatar" src="https://s.gravatar.com/avatar/73bc36ee2c308a29afbcffde2535a362" alt="Avatar">
                    <span class="name">Paul Davis</span>
                </a>
                <ul class="overlay" style="display: none;">
                    <li class="usermenu-profile"><a href="/ghost/settings/user/">Your Profile</a></li>
                    <li class="divider"></li>
                    <li class="usermenu-help"><a href="http://ghost.org/forum/">Help / Support</a></li>
                    <li class="divider"></li>
                    <li class="usermenu-signout"><a href="/ghost/signout/">Sign Out</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
{% endhighlight %}



# Main

Wrapping every single page inside Ghost is a `<main>` element, where the styling absolutely positions it 55px from the top, 15px from the left and right, and 0px from the bottom. Everything visual other than the black nav bar should go inside this.

{% highlight html %}
<main>
    <div class="an-element">
        <!-- Content -->
    </div>
    <div class="another-element">
        <!-- Content -->
    </div>
</main>
{% endhighlight %}



# Navs

<div class="docs-todo">
    Needs an example
</div>

<div class="gui-example">
    <nav>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
        </ul>
    </nav>
</div>

{% highlight html %}
<nav>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
    </ul>
</nav>
{% endhighlight %}


# Floating Headers

Floating headers are only currently used in the Ghost Editor. The styles are dependent on parent elements being present.

<div class="gui-example">
    <div style="position: relative; height: 40px;">
        <div class="editor">
            <div class="entry-markdown" style="bottom: 0; top: 0; box-shadow: none;">
                <header class="floatingheader">
                    <small>Markdown</small>
                    <a class="markdown-help" href="#"><span class="hidden">What is Markdown?</span></a>
                </header>
            </div>
            <div class="entry-preview" style="bottom: 0; top: 0; box-shadow: none;">
                <header class="floatingheader">
                    <small>Preview <span class="entry-word-count js-entry-word-count">642 words</span></small>
                </header>
            </div>
        </div>
    </div>
</div>

{% highlight html %}
<div class="editor">
    
    <!-- The left side -->
    <div class="entry-markdown">
        <header class="floatingheader">
            <small>Markdown</small>
            <a class="markdown-help" href="#"><span class="hidden">What is Markdown?</span></a>
        </header>
    </div>
    
    <!-- And the right side -->
    <div class="entry-preview">
        <header class="floatingheader">
            <small>Preview <span class="entry-word-count">642 words</span></small>
        </header>
    </div>

</div>
{% endhighlight %}