---
layout: default
title: CSS
---

# Buttons

## Colour Options

<div class="gui-example">
<a class="button">Button</a>
<a class="button-save">Save</a>
<a class="button-add">Add</a>
<a class="button-delete">Delete</a>
<a class="button-alt">Alt</a>
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

<!-- Link transparent button -->
<a class="button-link">Link</a>
{% endhighlight %}



## Button Sizes

<div class="gui-example">
    <a class="button">Standard</a>
    <a class="button large">Large</a>
</div>

{% highlight html %}
<!-- Standard size -->
<a class="button">Standard</a>

<!-- Large size -->
<a class="button-large">Large</a>
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




# Role Labels

<span class="role-label">Role Label</span>
<span class="role-label owner">Owner</span>
<span class="role-label admin">Admin</span>
<span class="role-label editor">Editor</span>





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