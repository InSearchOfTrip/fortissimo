<template>
  <div class="textarea">
    <textarea
      v-model.trim.lazy="localValue"
      :class="{ error: validClass }"
      name="comment"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      // type: String,
      default: "",
    },
    placeholder: {
      // type: String,
      default: "",
    },
    validClass: {
      default: "",
    },
  },
  data() {
    return {
      localValue: "",
    };
  },
  created() {
    if (this.value) {
      this.localValue = this.value;
    }
  },
  watch: {
    localValue() {
      if (this.value !== this.localValue) {
        this.$emit("input", this.localValue);
      }
    },
    value() {
      if (this.value !== this.localValue) {
        this.localValue = this.value;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.textarea {
  textarea {
    font-family: "Raleway";
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 12px 14px;
    width: 100%;
    resize: none;
    min-height: 80px;
    transition: 0.4s ease;

    &::placeholder {
      color: #666666;
    }

    &:focus {
      border: 1px solid #666666;
    }

    &.error {
      border-color: #f2000e;
    }
  }
}
</style>
