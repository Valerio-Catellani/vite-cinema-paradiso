<template>
    <div>

        <div class="slideshow-container d-flex ">
            <div class="img-paradiso">
                <div class="mySlides fade">
                    <img src="/public/images/cinemablu.jpg">
                </div>
                <div class="mySlides fade">
                    <img src="/public/images/cinema.jpg">
                </div>
                <div class="mySlides fade">
                    <img src="/public/images/salaverde.jpg">
                </div>
                <div class="mySlides fade">
                    <img src="/public/images/cinemablu.jpg">
                </div>
                <div class="mySlides fade">
                    <img src="/public/images/salablu.jpg">
                </div>

                <div class="mySlides fade">
                    <img src="/public/images/salarossa.jpg">
                </div>


                <div class="mySlides fade">
                    <img src="/public/images/sala2.jpg">
                </div>

                
            </div>
            <div class="descrizione">
                <h1>testo</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quisquam mollitia. Enim,
                    consequatur! Necessitatibus, perspiciatis a ad repellat nulla mollitia.</p>
            </div>

        </div>

        <div class="pop-corn"></div>
        <div class="col-12 col-lg-6" v-for="room in rooms" :key="room.id">
            <CardComponent :item="room" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'RoomsListComponent',
    data() {
        return {
            store,
            slideIndex: 0,
            slides: []
        };
    },
    methods: {

        showSlides() {

            let i;
            this.slides = document.querySelectorAll(".mySlides");
            if (this.slides.length === 0) return;
            for (i = 0; i < this.slides.length; i++) {
                this.slides[i].classList.add('d-none');

            }
            this.slideIndex++;
            if (this.slideIndex > this.slides.length) { this.slideIndex = 1 }
            this.slides[this.slideIndex - 1].classList.remove('d-none');

        }
    },

    created() {
        /* this.showSlides(); */
        this.showSlides();
        setInterval(this.showSlides, 2000);
    }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box
}

.slideshow-container {
    /* max-width: 1000px; */
    height: calc(100vh - 100px);
    margin: auto;
   background-color: rgb(20, 16, 54);

    .img-paradiso {
        width: 50%;
    }

    .descrizione {
        color: rgb(255, 255, 255);
        width: 50%;
        overflow: hidden;
        padding-top: 30px;
        padding-left: 15px;
    }

    img {
        object-fit: contain;
        overflow: hidden;
        width: 100%;
        height: calc(100vh - 100px);
    }

    .fade {
        object-fit: contain;
        animation-name: fade;
        animation-duration: 2s;
    }

}


@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

.pop-corn {
    background-image: url(/public/images/pop.jpg);
    background-size: cover;
    height: 100vh;
}
</style>