---
layout: default
title: Components
---

# Color Variables

<dl class="color-list">
    
    <dt class="darkgrey">$darkgrey</dt>
    <dd style="color: #fff;" class="darkgrey-bg">$darkgrey</dd>
    
    <dt class="grey">$grey</dt>
    <dd style="color: #fff;" class="grey-bg">$grey</dd>
    
    <dt class="midgrey">$midgrey</dt>
    <dd style="color: #fff;" class="midgrey-bg">$midgrey</dd>
    
    <dt class="lightgrey">$lightgrey</dt>
    <dd class="lightgrey-bg">$lightgrey</dd>
    
    <dt class="brown">$brown</dt>
    <dd class="brown-bg">$brown</dd>
    
    <dt class="midbrown">$midbrown</dt>
    <dd class="midbrown-bg">$midbrown</dd>
    
    <dt class="lightbrown">$lightbrown</dt>
    <dd class="lightbrown-bg">$lightbrown</dd>
    
    <dt class="blue">$blue</dt>
    <dd class="blue-bg">$blue</dd>
    
    <dt class="red">$red</dt>
    <dd class="red-bg">$red</dd>
    
    <dt class="orange">$orange</dt>
    <dd class="orange-bg">$orange</dd>
    
    <dt class="green">$green</dt>
    <dd class="green-bg">$green</dd>

</dl>

# Buttons

## Colour Options

<div class="gui-example">
<a class="button">Button</a>
<a class="button-save">Save</a>
<a class="button-add">Add</a>
<a class="button-delete">Delete</a>
<a class="button-alt">Alt</a>
<a class="button-info">Info</a>
<a class="button-link">Link</a>
</div>
 
{% highlight html %}
<!-- Standard button style -->
<a class="button">Button</a>

<!-- Save blue button -->
<a class="button-save">Save</a>

<!-- Add green button -->
<a class="button-add">Add</a>

<!-- Delete red button -->
<a class="button-delete">Delete</a>

<!-- Alternate dark grey button -->
<a class="button-alt">Alt</a>

<!-- Lught grey button -->
<a class="button-info">Info</a>

<!-- Link transparent button -->
<a class="button-link">Link</a>
{% endhighlight %}



## Button Sizes

<div class="gui-example">
    <a class="button">Standard</a>
    <a class="button large">Large</a>
    <a class="button-add large">Add Large</a>
</div>

{% highlight html %}
<!-- Standard size -->
<a class="button">Standard</a>

<!-- Large size -->
<a class="button-large">Large</a>

<!-- Large size, green -->
<a class="button-add large">Add Large</a>
{% endhighlight %}

## Button States

<div class="gui-example">
    <a class="button">Hover Me</a>
    <a class="button">Click For Active</a>
    <button class="button" disabled>Disabled</button>
</div>

{% highlight html %}
<!-- Hover state -->
<a class="button">Hover Me</a>

<!-- Active state -->
<a class="button">Click For Active</a>

<!-- Disabled state -->
<button class="button" disabled>Disabled</button>
{% endhighlight %}




## Split Buttons

<div class="gui-example">
    <section class="splitbutton"><button type="button" class="button">Split Up</button><a class="options" href="#"><span class="hidden">Default</span></a></section>
    <section class="splitbutton-save"><button type="button" class="button-save">Split Up</button><a class="options" href="#"><span class="hidden">Save</span></a></section>
    <section class="splitbutton-add"><button type="button" class="button-add">Split Up</button><a class="options" href="#"><span class="hidden">Add</span></a></section>
    <section class="splitbutton-delete"><button type="button" class="button-delete">Split Up</button><a class="options" href="#"><span class="hidden">Delete</span></a></section>
    <section class="splitbutton-alt"><button type="button" class="button-alt">Split Up</button><a class="options" href="#"><span class="hidden">Alt</span></a></section>
</div>

{% highlight html %}
<!--  -->
<section class="splitbutton">
    <button type="button" class="button">Split Up</button>
    <a class="options" href="#"><span class="hidden">Default</span></a>
</section>

<!--  -->
<section class="splitbutton-save">
    <button type="button" class="button-save">Split Up</button>
    <a class="options" href="#"><span class="hidden">Save</span></a>
</section>

<!--  -->
<section class="splitbutton-add">
    <button type="button" class="button-add">Split Up</button>
    <a class="options" href="#"><span class="hidden">Add</span></a>
