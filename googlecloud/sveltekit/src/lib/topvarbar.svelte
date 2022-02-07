<button class="top-right-nav" type="button" >
    <span class="dropdownusername" name="dropdownusername" id="dropdownusername">{{username}}</span>
    
    <svg role="img" height="16" width="16" class="Svg-ulyrgf-0 dIsYZz triangledropdown" viewBox="0 0 16 16"><path d="M13 10L8 4.206 3 10z"></path></svg>

<div class="profiledropdown">
        <ul class="menu-bar">
<li><a href="#">
            <div class="icon">
              <span class="fas fa-home"></span></div>
Home </a></li>

<li><a href="../profile/profile.html">
  <div class="icon">
    <span class="fas fa-user"></span></div>
Profile </a></li>

<li class="setting-item"><a href="#">
            <div class="icon">
              <span class="fas fa-cog"></span></div>
Settings<i class="fas fa-angle-right"></i>
          </a></li>
<li class="help-item"><a href="#">
            <div class="icon">
              <span class="fas fa-question-circle"></span></div>
Help & support <i class="fas fa-angle-right"></i>
          </a></li>

<li><a href="#" method="POST" action="/logout">
            <div class="icon">
              <span class="fas fa-comment-alt"></span></div>
Logout </a></li>
</ul>

        

<ul class="help-drop">
<li class="arrow back-help-btn"><span class="fas fa-arrow-left"></span>Help & support</li>
<li><a href="#">
            <div class="icon">
              <span class="fas fa-question-circle"></span></div>
Help centrer </a></li>
<li><a href="#">
            <div class="icon">
              <span class="fas fa-envelope"></span></div>
Support Inbox </a></li>
<li><a href="#">
            <div class="icon">
              <span class="fas fa-comment-alt"></span></div>
Send feedback </a></li>
<li><a href="#">
            <div class="icon">
              <span class="fas fa-exclamation-circle"></span></div>
Report problem </a></li>
</ul>

</div>
</button>

<script>
    const drop_btn = document.querySelector(".top-right-nav");
    const profiledropdown = document.querySelector(".profiledropdown");

    const menu_bar = document.querySelector(".menu-bar");
    const help_drop = document.querySelector(".help-drop");
    const setting_item = document.querySelector(".setting-item");
    const help_item = document.querySelector(".help-item");
    const help_btn = document.querySelector(".back-help-btn");
      
    drop_btn.onclick = (()=>{
      profiledropdown.classList.toggle("show");
      });

      
      help_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
          help_drop.style.display = "block";
        }, 100);
      });
      
      help_btn.onclick = (()=>{
        help_drop.style.display = "none";
        menu_bar.style.marginLeft = "0px";
      });

    </script>