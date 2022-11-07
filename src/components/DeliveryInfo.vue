<template>
  <section class="delivery-info">
    <div class="container-wrapper">
      <div class="row-1">
        <div class="col">
          <h2>Способи доставки</h2>
          <ul>
            <li class="item-list-coffee text">Нова пошта / Доставка у відділення</li>
            <li class="item-list-coffee text">Нова пошта / Адресна доставка</li>
            <li class="item-list-coffee text">Самовивіз з магазину</li>
          </ul>
          <div class="link">
            <a href="#">Тарифи </a>Нової пошти
          </div>
        </div>
        <div class="col">
          <h2>Способи оплати</h2>
          <ul>
            <li class="item-list-coffee text">Онлайн оплата Liqpay на сайті</li>
            <li class="item-list-coffee text">Накладений платіж (Післяоплата)</li>
            <li class="item-list-coffee text">Оплата готівкою при отриманні</li>
          </ul>
        </div>
        <div class="col">
          <h2>Інформація для покупця</h2>
          <ul>
            <li class="item-list-coffee text">Відправлення здійснюється в день замовлення при оформленні замовлення до 13:00.</li>
            <li class="item-list-coffee text">Перевіряйте посилку при отриманні.</li>
            <li class="item-list-coffee text">Забирайте покупки вчасно.</li>
            <li class="item-list-coffee text">Будемо вдячні за відгуки у наших соціальних профілях.</li>
          </ul>
        </div>
      </div>
      <div class="row-2">
        <div class="col">
          <h2>Умови доставки Нова пошта</h2>
          <p class="text">При надсиланні будь-яких замовлень Новою Поштою діє автоматично послуга “Автоповернення”. </p>
          <p class="text">Послуга передбачає автоматичне повернення відправлення, яке зберігалося у відділенні компанії на 7-й робочий день відділення, та не було забрано одержувачем. </p>
          <p class="text">Якщо потрібно продовжити термін зберігання більш ніж на 7 робочих днів, прохання це вказувати при оформленні замовлення.</p>
        </div>
        <div class="col">
          <h2>Умови доставки Нова пошта</h2>
          <p class="text">Замовлення, повністю підтверджені до 12:00 буде надіслано цього ж дня після 17:30, відправка решти замовлень буде проведена наступного робочого дня після 17:30. Ви отримаєте автоматичне смс із номером ТТН. </p>
          <p class="text">Замовлення, які були підтверджені в п'ятницю після 12:00, будуть надіслані в суботу до 15:00, решта замовлень буде відправлена з понеділка.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.delivery-info {
  margin-bottom: 170px;

  @include max-w(900) {
    margin-bottom: 100px;
  }

  h2 {
    font-family: 'Cuprum';
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #1B1B1A;
    margin-bottom: 24px;
  }

  .text {
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 20px;
    line-height: 26px;
    color: #1B1B1A;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .row-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 75px;

    .col {
      &:not(:last-child) {
        padding-right: 30px;
      }

      @include max-w(900) {
        &:not(:last-child) {
          padding-right: 0;
        }
      }
    }

    @include max-w(900) {
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      margin-bottom: 40px;
    }

    .link {
      font-family: 'Raleway';
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #1B1B1A;
      margin-top: 24px;

       a {
         color: #F2000E;
         transition: 0.3s ease;

         &:hover {
           opacity: 0.6;
         }
       }
    }
  }

  .row-2 {
    display: grid;
    grid-template-columns: 2fr 1fr;

    @include max-w(900) {
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    }

    .col {
      &:first-child {
        padding-right: 60px;

        @include max-w(900) {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
