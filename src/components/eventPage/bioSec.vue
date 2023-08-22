<template>
    <div class="outer-wrap">
        <div class="wrap">
            <div class="kataSocial">
                <h2>Meet Our Speaker</h2>
                <p>{{ jelasSpeaker }}</p>
                <div class="social">
                    <a :href="instagram" target="_blank"><img src="@/assets/instagram.svg" ></a>
                    <a :href="youtube" target="_blank"><img src="@/assets/youtube.svg" ></a>
                    <a :href="twitter" target="_blank"><img src="@/assets/twitter.svg" ></a>
                    <a :href="tiktok" target="_blank"><img src="@/assets/tiktok.svg" ></a>
                    <a :href="linkedin" target="_blank"><img src="@/assets/linkedin.svg" ></a>
                </div>
            </div>
            <div class="pembicara">
                <img :src="speaker">
            </div>
        </div>
    </div>
</template>

<script>
import org from '@/assets/org.png';

export default {
    props: {
        instagram: {
            type: String,
            default: null
        },
        youtube: {
            type: String,
            default: null
        },
        linkedin: {
            type: String,
            default: null
        },
        twitter: {
            type: String,
            default: null
        },
        tiktok: {
            type: String,
            default: null
        },
        jelasSpeaker: {
            type: String,
            default: "Penjelasan Speaker sit amet, consectetur adipiscing elit. Proin quis vulputate arcu. Maecenas nec velit et turpis vestibulum tempor. Vivamus maximus, urna in aliquet venenatis, sem sem efficitur justo, non auctor eros magna non leo. Maecenas non"
        },
        speaker: {
            default: org
        }   
    },
}
</script>

<style lang="scss" scoped>
*{
  font-family: "Montserrat", sans-serif;
}

.wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    padding: 0 24px;

    img{
        width: 400px;
        height: 550px;
    }
}

.outer-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
}

.kataSocial{
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 650px;

    h2{
        font-size: 48px;
    }

    p{
        font-size: 24px;
    }

    .social{
        a{
            img{
                width: 36px;
                height: 36px;
            }
        }

        display: flex;
        gap: 20px;
    }
}

@media only screen and (max-width: 980px){
    .outer-wrap{
        height: 1300px;
    }

    .wrap{
        flex-direction: column-reverse;

        .kata{
            width: 100%;

            p{
                width: 100%;
            }
        }

        gap: 40px;
    }

    .pembicara{
        img{
            width: 300px;
            height: 450px;
        }
    }
}
</style>