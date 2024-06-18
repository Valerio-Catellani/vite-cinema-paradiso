<template>
    <article id="wrap" class="position-relative">
        <footer class="inner-footer footer-section">
            <div class="container">
                <div class="footer-cta pt-2 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-3">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>Vieni a Trovarci</h4>
                                    <span>1010 Boolandia, sw 54321, Roma</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-3">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>Contattaci</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-3">
                            <div class="single-cta">
                                <i class="far fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Scrivici</h4>
                                    <span>BiancaSala@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content py-2">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-5">
                            <div class="footer-widget">
                                <div class="footer-logo d-flex justify-content-center ">
                                    <a href="index.html"><img src="/public/images/cinema_paradiso_logo.png"
                                            class="img-fluid" alt="logo"></a>
                                </div>
                                <div class="footer-text">
                                    <p>Cinema paradiso, un esperienza paradisiaca.</p>
                                </div>
                                <div class="footer-social-icon my-5 my-lg-3">
                                    <span>Seguici</span>
                                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-3">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Link Utili</h3>
                                </div>
                                <ul>

                                    <li v-for="links in navLinks" :key="links.id" class="">
                                        <router-link :to="links.path" exact>{{
                                            links.name
                                            }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-5">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Inscriviti alla newsletter</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p>Iscriviti per avere le ultime notizie e importanti sconti</p>
                                </div>
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address">
                                        <button><i class="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2024, Tutti i diritti riservati
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <!-- <div class="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="background-fade position-absolute">
            </div>
        </footer>
        <article id="lightings">
            <section id="one">
                <section id="two">
                    <section id="three">
                        <section id="four">
                            <section id="five">

                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </article>
    </article>
</template>

<script>
import { capitalize } from 'vue';

export default {
    name: 'FooterComponent',
    data() {
        return {
            navLinks: []
        }
    },
    mounted() {
        this.fillNavLinks();
    },
    methods: {
        fillNavLinks() {
            this.navLinks = this.$router.options.routes.filter(link => link.meta?.visible ?? false);
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

/* CSS Document */



#wrap {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto 0 auto;
    overflow: hidden;
    background-color: $background-footer;

    #lightings {
        bottom: -60px;
        position: absolute;
        width: 100%;
    }

    section {
        /*border-radius*/
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        height: 20px;
        width: 100%;
        position: relative;
        margin: auto;

    }

    #one {
        /*animation*/
        -webkit-animation: one 5s ease-in-out infinite alternate;
        -moz-animation: one 5s ease-in-out infinite alternate;
        -ms-animation: one 5s ease-in-out infinite alternate;
        -o-animation: one 5s ease-in-out infinite alternate;
        animation: one 5s ease-in-out infinite alternate;
    }

    @-webkit-keyframes one {
        from {
            -webkit-box-shadow: 0 0 250px 20px #473C78;
        }

        to {
            -webkit-box-shadow: 0 0 100px 15px #F72A3B;
        }
    }

    @-moz-keyframes one {
        from {
            -moz-box-shadow: 0 0 250px 20px #473C78;
        }

        to {
            -moz-box-shadow: 0 0 100px 15px #F72A3B;
        }
    }

    @-o-keyframes one {
        from {
            -o-box-shadow: 0 0 250px 20px #473C78;
        }

        to {
            -o-box-shadow: 0 0 100px 15px #F72A3B;
        }
    }

    @keyframes one {
        from {
            box-shadow: 0 0 250px 20px #473C78;
        }

        to {
            box-shadow: 0 0 100px 15px #F72A3B;
        }
    }

    #two {
        width: 90%;
        /*animation*/
        -webkit-animation: two 4s ease-in-out infinite alternate;
        -moz-animation: two 4s ease-in-out infinite alternate;
        -ms-animation: two 4s ease-in-out infinite alternate;
        -o-animation: two 4s ease-in-out infinite alternate;
        animation: two 4s ease-in-out infinite alternate;
    }

    @-webkit-keyframes two {
        from {
            -webkit-box-shadow: 0 0 250px 20px #18C499;
        }

        to {
            -webkit-box-shadow: 0 0 100px 15px #D8F05E;
        }
    }

    @-moz-keyframes two {
        from {
            -moz-box-shadow: 0 0 250px 20px #18C499;
        }

        to {
            -moz-box-shadow: 0 0 100px 15px #D8F05E;
        }
    }

    @-o-keyframes two {
        from {
            -o-box-shadow: 0 0 250px 20px #18C499;
        }

        to {
            -o-box-shadow: 0 0 100px 15px #D8F05E;
        }
    }

    @keyframes two {
        from {
            box-shadow: 0 0 250px 20px #18C499;
        }

        to {
            box-shadow: 0 0 100px 15px #D8F05E;
        }
    }

    #three {
        width: 80%;
        /*animation*/
        -webkit-animation: three 3s ease-in-out infinite alternate;
        -moz-animation: three 3s ease-in-out infinite alternate;
        -ms-animation: three 3s ease-in-out infinite alternate;
        -o-animation: three 3s ease-in-out infinite alternate;
        animation: three 3s ease-in-out infinite alternate;
    }

    @-webkit-keyframes three {
        from {
            -webkit-box-shadow: 0 0 250px 20px #FFDD00;
        }

        to {
            -webkit-box-shadow: 0 0 100px 15px #3E33FF;
        }
    }

    @-moz-keyframes three {
        from {
            -moz-box-shadow: 0 0 250px 20px #FFDD00;
        }

        to {
            -moz-box-shadow: 0 0 100px 15px #3E33FF
        }
    }

    @-o-keyframes three {
        from {
            -o-box-shadow: 0 0 250px 20px #FFDD00;
        }

        to {
            -o-box-shadow: 0 0 100px 15px #3E33FF
        }
    }

    @keyframes three {
        from {
            box-shadow: 0 0 250px 20px #FFDD00;
        }

        to {
            box-shadow: 0 0 100px 15px #3E33FF
        }
    }

    #four {
        width: 70%;
        /*animation*/
        -webkit-animation: four 2s ease-in-out infinite alternate;
        -moz-animation: four 2s ease-in-out infinite alternate;
        -ms-animation: four 2s ease-in-out infinite alternate;
        -o-animation: four 2s ease-in-out infinite alternate;
        animation: four 2s ease-in-out infinite alternate;
    }

    @-webkit-keyframes four {
        from {
            -webkit-box-shadow: 0 0 250px 20px #781848;
        }

        to {
            -webkit-box-shadow: 0 0 100px 15px #F2BBE9;
        }
    }

    @-moz-keyframes four {
        from {
            -moz-box-shadow: 0 0 250px 20px #781848;
        }

        to {
            -moz-box-shadow: 0 0 100px 15px #F2BBE9;
        }
    }

    @-o-keyframes four {
        from {
            -o-box-shadow: 0 0 250px 20px #781848;
        }

        to {
            -o-box-shadow: 0 0 100px 15px #F2BBE9;
        }
    }

    @keyframes four {
        from {
            shadow: 0 0 250px 20px #781848;
        }

        to {
            shadow: 0 0 100px 15px #F2BBE9;
        }
    }

    #five {
        width: 60%;
        /*animation*/
        -webkit-animation: five 1s ease-in-out infinite alternate;
        -moz-animation: five 1s ease-in-out infinite alternate;
        -ms-animation: five 1s ease-in-out infinite alternate;
        -o-animation: five 1s ease-in-out infinite alternate;
        animation: five 1s ease-in-out infinite alternate;
    }

    @-webkit-keyframes five {
        from {
            -webkit-box-shadow: 0 0 250px 20px #42F2A1;
        }

        to {
            -webkit-box-shadow: 0 0 100px 15px #F4F6AD;
        }
    }

    @-moz-keyframes five {
        from {
            -moz-box-shadow: 0 0 250px 20px #42F2A1;
        }

        to {
            -moz-box-shadow: 0 0 100px 15px #F4F6AD;
        }
    }

    @-o-keyframes five {
        from {
            -o-box-shadow: 0 0 250px 20px #42F2A1;
        }

        to {
            -o-box-shadow: 0 0 100px 15px #F4F6AD;
        }
    }

    @keyframes five {
        from {
            box-shadow: 0 0 250px 20px #42F2A1;
        }

        to {
            box-shadow: 0 0 100px 15px #F4F6AD;
        }
    }




}

