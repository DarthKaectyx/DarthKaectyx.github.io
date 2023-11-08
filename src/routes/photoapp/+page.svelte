<title>Photo App</title>

<h1>Photo App</h1>
<div class="photos">
    <div class="image-wrapper">
        <img src="https://i.redd.it/rofzm44oka091.png" alt="flexbox rules">
    </div>
    <div class="image-wrapper">    
        <img src="https://i.redd.it/vd9dc7wfk9471.png" alt="flexbox rules">
    </div>
    <div class="image-wrapper">    
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBBpxt5B1_wx42L-ne7ljT7mgyxfEMOCrXQ&usqp=CAU" alt="flexbox vs gridbox">
    </div>
    
</div>
<style>
    .image-wrapper img {
        max-width: 100% ;
        flex-wrap: wrap;
    }
    .photos{
        display:flex;
        max-width: 90vw;
        overflow:hidden;
        align-items: center;
        justify-content: space-around;
        
    }
    .photos img {
        max-width: 30%;
    }
</style>