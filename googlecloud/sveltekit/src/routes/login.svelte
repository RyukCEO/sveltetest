<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

    //export async function post(){
        // @ts-ignore
        //const res = await post ('/api/login', {
           // username: this.username,
            //password: this.password
        //});
    //}

    //let data = fetch('/api/auth/login', {method: 'POST'});



</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="content">
	<form action="/login" class="login-form" id="reg-form" method="post" >
        <h1>Login</h1>
        
        <div class="txtb">
            <input type="email" id="email" name="email" placeholder="email" autocomplete="on">
            </div>

            <div class="txtb">
                <input type="password" id="password" name="password" placeholder="password">
            </div>

            <input type="submit" class="logbtn" value="login" id="loginbutton" Method="POST">

            <div class="bottom-text">
                Don't have account? <a href="http://localhost:8080/signup/"> Sign up</a>
            
            </div>
            <div class="bottom-text">
            
            </div>
            
    // @ts-ignore
    </form>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
    *{
    margin: 200;
    padding: 200;
    text-decoration:none;
    font-family: montserrat;
    box-sizing: border-box;
}


.login-form{
    width:360px;
    background:#f1f1f1;
    height: 580px;
    padding: 80px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.login-form h1{
    text-align:center;
    margin-bottom: 60px;
}

.txtb{
    border-bottom:2px solid #adadad;
    position: relative;
    margin: 30px 0;
}

.txtb input{
    font-size: 15px;
    color:#333;
    border: none;
    width:100%;
    outline:none;
    background: none;
    padding: 0 5px;
    height:40px;
}

.logbtn{
    display: block;
    width:100%;
    height: 50px;
    border: none;
    background: linear-gradient(120deg,#3498db,#8e44ad,#3498db);    
    background-size:200%;
    color:#fff;
    outline: none; 
    cursor:pointer;
    transition:.5s;
}

.logbtn:hover{
    background-position: right;
}

.bottom-text{
    margin-top: 60px;
    text-align: center;
    font-size: 13px;
}


</style>