.inner-footer {
    background: $background-zero-color;
    position: relative;


    ul {
        margin: 0px;
        padding: 0px;
    }

    .footer-cta {
        border-bottom: 1px solid $background-tertiary-color;
        padding-top: 80px !important;
    }

    .single-cta i {
        color: $active-primary-color;
        font-size: 30px;
        float: left;
        margin-top: 8px;
    }

    .cta-text {
        padding-left: 15px;
        display: inline-block;
    }

    .cta-text h4 {
        color: $text-primary-color;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .cta-text span {
        color: $text-primary-color;
        font-size: 15px;
    }

    .footer-content {
        position: relative;
        z-index: 2;
    }

    .footer-pattern img {
        position: absolute;
        top: 0;
        left: 0;
        height: 330px;
        background-size: cover;
        background-position: 100% 100%;
    }

    .footer-logo {
        margin-bottom: 30px;
    }

    .footer-logo img {
        max-width: 200px;
    }

    .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
        color: $text-primary-color;
        line-height: 28px;
    }

    .footer-social-icon span {
        color: #fff;
        display: block;
        font-size: 20px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        margin-bottom: 20px;
    }

    .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
    }

    .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
    }

    .facebook-bg {
        background: #3b5998;
    }

    .twitter-bg {
        background: #55acee;
    }

    .google-bg {
        background: #dd4b39;
    }

    .footer-widget-heading h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
    }

    .footer-widget-heading h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: $active-primary-color;
    }

    .footer-widget ul li {
        display: inline-block;
        float: left;
        width: 50%;
        margin-bottom: 12px;
    }

    .footer-widget ul li a:hover {
        color: $active-tertiary-color;
    }

    .footer-widget ul li a {
        color: $active-secondary-color;
        text-transform: capitalize;
    }

    .subscribe-form {
        position: relative;
        overflow: hidden;
    }

    .subscribe-form input {
        width: 100%;
        padding: 14px 28px;
        background: #2e2e2e;
        border: 1px solid #2e2e2e;
        color: #fff;
    }

    .subscribe-form button {
        position: absolute;
        right: 0;
        background: $active-primary-color;
        padding: 13px 20px;
        border: 1px solid $active-tertiary-color;
        top: 0;
    }

    .subscribe-form button i {
        color: #fff;
        font-size: 22px;
        transform: rotate(-6deg);
    }

    .copyright-area {
        background: #202020;
        padding: 25px 0;
    }

    .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
    }

    .copyright-text p a {
        color: $active-tertiary-color;
    }

    .footer-menu li {
        display: inline-block;
        margin-left: 20px;
    }

    .footer-menu li:hover a {
        color: $active-tertiary-color;
    }

    .footer-menu li a {
        font-size: 14px;
        color: #878787;
    }

    .background-fade {
        background: linear-gradient(180deg, $background-primary-color 11%, rgba(148, 187, 233, 0) 50%);
        height: 100px;
        width: 100%;
        top: 0;
    }
}
</style>