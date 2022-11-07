<template>
  <section class="sorter">
    <div class="sorter_wrapper">
      <div class="container">
        <div class="sorter_group">
          <div class="sorter_radio sorter-radio">
            <div class="sorter-radio_text">маса</div>

            <div class="sorter-radio_input-group">
              <div
                class="sorter-radio_input"
                :class="{ active: sort.weight.indexOf('250') !== -1 }"
              >
                <label>
                  250 г
                  <input type="checkbox" value="250" v-model="sort.weight" />
                </label>
              </div>
              <div
                class="sorter-radio_input"
                :class="{ active: sort.weight.indexOf('500') !== -1 }"
              >
                <label>
                  500 г
                  <input type="checkbox" value="500" v-model="sort.weight" />
                </label>
              </div>
              <div
                class="sorter-radio_input"
                :class="{ active: sort.weight.indexOf('1000') !== -1 }"
              >
                <label>
                  1 кг
                  <input type="checkbox" value="1000" v-model="sort.weight" />
                </label>
              </div>
            </div>
          </div>
          <div class="sorter_radio sorter-radio">
            <div class="sorter-radio_text">помел</div>
            <div class="sorter-radio_input-group">
              <div
                class="sorter-radio_input"
                :class="{ active: sort.type.indexOf('ground') !== -1 }"
              >
                <label>
                  Мелена
                  <input type="checkbox" value="ground" v-model="sort.type" />
                </label>
              </div>
              <div
                class="sorter-radio_input"
                :class="{ active: sort.type.indexOf('grains') !== -1 }"
              >
                <label>
                  Зерна
                  <input type="checkbox" value="grains" v-model="sort.type" />
                </label>
              </div>
            </div>
          </div>

          <div class="sorter_clear">
            <button @click="clearSort">Очистити фільтри</button>
          </div>
        </div>
        <div class="sorter_group">
          <div class="sorter_type sorter-type">
            <div class="sorter-type_text">Сортувати</div>
            <div class="sorter-type_select">
              <v-select
                :value="sort.sortType"
                :options="sortOptions"
                @search="searching"
                @input="onSelect"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      sort: {
        weight: [],
        type: [],
        sortType: "По замовчуванню",
      },
      sortOptions: [
        "По замовчуванню",
        "Спочатку дешеві",
        "Спочатку дорогі",
        "Новинка",
        "Хіт продажів",
        "Акція",
      ],
    };
  },
  methods: {
    clearSort() {
      this.sort.weight = [];
      this.sort.type = [];
    },
    onSelect(val) {
      this.sort.sortType = val;
    },
    searching() {
      console.log("searching");
    },
  },
  watch: {
    sort: {
      handler() {     
        this.$emit("setSortedOptions", this.sort);
      },
      deep: true,
    },
  },
  beforeCreate() {},
};
</script>

<style scoped lang="scss">
.sorter {
  padding: 26px 0;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &_wrapper {
    max-width: 1710px;
    padding: 0 20px;
    margin: 0 auto;
    @include max-w(767) {
      padding: 0 16px;
    }
  }
  &_group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 0;
    &:nth-of-type(1) {
      margin-right: 20px;
      @include max-w(578) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  }

  &_radio {
    margin-right: 20px;
    @include max-w(578) {
      margin-right: 0;
    }
  }
  &-radio {
    display: flex;
    padding: 10px 0;

    border-right: 1px solid #d8d8d8;

    @include max-w(578) {
      border: none;
    }

    &_text {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #000000;
      margin-right: 20px;
    }
    &_input {
      position: relative;
      margin-right: 16px;

      label {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #666666;
        padding-left: 22px;
        &::before {
          content: "";
          left: 0;
          top: 0;
          position: absolute;
          display: block;
          width: 16px;
          height: 16px;
          border: 1px solid #c2c2c2;
          box-sizing: border-box;
        }
      }
      input {
        position: absolute;
        visibility: hidden;
      }

      &.active {
        label {
          color: #1b1b1a;
          &:before {
            background-color: #1b1b1a;
            border-color: #1b1b1a;
            background-image: url("../assets/images/sorter/check.png");
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
      &-group {
        display: flex;
      }
    }
  }

  &-type {
    display: flex;
    align-items: center;
    &_text {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #000000;
      margin-right: 20px;
    }
    &_select {
      ::v-deep .v-select {
        width: 268px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #1b1b1a;
        @include max-w(767) {
          width: 225px;
        }
        .vs__dropdown-toggle{
          border-radius: 0;
        }
      }
    }
  }

  &_clear {
    button {
      background: #1b1b1a;
      border-radius: 50px;
      border: none;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      padding: 4px 10px;
      @include max-w(578) {
        font-size: 13px;
      }
    }
  }
}
</style>