</section>

<!--  -->
<section class="splitbutton-delete">
    <button type="button" class="button-delete">Split Up</button>
    <a class="options" href="#"><span class="hidden">Delete</span></a>
</section>

<!--  -->
<section class="splitbutton-alt">
    <button type="button" class="button-alt">Split Up</button>
    <a class="options" href="#"><span class="hidden">Alt</span></a>
</section>
{% endhighlight %}




## Icon Buttons

You can use any of the [icons](/icons/) packaged with Ghost-UI here.

<div class="gui-example">
    <a class="button-add icon-add">Button Icon</a>
    <a class="button-alt icon-ghost">Button Icon</a>
    <a class="button-save icon-add large">Add Large</a>
</div>

{% highlight html %}
<!--  -->
<a class="button button-icon icon-mail">Button Icon</a>
{% endhighlight %}




# Role Labels

<div class="gui-example">
    <span class="role-label">Role Label</span>
    <span class="role-label owner">Owner</span>
    <span class="role-label admin">Admin</span>
    <span class="role-label editor">Editor</span>
</div>

{% highlight html %}
<!-- Default owner label -->
<span class="role-label">Role Label</span>

<!-- Owner label, black -->
<span class="role-label owner">Owner</span>

<!-- Admin label, red -->
<span class="role-label admin">Admin</span>

<!-- Editor label, blue -->
<span class="role-label editor">Editor</span>
{% endhighlight %}




# Code

## Code & TT

<div class="gui-example">
    <p>Code in a &lt;code&gt; tag <code>example code</code> looks like this.</p>
    <p>Code in a &lt;tt&gt; tag <tt>example code</tt> looks like this.</p>
</div>

{% highlight html %}
<p>Code in a `code` tag <code>example code</code> looks like this.</p>
<p>Code in a `tt` tag <tt>example code</tt> looks like this.</p>
{% endhighlight %}

## Pre

<div class="gui-example">
    <pre>console.log(object);</pre>
</div>

{% highlight html %}
<pre>console.log(object);</pre>
{% endhighlight %}

## Keyboard (KBD)

<div class="gui-example">
    <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>g</kbd>
</div>

{% highlight html %}
<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>g</kbd>
{% endhighlight %}


# Dropdowns

<p>This just adds a downword-facing chevron, inheriting text &amp; link styles from its parents.</p>

<div class="gui-example">
    <a href="#" class="dropdown">
        <span class="name">Dropdown Menu</span>
    </a>
    <a href="#" class="dropdown active">
        <span class="name">Active Menu</span>
    </a>
</div>

{% highlight html %}
<!-- Standard dropdown -->
<a href="#" class="dropdown">
    <span class="name">Dropdown Menu</span>
</a>

<!-- Active dropdown (just darker in colour) -->
<a href="#" class="dropdown active">
    <span class="name">Active Menu</span>
</a>
{% endhighlight %}




# Object List

<div class="gui-example">

    <section class="object-list">
        
        <h4 class="object-list-title">Invited users</h4>

        <div class="object-list-item">
            <span class="object-list-item-icon icon-mail">ic</span>
            <div class="object-list-item-body">
                <span class="name">example@email.com</span><br>
                <span class="description">Invitation sent: 7 hours ago</span>
            </div>
            <aside class="object-list-item-aside">
                <a class="object-list-action" href="#">Revoke</a>
                <a class="object-list-action" href="#">Resend</a>
            </aside>
        </div>

    </section>
    
    <section class="object-list">
        
        <h4 class="object-list-title">Active users</h4>

        <div class="object-list-item">
            <img class="object-list-item-figure" src="http://www.gravatar.com/avatar/f95828f4e92f1befebabfb7f65cdc8f2" alt="Photo of John O'Nolan">
            <div class="object-list-item-body">
                <a href="#" class="name">John O'Nolan</a><br>
                <a href="#" class="description">Last seen: 3 minutes ago</a>
            </div>
            <aside class="object-list-item-aside">
                <span class="role-label editor">Editor</span>
                <span class="role-label owner">Owner</span>
            </aside>
        </div>

        <div class="object-list-item">
            <img class="object-list-item-figure" src="http://www.gravatar.com/avatar/49ebcbbe9bb3ed1f5d5de91483de383c" alt="Photo of Hannah Wolfe">
            <div class="object-list-item-body">
                <span class="name">Hannah Wolfe</span><br>
                <span class="description">Last seen: 2 days ago</span>
            </div>
            <aside class="object-list-item-aside">
                <span class="role-label admin">Admin</span>
            </aside>
        </div>
        <div class="object-list-item">
            <img class="object-list-item-figure" src="https://s.gravatar.com/avatar/73bc36ee2c308a29afbcffde2535a362" alt="Photo of Paul Davis">
            <div class="object-list-item-body">
                <span class="name">Paul Davis</span><br>
                <span class="description">Last seen: 4 days ago</span>
            </div>
        </div>


    </section>

