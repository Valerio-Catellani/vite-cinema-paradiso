<template>
   
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facilis.

        <div class="container p-0">
            <div class="d-flex flex-wrap">
               
               
              
               <div v-for="index in 5" class="d-flex card-paradiso ">
                    <img src="/public/images/right-part.jpg" class="w-25" alt="">
                    <div class="w-75 item-description">
                        <h1>titolo</h1>
                        <p>trama</p>
                        <p>cast</p>
                        <p>regista</p>
                    </div>
                    <div class="circle"><i class="fa-solid fa-volume-high"></i></div>

                </div> 

            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="/public/images/right-part.jpg" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    name: 'ContactComponent',
}
</script>

<style lang="scss" scoped>
.card-paradiso {
   width: calc(100% / 2 - 5px);
  
    position: relative;
    border-radius: 15px;
    margin-bottom: 5px;
    background: linear-gradient(135deg, #42434a, #941717);
    padding: 0px;
    margin-right: 5px;

    .item-description {
        padding-left: 10px;
    }

    img {
        overflow: hidden;
        width: 100%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;


    }

    .circle {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 60px;
        height: 60px;
        background-color: #3498db;
        border-radius: 50%;
        transition: transform 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
            justify-content: center;
            align-items: center;
        }

    }

    .circle:hover {
        animation: vibrate 0.2s infinite;
    }

    @keyframes vibrate {
        0% {
            transform: translate(0, 0);
        }

        25% {
            transform: translate(1px, -1px);
        }

        50% {
            transform: translate(0, 1px);
        }

        75% {
            transform: translate(-1px, 0);
        }

        100% {
            transform: translate(0, 0);
        }
    }


}
</style>