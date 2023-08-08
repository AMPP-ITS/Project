<template>
    <div class="wrap">
        <img src="@/assets/Events-1.jpg">
        <div class="bgGrey"></div>
        <div class="wrap-kata">
            <div class="kata">
                <h1>Welcome to Our Magazine Collection!!</h1>
                <p>Explore our diverse collection of magazines that showcase the latest trends, insights, and achievements of our organization. Stay updated with the latest news, articles, and more!
                </p>
                <a class="button" href="#majalah">Learn More</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
*{
  font-family: "Montserrat", sans-serif;
}
.wrap{
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    overflow-x: hidden;
    
    img{
        object-fit: cover;
        position: absolute;
        left: 0;
    }

    .bgGrey{
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(90deg,rgba(0, 0, 0, 0),rgba(47, 47, 47, 0.7) 30%, #2F2F2F 60%);
        z-index: 2;
        width: 100%;
        height: 100%;
    }
}

@media only screen and (min-width: 1200px){
    .wrap{
        img{
            width: 100vw;
            height: 100vh;
        }
    }
}

@media only screen and (max-width: 1200px){
    .wrap{
        img{
            left: -80px;
            height: 100vh;
        }
    }
}

@media only screen and (max-width: 980px){
    .wrap{
        .bgGrey{
            background: linear-gradient(180deg,rgba(0, 0, 0, 0),rgba(47, 47, 47, 0.7) 30%, #2F2F2F 60%);
            
        }
    }
}

@media only screen and (max-width: 740px){
    .wrap{
        img{
            object-fit: cover;
        }
    }
}

.wrap-kata{
    position: absolute;
    z-index: 10;
    display: flex;
    padding: 0 48px;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 100%;
    max-width: 1280px;
    align-self: center;
    left: 50%;
    transform: translateX(-50%);

    .kata{
        color: white;
        display: flex;
        flex-direction: column;
        gap: 40px;

        h1{
            font-size: 48px;
            max-width: 500px;
            width: fit-content;
        }

        p{
            font-size: 24px;
            width: 580px;
            font-weight: 100;
        }

    }
}

@media only screen and (max-width: 980px){
    .wrap-kata{
        flex-direction: column;
        padding: 54px;
        height: 100%;;

        .kata{
            width: 100%;

            p{
                width: 100%;
            }
        }
    }
}

.button{
  padding: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, #FC6076, #FF9A44);
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  color: white;
  gap: 8px;
  padding: 16px 24px;
  font-size: 24px;
}

a{
  text-decoration: none;
}

// @media only screen and (max-width: )
</style>