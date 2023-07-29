<template>
    <div>
        <div class="kata">
            <h1 class="judul">AMPP</h1>
            <h2 class="sub-judul">Institut Teknologi Sepuluh Nopember</h2>
            <h2 class="sub-judul1">Student Chapter</h2>
            <a href=""><button class="btn">Explore More</button></a>
        </div>
    </div>
</template>

<script scoped>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

.kata {
  background: url('@/assets/bglanding.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top;
  overflow: hidden;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.judul {
  color: white;
  font-size: 130px;
  font-weight: 700;
  font-family: "Inter";
  text-align: center;
  margin-top: 180px;

  @media (max-width: 428px) {
    font-size: 80px;
  }

  @media (max-width: 390px) {
    font-size: 74px;
  }
}

.sub-judul {
  color: white;
  font-size: 32px;
  font-weight: 500;
  font-family: "Montserrat";
  text-align: center;
  margin-top: -5px;

  @media (max-width: 428px) {
    font-size: 28px;
    margin-top: 5px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
    margin-top: 5px;
  }
}

.sub-judul1 {
  color: white;
  font-size: 32px;
  font-weight: 500;
  font-family: "Montserrat";
  text-align: center;
  margin-top: 10px;

  @media (max-width: 428px) {
    font-size: 28px;
    margin-top: 15px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
    margin-top: 15px;
  }
}

.btn {
  border-radius: 10px;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  transition: ease-out 0.3s;
  background: linear-gradient(to right, #FC6076, #FF9A44);
  color: white;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 18px;
  margin-top: 25px;

  @media (max-width: 414px) {
    padding: 9px 13px;
    font-size: 16px;
  }

  @media (max-width: 390px) {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: 360px) {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: 375px) {
    padding: 8px 12px;
    font-size: 14px;
  }


}

.btn:hover {
  transform: scale(1.1);
}


</style>