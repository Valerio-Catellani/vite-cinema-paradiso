<template>
    <div class="container info-container">
        <div class=" d-flex hype-w-60x100 rounded-5 bg-light p-3 gradient-white-top shadow-white">
            <div class="img-container rounded-circle overflow-hidden me-2"
                :class="order % 2 === 0 ? 'order-2' : 'order-1'">
                <img class="img-fluid" src="/public/images/wrapper_paradiso_2.jpeg" alt="logo" />
            </div>
            <div :class="order % 2 === 0 ? 'order-2' : 'order-1'">
                <h3>About us</h3>
                <P>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolores iste, reiciendis vel
                    maxime
                    optio quos eaque, voluptatum nostrum magnam non numquam hic! Cumque quam temporibus, voluptates
                    tempore
                    asperiores consequuntur alias pariatur fuga numquam repellat sint, voluptatum laboriosam
                    exercitationem
                    fugit eius. Enim inventore ullam, blanditiis harum assumenda consequuntur placeat quos adipisci eius
                    deleniti quasi! Ipsam, doloribus! Corrupti dicta soluta exercitationem blanditiis omnis, nemo
                    possimus
                    qui
                    perferendis delectus similique hic in ipsum sed quas animi quod tenetur distinctio? Omnis doloribus
                    voluptatibus labore, ab modi atque deserunt ullam veniam velit soluta molestias placeat cumque in
                    iure
                    quis
                    saepe aliquid, ipsum, explicabo odio.
                </P>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoComponent',
    props: {
        order: Number
    }
}
</script>

<style lang="scss" scoped>
.img-container {
    min-width: 300px;
    width: 300px;
    min-height: 300px;
    height: 300px;
}

.info-container {
    padding: 5rem 10px;
}
</style>