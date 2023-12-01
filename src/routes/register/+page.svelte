<script>
    function handleSubmit(){
        var Name = document.getElementById('firstName').value + " "+ document.getElementById('lastName').value
        var Email = document.getElementById('email').value
        var PhoneNumber = document.getElementById('phoneNumber').value
        var Password = document.getElementById('password').value

        console.log(Name);
        console.log(Email);
        console.log(PhoneNumber);
        console.log(Password);
    }
</script>


<div class="form-style-6" on:submit|preventDefault={handleSubmit}>
    <h1>Register</h1>
    <form>
    <input type="text" id="firstName" placeholder="First Name" />
    <input type="text" id="lastName" placeholder="Last Name" />
    <input type="email" id="email" placeholder="Email Address" />
    <input type="text" id="phoneNumber" placeholder="Phone Number"/>
    <input type= "password" id="password" placeholder="Password">
    <input type="submit" value="Register" />
    <a href="/login">Already have an account?</a>
    </form>
    
</div>

<style>

    .form-style-6{
        font: 95% Arial, Helvetica, sans-serif;
        padding: 16px;
        margin: 10px auto;
    }

    h1{
        width: 30vw;
        max-width: 500px;
        min-width: 300px;
        background: #43D1AF;
        padding: 20px 0;
        font-size: 140%;
        font-weight: 300;
        text-align: center;
        color: #fff;
        margin: auto;
        margin-bottom: 3px;
    }

    form{
        display:grid;
        width: 30vw;
        max-width: 500px;
        min-width: 300px;
        margin: auto;
        background-color: #00B980;
    }

    input{
        padding: 10px;
        margin: 10px;
    }

    a{
        margin: auto;
        padding-bottom: 10px;
    }

</style>