<script context="module" lang="ts">
	export const prerender = true;

  import topnavbar from '$lib/topnavbar.svelte';
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<body class="body-css" style="background-color: #424242;" id="thebody">                
    <main class="maincontent" >

      <div class="stories">
        <div>
          <ul class="storiesul"> 
            
            <li class="storycontent" >
              <button class="storeisbutton">
                <div>
                </div>
                <div>Home</div>
              </button>
            </li>
  
            <li class="storycontent" >
              <button class="storeisbutton">
                <div>
                </div>
                <div>Quax</div>
              </button>
            </li>
            
            
            <li class="storycontent" >
              <button class="storeisbutton">
                <div>
                </div>
                <div>Home</div>
              </button>
            </li>
  
          </ul>
        </div>
      </div>
  
      
    
  
                  
    </main>






<div class="setting-show" id="setting-show">
<button class="setting-backbutton" >Back</button>
<div class="setting-helplist" style="text-decoration: none;">
<nav>
</nav>
</div>






    </div>
</body>

<style>
    
    
    .setting-show {
    display: none;
    }
    </style>
    