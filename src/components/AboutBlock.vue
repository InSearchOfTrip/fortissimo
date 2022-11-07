<template>
  <div class="about-block">
    <div class="container-wrapper large">
      <div class="body">
        <div class="left col">
          <h2>асортимент кави вас приємно здивує</h2>
          <p>Торгова марка Фортісімо представляє низку якісних сортів кави власного обсмаження. Серед ексклюзивних новинок: Ефіопія Їргачоф Кохера – стовідсоткова арабіка ніжної, оксамитової текстури зі смаком ревеню, чорниці та ароматними дерев’яними нотками, а також улюблена кава мільйонів: Бразилія Сантос з регіону Суль-ді-мінас.</p>
          <p>У переліку пропозицій арабіка, робуста і змішані композиції на основі В'єтнамської робусти Blue Dragon, кавові зерна якої підлягають технології полірування водою.</p>
        </div>
        <div class="center">
          <img src="../assets/images/test-about.png" alt="">
        </div>
        <div class="right col">
          <p>Придбати каву можна у будь-якому закладі мережі «Papa&Mama», «Fortissimo», «Blues&Jazz», «Porscheнь» та «Offroad», а дізнатися про оптові поставки можна за номером: (098) 404-04-30. Пропонуємо каву власного обсмаження у зручному фасуванні для споживання вдома.</p>
          <p>Запрошуємо спробувати авторські кавові напої у закладі. Співпрацюємо з оптовими покупцями на вигідних умовах. Пропонуємо брендову сувенірну продукцію.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-block {
  background: #1B1B1A;

  @include max-w(1200) {
    padding: 100px 0;
  }

  .body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 100px;

    @include max-w(1500) {
      grid-column-gap: 50px;
      grid-template-columns: 1fr 1.5fr 1fr;
    }

    @include max-w(1200) {
      grid-template-columns: 1fr;
      grid-row-gap: 100px;
    }

    .center {
      position: relative;
      height: 1000px;

      @include max-w(1200) {
        height: 560px;
        margin: 0 -16px;
        padding: 0 16px;
        width: calc(100% + 32px);
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-family: 'Cuprum';
        font-weight: 400;
        font-size: 46px;
        line-height: 54px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 30px;
      }

      p {
        font-family: 'Raleway';
        font-weight: 300;
        font-size: 20px;
        line-height: 26px;
        color: #FFFFFF;

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
