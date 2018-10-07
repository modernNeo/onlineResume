# onlineResume

I came upon a nice little npm tool called [resume-cli](https://github.com/jsonresume/resume-cli) which takes in a json file and spits out an html file. Naturally, there were things I wanted to add to it however. They include  
 * Navbar
 * SmoothScroll
 * Having the page update the active tab in the navbar when scrolling

Those extra things can be done like so

1. `resume export index.html`
1. Add the following to the css section
```css
.stickyNav{
	position: fixed;
	float: left;
}
```
1. Add following JavaScript queries
```javascript
<!-- these two links are used to utilize the scrollspy with smooth scrolling -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```
1. Add the following
```html
		<nav class="stickyNav">
			<div class="container-fluid">
				<div class="collapse navbar-collapse" id="myNavbar"> <!-- myNavBar is also needed for smooth scrolling -->
					<ul class="nav nav-pills nav-stacked mr-auto">
						<li class="nav-item active"><a href="#contact">Contact</a></li>
						<li class="nav-item"><a href="#about">About</a></li>
						<li class="nav-item"><a href="#profiles">Profiles</a></li>
						<li class="nav-item"><a href="#work">Work</a></li>
						<li class="nav-item"><a href="#volunteer">Volunteer</a></li>
						<li class="nav-item"><a href="#education">Education</a></li>
						<li class="nav-item"><a href="#skills">Skills</a></li>
						<li class="nav-item"><a href="#languages">Languages</a></li>
						<li class="nav-item"><a href="#interests">Interests</a></li>
					</ul>
				</div>
			</div>
		</nav>  
		<div style="display:flex;"> <!-- this is being added because otherwise, each section takes up the whole page, the reason is detailed here: https://stackoverflow.com/a/42787695 -->
```
between
```html
</header>
```

and

```html
<div id="content" class="container">
```
1. Add the following
```html
		</div>

	<script src="extra.js"></script>
```
between 
```html
</div>
```

and

```html
</body>
```