<template>
    <div class="luar">
        <div class="judul">
            <h1 class="judul">About Us</h1>
            <p class="capt">AMPP Institut Teknologi Sepuluh Nopember Student Chapter also called AMPP ITS Student Chapter is student association that have concern in the protection of assets and performance of materials, which
                 was established in 2016 by ITS student.</p>
            <p class="capt-2">The Association for Materials Protection and Performance, AMPP, is the world’s leading organization focused on the protection of assets and performance of materials. AMPP was created when NACE International and SSPC united after more than 145 combined years of corrosion control and protective coatings expertise, and service to members worldwide. Headquartered in the U.S., AMPP is active in more than 130 countries and has more than 40,000 members.</p>
        </div>
    </div>
</template>

<script scoped>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Khula&display=swap');

.luar {
    background: #EE363A;
}

.judul {
    font-family: "Inter";
    color: white;
    font-weight: 700;
    text-align: center;
    padding-top: 40px;
    font-size: 40px;

    @media (max-width: 428px) {
    font-size: 34px;
  }
}

.capt {
    color: white;
    font-size: 20px;
    font-family: "Khula";
    font-weight: 400;
    padding-top: 30px;
    text-align: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;

    @media (max-width: 428px) {
    font-size: 18px;
  }
}

.capt-2 {
    color: white;
    font-size: 20px;
    font-family: "Khula";
    font-weight: 400;
    padding-top: 30px;
    text-align: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;

    @media (max-width: 428px) {
    font-size: 18px;
  }
}
</style>