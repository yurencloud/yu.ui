<template>
  <li class="yu-dropdown-item"
      :class="[{disabled:disabled},{divided:divided}]"
      :command="command">
    <slot/>
  </li>
</template>

<script>
export default {
  name: 'YuDropdownItem',
  props: {
    disabled: Boolean,
    divided: Boolean,
    command: String,
  },
}
</script>
