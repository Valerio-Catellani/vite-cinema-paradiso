<template>
    <header class="hype-shadow-white z-1">
        <nav id="hype-custom-nav" ref="hypeCustomNav"
            class="fixed-header container d-flex margin-x-auto rounded-2 align-items-center justify-content-between">
            <div class="d-flex h-100 align-items-center">
                <div class="logo-img-container d-flex align-items-center">
                    <img class="img-fluid hype-color-invert rounded-circle" src="/public/images/logo_paradiso.jpeg"
                        alt="logo" />
                </div>
                <div id="hype-nav-menu" class="d-flex h-100 d-none d-lg-block align-items-center">
                    <ul class="navbar-nav h-100 mb-2 mb-lg-0 d-flex flex-row align-items-center">
                        <li v-for="links in navLinks" :key="links.id"
                            class="nav-item d-flex align-items-center px-3 custom-border">
                            <router-link :to="links.path" class="nav-link" exact>{{
                                capitalizeString(links.name)
                            }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="user-account gap-3 d-flex fs-3 align-self-stretch align-items-end">
                <div id="hype-nav-search-button" ref="hypeNavSearchButton" class="icon-container rounded-top-2 order-0"
                    role="button" @click="toggleMenu('hypeNavSearchBarInput', $event)">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="hype-nav-login-button" ref="hypeNavLoginButton"
                    class="icon-container rounded-top-2 d-flex flex-column justify-content-center order-2"
                    role="button"><a href="http://localhost:8000/login" class="text-decoration-none text-white">
                        <i class="fa-solid fa-user"></i>
                    </a>
                </div>
                <div id="hype-nav-kebab-button" ref="hypeNavKebabButton"
                    class="icon-container rounded-top-2 d-lg-none order-1" role="button"
                    @click="toggleMenu('hypeNavKebabMenu', $event)">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div id="hype-nav-search-bar-input" ref="hypeNavSearchBarInput"
                    class="search-bar-input bar-input active-color rounded-bottom-2 position-absolute container d-none">
                    <form class="d-flex p-3" role="search">
                        <input class="form-control me-4 bg-dark-subtle" type="search" placeholder="Search"
                            aria-label="Search" />
                        <button class="mine-custom-btn text-white hover-size" type="submit">Search</button>
                    </form>
                </div>
                <div id="hype-nav-kebab-menu" ref="hypeNavKebabMenu"
                    class="bar-input active-color rounded-bottom-2 position-absolute container d-none">
                    <div class="w-100 d-flex align-content-center justify-content-center p-3">
                        <ul class="fs-6 w-100 text-decoration-none list-unstyled text-center gap-2 m-0">
                            <li v-for="links in navLinks" :key="links.id"
                                class="py-1 border-bottom border-dark border-1">
                                <router-link :to="links.path" class="nav-link" exact>{{
                                    capitalizeString(links.name)
                                    }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="hype-nav-login-bar-input" ref="hypeNavLoginBarInput"
                    class="bar-input active-color rounded-bottom-2 position-absolute container d-flex p-0 d-none">
                    <!-- Authentication and login logic here -->
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import { capitalize } from 'vue';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            openElement: null,
            eventTarget: {
                originalTemplate: '',
                eventElement: null,
            },
            initialPositionWindow: 0,
            navLinks: []
        };
    },
    // props: {
    //     links
    // },
    mounted() {
        this.fillNavLinks();
        this.$nextTick(() => {
            const header = this.$refs.hypeCustomNav;
            if (header) {
                setTimeout(() => {
                    header.style.transition = 'transform 0.3s ease-out';
                }, 200);
            }
        });
        window.addEventListener('scroll', this.updateScrollPosition);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateScrollPosition);
    },
    methods: {
        updateScrollPosition() {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition !== this.initialPositionWindow || this.openElement !== null) {
                this.initialPositionWindow = currentScrollPosition;
                this.render();
            }
        },
        toggleMenu(menuItem, event) {
            const menuToOpen = this.$refs[menuItem];
            if (this.openElement === menuToOpen) {
                menuToOpen.classList.toggle('d-none');
                this.eventTarget.eventElement.classList.remove('active-color');
                this.eventTarget.eventElement.innerHTML = this.eventTarget.originalTemplate;
                this.$refs.hypeCustomNav.classList.remove('border-opened-menu');
                this.openElement = null;
            } else {
                this.closeAll();
                this.openElement = menuToOpen;
                this.eventTarget.eventElement = event.currentTarget;
                this.eventTarget.originalTemplate = event.currentTarget.innerHTML;
                event.currentTarget.classList.add('active-color');
                event.currentTarget.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                menuToOpen.classList.toggle('d-none');
                this.$refs.hypeCustomNav.classList.add('border-opened-menu');
            }
        },
        closeAll() {
            if (this.openElement !== null) {
                this.openElement.classList.add('d-none');
            }
            if (this.eventTarget.eventElement !== null) {
                this.eventTarget.eventElement.classList.remove('active-color');
                this.eventTarget.eventElement.innerHTML = this.eventTarget.originalTemplate;
            }
        },
        render() {
            const renderElement = this.$refs.hypeCustomNav;
            if (renderElement) {
                renderElement.classList.toggle('window-movement', this.checkMovement());
            }
        },
        checkMovement() {
            return this.initialPositionWindow !== 0;
        },
        fillNavLinks() {
            this.navLinks = this.$router.options.routes.filter(link => link.meta?.visible ?? false);
        },
        capitalizeString(string) {
            return capitalize(string);
        },
    },
};
</script>
<style lang="scss" scoped>
@use '../assets/styles/partials/_variables' as *;

