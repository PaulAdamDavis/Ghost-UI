---
layout: default
title: Structure
---

These elements are larger structural elements that aren't intended to be used in multiple places.

# Nav Bar

<div class="gui-example" style="min-height: 210px;">
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
                    <a href="#" data-toggle="ul" class="dropdown active">
                        <img class="avatar" src="https://s.gravatar.com/avatar/73bc36ee2c308a29afbcffde2535a362" alt="Avatar">
                        <span class="name">Paul Davis</span>
                    </a>
                    <ul class="overlay" style="display: block;">
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
                <a href="#" data-toggle="ul" class="dropdown active">
                    <img class="avatar" src="https://s.gravatar.com/avatar/73bc36ee2c308a29afbcffde2535a362" alt="Avatar">
                    <span class="name">Paul Davis</span>
                </a>
                <ul class="overlay" style="display: block;">
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

Wrapping every single page inside Ghost (excluding the header & navbar) is a `<main>` element, where the styling absolutely positions it 55px from the top, 15px from the left and right, and 0px from the bottom. Everything visual other than the black nav bar should go inside this.

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

# Footer

<div class="gui-example">
    <footer id="publish-bar" style="position: relative;">
    <nav>
        <section id="entry-tags" href="#" class="left">
            <label class="tag-label" for="tags" title="Tags"><span class="hidden">Tags</span></label>
            <div class="tags" style="max-width: 980px;">
                <span class="tag" data-tag-id="5">Code</span>
                <span class="tag" data-tag-id="6">Lorem</span>
                <span class="tag" data-tag-id="7">Ipsum</span>
            </div>
            <input type="hidden" class="tags-holder" id="tags-holder">
            <input class="tag-input" id="tags" type="text" data-input-behaviour="tag">
            <ul class="suggestions overlay" style="display: none; left: 37px;">
                <li data-tag-id="5" data-tag-name="Code"><a href="#"><mark>Code</mark></a></li>
                <li data-tag-id="6" data-tag-name="Lorem"><a href="#"><mark>Lorem</mark></a></li>
                <li data-tag-id="7" data-tag-name="Ipsum"><a href="#"><mark>Ipsum</mark></a></li>
            </ul>
        </section>
        <div class="right">

            <section id="entry-controls">
                <a class="post-settings" href="#" data-toggle=".post-settings-menu" title="Post Settings"><span class="hidden">Post Settings</span></a>
                <div class="post-settings-menu menu-right overlay" style="display: none;">
                    <form>
                        <table class="plain">
                            <tbody><tr class="post-setting">
                                <td class="post-setting-label">
                                    <label for="url">URL</label>
                                </td>
                                <td class="post-setting-field">
                                    <input id="url" class="post-setting-slug" type="text" placeholder="" value="">
                                </td>
                            </tr>
                            <tr class="post-setting">
                                <td class="post-setting-label">
                                    <label for="pub-date">Pub Date</label>
                                </td>
                                <td class="post-setting-field">
                                    <input id="pub-date" class="post-setting-date" type="text" placeholder="" value=""><!--<span class="post-setting-calendar"></span>-->
                                </td>
                            </tr>
                            <tr class="post-setting">
                                <td class="post-setting-label">
                                    <span class="label">Static Page</span>
                                </td>
                                <td class="post-setting-item">
                                    <input id="static-page" class="post-setting-static-page" type="checkbox" value="">
                                    <label class="checkbox" for="static-page"></label>
                                </td>
                            </tr>
                        </tbody></table>
                    </form>
                    <a class="delete" href="#">Delete This Post</a>
                </div>
            </section>

            <section id="entry-actions" class="js-publish-splitbutton splitbutton-save">
                <button type="button" class="js-publish-button button-save" data-status="published">Update Post</button>
                <a class="options up" data-toggle="ul" href="#" title="Post Settings"><span class="hidden">Post Settings</span></a>
                <ul class="editor-options overlay" style="display: none;">
                    <li data-set-status="published" class="active"><a href="#">Update Post</a></li>
                    <li data-set-status="draft"><a href="#">Unpublish</a></li>
                </ul>
            </section>
        </div>
    </nav>
</footer>
</div>

# Settings Nav

<div class="gui-example settings" style="min-height: 142px;">
    <aside class="settings-sidebar" role="complementary" data-apps="false" style="top: 26px;">
        <header>
            <h1 class="title">Settings</h1>
        </header>
        <nav class="settings-menu">
            <ul>
                <li class="general active"><a href="#general">General</a></li>
                <li class="users"><a href="#user">User</a></li>
                <li class="apps" style="display: none;"><a href="#apps">Apps</a></li>
            </ul>
        </nav>
    </aside>
</div>

{% highlight html %}
<aside class="settings-sidebar" role="complementary" data-apps="false">
    <header>
        <h1 class="title">Settings</h1>
    </header>
    <nav class="settings-menu">
        <ul>
            <li class="general active"><a href="#general">General</a></li>
            <li class="users"><a href="#user">User</a></li>
            <li class="apps" style="display: none;"><a href="#apps">Apps</a></li>
        </ul>
    </nav>
</aside>
{% endhighlight %}