---
layout: default
title: CSS
---

All of the standalone HTML elements.

These are designed to fit in as many places as possible, and unless noted, do not need any parent elements to look & function correctly.


# Color Variables

<dl class="docs-color-list">
    
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
    <dd style="color: #fff;" class="blue-bg">$blue</dd>
    
    <dt class="red">$red</dt>
    <dd style="color: #fff;" class="red-bg">$red</dd>
    
    <dt class="orange">$orange</dt>
    <dd style="color: #fff;" class="orange-bg">$orange</dd>
    
    <dt class="green">$green</dt>
    <dd style="color: #fff;" class="green-bg">$green</dd>

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

The only place icon buttons work is on `.button`, `.button-[size]` and `.button-[color]`.

You can use any of the [icons](/icons/) packaged with Ghost-UI here.

<div class="gui-example">
    <a class="button-add icon-add">Button Icon</a>
    <a class="button-alt icon-ghost">Button Icon</a>
    <a class="button-save icon-add large">Add Large</a>
</div>

{% highlight html %}
<!-- Generic button with mail icon -->
<a class="button-icon icon-mail">Button Icon</a>

<!-- Alt (dark) button with Ghost icon -->
<a class="button-alt icon-ghost">Button Icon</a>

<!-- Large save (blue) button with add (plus) icon -->
<a class="button-save icon-add large">Add Large</a>
{% endhighlight %}




# Role Labels

There are little role labels that aren't meant to be used as anything else, such as links or buttons.

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

**Note:** Ghost-UI does no provide any syntax highlighting.

## Code & TT

Styling for `<code>` tags. 

<div class="gui-example">
    <p>A paragraph tag with a `code` tag <code>example code</code> looks like this.</p>
</div>

{% highlight html %}
<p>A paragraph tag with a `code` tag <code>example code</code> looks like this.</p>
{% endhighlight %}

## Pre

<div class="gui-example">
    <pre>console.log(object);</pre>
</div>

{% highlight html %}
<pre>console.log(object);</pre>
{% endhighlight %}

## Keyboard (KBD)

Styling for keyboard commands, simulating the look of a real-world keyboard keys.

<div class="gui-example">
    <p>Use <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>g</kbd></p>
</div>

{% highlight html %}
<p>Use <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>g</kbd></p>
{% endhighlight %}






# Dropdowns

<p>This just adds a downword-facing chevron, inheriting text &amp; link styles from its parents.</p>

<div class="gui-example">
    <a href="#" data-toggle="ul" class="dropdown">
        <span class="name">Dropdown Menu</span>
    </a>
</div>


{% highlight html %}
<!-- Standard dropdown -->
<a href="#" data-toggle="ul" class="dropdown">
    <span class="name">Dropdown Menu</span>
</a>

<!-- Active dropdown (just darker in colour) -->
<a href="#" data-toggle="ul" class="dropdown active">
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

{% highlight html %}
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
{% endhighlight %}


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



# Tables

Tables in Ghost-UI have two styles.
The first has horizontal borders and an alternating `$lightbrown` background. This comes from the `.table` class.
The second is has no visual styling, but resets default styling. This has no class, as the CSS targets the `<table>` element.

The only real difference between the two styles is one has borders, a different `<th>` color and background, the other does not.

<div class="gui-example" data-gui-title="Styled table">
    <table class="table">
        <thead>
            <tr>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="gui-example" data-gui-title="Plain table">
    <table>
        <thead>
            <tr>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
            <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
            </tr>
        </tbody>
    </table>
</div>

{% highlight html %}
<table class="table">
    <thead>
        <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

# Uploader

# Global

# Modals

At the bottom of the document, just before the `<script>` tags, there are 2 elements used by the modals JavaScript. HTML is appended to `#modal-container`, where as `.modal-background` is unhidden.

<div class="gui-example" style="position: relative; height: 400px;">
    <div id="modal-container" style="display: block; position: absolute;">
        <article class="modal-action modal-style-wide fade js-modal in">
            <section class="modal-content">
                <section class="modal-body">
                    <div>
                        <section class="js-drop-zone image-uploader">
                            <span class="media"><span class="hidden">Image Upload</span></span>
                            <img class="js-upload-target" src="" style="display: none;" alt="logo">
                            <input data-url="upload" class="js-fileupload main" type="file" name="uploadimage" accept="image/*">
                            <div class="description">Add image</div>
                            <div class="js-fail failed" style="display: none">Something went wrong :(</div>
                            <button class="js-fail button-add" style="display: none">Try Again</button>
                            <a class="image-url" title="Add image from URL">
                            <span class="hidden">URL</span></a>
                        </section>
                    </div>
                </section>
                <footer class="modal-footer">
                    <button class="js-button-accept button-save right">Save</button>
                    <button class="js-button-reject true">Cancel</button>
                </footer>
            </section>
        </article>
    </div>
    <div class="modal-background fade in" style="display: block; position: absolute;"></div>
</div>

{% highlight html %}
<!-- Trigger modal -->
<a href="#">Open Modal</a>

<!-- Boilerplate elements -->
<div id="modal-container"></div>
<div class="modal-background fade"></div>
{% endhighlight %}

Here's a full example of a modal, with content.

{% highlight html %}
<!-- Modal content -->
<div id="modal-container" style="display: block;">
    
    <article class="modal-action modal-style-wide fade js-modal in">
        <section class="modal-content">
            <section class="modal-body">
                <div>
                    <section class="js-drop-zone image-uploader">
                        <span class="media"><span class="hidden">Image Upload</span></span>
                        <img class="js-upload-target" src="" style="display: none;" alt="logo">
                        <input data-url="upload" class="js-fileupload main" type="file" name="uploadimage" accept="image/*">
                        <div class="description">Add image</div>
                        <div class="js-fail failed" style="display: none">Something went wrong :(</div>
                        <button class="js-fail button-add" style="display: none">Try Again</button>
                        <a class="image-url" title="Add image from URL">
                        <span class="hidden">URL</span></a>
                    </section>
                </div>
            </section>
            <footer class="modal-footer">
                <button class="js-button-accept button-save right">Save</button>
                <button class="js-button-reject true">Cancel</button>
            </footer>
        </section>
    </article>
</div>

<!-- Transparent grey background -->
<div class="modal-background fade in" style="display: block;"></div>
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