.active-color {
    background-color: black;
}

header {
    height: 75px;
    background-color: $background-zero-color;
    box-shadow: 2px 2px 5px $shadow-primary-color;

    .active-color {
        background-color: $background-secondary-color !important;
        //box-shadow: 2px 2px 5px black;
    }

    .window-movement {
        transform: translate(-50%, 10px) !important;
        transition: transform 0.3s ease-out;
        box-shadow: 2px 2px 2px $shadow-primary-color;
    }

    .border-opened-menu {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }

    #hype-custom-nav {
        position: fixed;
        top: 0;
        z-index: 1000;
        height: 75px;
        left: 50%;
        transform: translateX(-50%);
        background-color: inherit;
        color: $text-primary-color !important;

        .logo-img-container {
            width: 7%;
            width: 90px;

            img {
                width: 70px;
                object-fit: cover;
            }
        }

        #hype-nav-menu {
            .custom-border {
                border-right: 2px solid $background-tertiary-color;
            }

            li {
                position: relative;
                height: 80%;

                .router-link-exact-active {
                    &::after {
                        content: "";
                        position: absolute;
                        bottom: 10px;
                        left: 10%;
                        width: 80%;
                        height: 2px;
                        background-color: $active-primary-color;
                    }
                }

                a {
                    &::after {
                        content: "";
                        position: absolute;
                        bottom: 10px;
                        left: 10%;
                        width: 0%;
                        height: 2px;
                        background-color: $active-primary-color;
                        transition: width 0.2s ease-out;
                    }

                    &:hover::after {
                        width: 80%;
                        /* Modifica la larghezza quando passi sopra con il mouse */
                    }
                }
            }
        }

        .user-account {
            color: white;
            background-color: inherit;

            li {
                &:hover {
                    background-color: $background-tertiary-color;
                }
            }

            .icon-container {
                width: 40px;
                height: 57.5px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: calc((75px - 40px) / 2);
            }

            .bar-input {
                top: 100%;
                left: 0%;
                background-color: inherit;
                box-shadow: 2px 2px 2px $shadow-primary-color;
            }

            .search-bar-input {
                height: 70px;
            }
        }

        button {
            &:hover {
                color: white;
            }
        }
    }
}
</style>