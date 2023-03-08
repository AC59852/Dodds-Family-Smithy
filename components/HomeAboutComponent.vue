<template>
  <section class="home__about">
    <img src="@/assets/about_working.jpg" alt="Image of Dalton Dodds working at his grinding table">
    <div class="about__text">
      <h2>About</h2>
      <p>A family-owned blacksmith specializing in hand-forged metalwork. From custom weaponry to artisanal decoration, we create pieces that are built to last. Read more about our great story.</p>
      <div class="about__btns">
        <NuxtLink to="/" class="about__btn about__btn--story">Our Story</NuxtLink>
        <NuxtLink to="/" class="about__btn about__btn--faq">FAQ</NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .home__about {
    max-width: 100%;
    margin: 0 auto;
    padding: 150px 0;
    display: flex;
    justify-content: center;
    gap: 80px;
    align-items: center;
    /* background-image: url('@/assets/doodles.png');
    background-size: contain;
    background-position: center; */
  }

  .home__about img {
    width: 420px;
    height: 540px;
    object-fit: cover;
  }

  .about__text h2 {
    font-family: 'League Spartan';
    font-size: 72px;
    font-weight: bold;
    color: white;
  }

  .about__text p {
    font-family: 'Poppins';
    font-size: 16px;
    color: white;
    font-weight: 300;
    width: 530px;
    line-height: 170%;
    margin: 35px 0;
  }

  .about__btns {
    display: flex;
    gap: 20px;
  }

  .about__btn {
    font-family: 'Poppins';
    font-size: 17px;
    color: white;
    border: solid 2px #CE3D3D;
    width: 190px;
    padding: 17px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.2s ease;
  }

  .about__btn--story {
    background-color: #CE3D3D;
  }

  .about__btn--faq {
    background-color: transparent;
  }

  .about__btn:hover {
    /* add a red dropshadow */
    box-shadow: 0 0 10px 4px #CE3D3D;
  }
</style>