</div>



# Forms

Labels must be used inside a `<form>` tag.

<div class="gui-example">

    <form>

        <fieldset>

            <div class="form-group">
                <label for="user-email">Email</label>
                <input type="email" id="user-email" placeholder="someone@example.com">
                <p>Used for notifications</p>
            </div>

            <div class="form-group">
                <label for="blog-logo">Blog Logo</label>
                <a class="button-add js-modal-logo">Upload Image</a>
                <p>Display a sexy logo for your publication</p>
            </div>

            <div class="form-group">
                <label for="user-bio">Bio</label>
                <textarea id="user-bio" placeholder="Something about you. How do you take your coffee?"></textarea>
                <p>Write about you, in 200 characters or less.</p>
            </div>

            <div class="form-group">
                <label for="permalinks">Dated Permalinks</label>
                <input id="permalinks" name="general[permalinks]" type="checkbox" value="permalink">
                <label class="checkbox" for="permalinks"></label>
                <p>Include the date in your post URLs</p>
            </div>

            <div class="form-group">
                <label for="activeTheme">Theme</label>
                <select id="activeTheme" name="general[activeTheme]">
                        <option value="Casper">Casper</option>
                        <option value="My Awesome Theme">My Awesome Theme</option>
                </select>
                <p>Select a theme for your blog</p>
            </div>

            <div class="form-group">
                <button type="button" class="button-save">Save</button>
            </div>

        </fieldset>

    </form>

</div>

{% highlight html %}
<form>

    <fieldset>

        <!-- Text input with label and description -->
        <div class="form-group">
            <label for="user-email">Email</label>
            <input type="email" id="user-email" placeholder="someone@example.com">
            <p>Used for notifications</p>
        </div>

        <!-- Button with label and description -->
        <div class="form-group">
            <label for="blog-logo">Blog Logo</label>
            <a class="button-add js-modal-logo">Upload Image</a>
            <p>Display a sexy logo for your publication</p>
        </div>

        <!-- Textarea with label and description -->
        <div class="form-group">
            <label for="user-bio">Bio</label>
            <textarea id="user-bio" placeholder="Something about you. How do you take your coffee?"></textarea>
            <p>Write about you, in 200 characters or less.</p>
        </div>

        <!-- Checkboc with label and description -->
        <div class="form-group">
            <label for="permalinks">Dated Permalinks</label>
            <input id="permalinks" name="general[permalinks]" type="checkbox" value="permalink">
            <label class="checkbox" for="permalinks"></label>
            <p>Include the date in your post URLs</p>
        </div>

        <!-- Select dropdown with label and description -->
        <div class="form-group">
            <label for="activeTheme">Theme</label>
            <select id="activeTheme" name="general[activeTheme]">
                    <option value="Casper">Casper</option>
                    <option value="My Awesome Theme">My Awesome Theme</option>
            </select>
            <p>Select a theme for your blog</p>
        </div>

        <!-- Submit button -->
        <div class="form-group">
            <button type="button" class="button-save">Save</button>
        </div>

    </fieldset>

</form>
{% endhighlight %}



# Notifications

<div class="gui-example">
    <section class="notification-success">
        Success
        <a class="close" href="#"><span class="hidden">Close</span></a>
    </section>
    <section class="notification-error">
        Error
        <a class="close" href="#"><span class="hidden">Close</span></a>
    </section>
    <section class="notification-warn">
        Warn
        <a class="close" href="#"><span class="hidden">Close</span></a>
    </section>
    <section class="notification-info">
        Info
        <a class="close" href="#"><span class="hidden">Close</span></a>
    </section>
</div>

