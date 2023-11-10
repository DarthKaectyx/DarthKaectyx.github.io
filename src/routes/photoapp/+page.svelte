<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
    let images = [image, photo, picture]
</script>
<title>Photo App</title>

<h1>Photo App</h1>
<div class="photos">
    <div class="image-wrapper">
        <img src={images[0]} alt="flexbox rules">
    </div>
    <div class="image-wrapper">    
        <img src={images[1]} alt="flexbox rules">
    </div>
    <div class="image-wrapper">    
        <img src={images[2]} alt="flexbox vs gridbox">
    </div>
    
</div>
<style>
    .image-wrapper img {
        max-width: 100% ;
        flex-wrap: wrap;
        padding: 5px;
    }
    .photos{
        display:flex;
        max-width: 90vw;
        overflow: hidden;
        align-items: center;
        justify-content: space-around;
        
    }

</style>