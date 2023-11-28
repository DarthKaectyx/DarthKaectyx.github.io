<script>
    function handleSubmit(){
        var Name = document.getElementById('firstName').value + " "+ document.getElementById('lastName').value
        var Email = document.getElementById('email').value
        var PhoneNumber = document.getElementById('phoneNumber').value

        console.log(Name);
        console.log(Email);
        console.log(PhoneNumber);
    }
</script>


<div class="form-style-6" on:submit|preventDefault={handleSubmit}>
    <h1>Register</h1>
    <form>
    <input type="text" id="firstName" placeholder="First Name" />
    <input type="text" id="lastName" placeholder="Last Name" />
    <input type= "password" id="password" placeholder="Password">
    <input type="email" id="email" placeholder="Email Address" />
    <input type="number" id="phoneNumber" placeholder="Phone Number"/>
    <input type="submit" value="Send" />
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


</style>