{% highlight html %}
<!-- Success green notification -->
<section class="notification-success">
    Success
    <a class="close" href="#"><span class="hidden">Close</span></a>
</section>

<!-- Error red notification -->
<section class="notification-error">
    Error
    <a class="close" href="#"><span class="hidden">Close</span></a>
</section>

<!-- Warning orange notification -->
<section class="notification-warn">
    Warn
    <a class="close" href="#"><span class="hidden">Close</span></a>
</section>

<!-- Info blue notification -->
<section class="notification-info">
    Info
    <a class="close" href="#"><span class="hidden">Close</span></a>
</section>
{% endhighlight %}

## Notification Usage

Individual notifications are appended inside a `.notifications` element, which positions them and sets the width.

{% highlight html %}
<aside id="notifications" class="notifications">
    <div class="js-bb-notification" style="display: block; height: auto;">
        <section class="notification-success notification-passive js-notification">
            Saved
            <a class="close" href="#"><span class="hidden">Close</span></a>
        </section>
    </div>
</aside>
{% endhighlight %}

Notifications which need no immediate action (success) will automatically fade out after 3 seconds. This behavior is instantiated by the `.notification-passive` class.

# Typography

<div class="gui-example">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>

    <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Similique, nihil, nam, rerum, harum dolorum praesentium porro <b>laborum mollitia</b> corrupti laboriosam <i>deleniti cumque</i> ducimus veritatis nemo hic sapiente impedit error natus.</p>

    <hr>

    <p>Lorem ipsum dolor sit amet, consectetur <b><i>adipisicing elit</i></b>. Architecto, vero, <u>maiores repudiandae</u> facere dolorem <mark>laborum sint</mark> fuga sed praesentium consectetur!</p>

    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolor.</li>
        <li>Eligendi asperiores quas voluptatum dolorum eos libero earum omnis porro.</li>
        <li>Placeat voluptas quos assumenda harum amet modi nihil officia nobis?</li>
    </ul>

    <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque?</li>
        <li>Quae, consequuntur aliquid rem ex amet eos numquam quos tenetur.</li>
        <li>Odio, non maxime sapiente reiciendis doloribus. Unde, maiores dolor esse.</li>
    </ol>

    <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, distinctio fuga consequuntur recusandae aliquam odit quidem ut repudiandae adipisci impedit.</p>
        <small>Small</small>
        <cite>Citation</cite>
        <cite><a href="#">Linked Citation</a></cite>
    </blockquote>

    <img src="http://placekitten.com/g/500/300" alt="Kitten">

    <dl>
      <dt>Firefox</dt>
      <dd>Mozilla Firefox</dd>
      <dt>Chrome</dt>
      <dd>Google Chrome</dd>
    </dl>
</div>

{% highlight html %}
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>

<p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Similique, nihil, nam, rerum, harum dolorum praesentium porro <b>laborum mollitia</b> corrupti laboriosam <i>deleniti cumque</i> ducimus veritatis nemo hic sapiente impedit error natus.</p>

<hr>

<p>Lorem ipsum dolor sit amet, consectetur <b><i>adipisicing elit</i></b>. Architecto, vero, <u>maiores repudiandae</u> facere dolorem <mark>laborum sint</mark> fuga sed praesentium consectetur!</p>

<ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, dolor.</li>
    <li>Eligendi asperiores quas voluptatum dolorum eos libero earum omnis porro.</li>
    <li>Placeat voluptas quos assumenda harum amet modi nihil officia nobis?</li>
</ul>

<ol>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, itaque?</li>
    <li>Quae, consequuntur aliquid rem ex amet eos numquam quos tenetur.</li>
    <li>Odio, non maxime sapiente reiciendis doloribus. Unde, maiores dolor esse.</li>
</ol>

<blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, distinctio fuga consequuntur recusandae aliquam odit quidem ut repudiandae adipisci impedit.</p>
    <small>Small</small>
    <cite>Citation</cite>
    <cite><a href="#">Linked Citation</a></cite>
</blockquote>

<img src="http://placekitten.com/g/500/300" alt="Kitten">

<dl>
  <dt>Firefox</dt>
  <dd>Mozilla Firefox</dd>
  <dt>Chrome</dt>
  <dd>Google Chrome</dd>
</dl>
{% endhighlight %}

# Dropdowns

# Global

# Modals

# Nav bar

# Navs

# Tables

# Uploader