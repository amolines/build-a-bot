<template>
  <div>
    <h1> {{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
     <img :src="part.src" title="arm"/>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return this.parts[partType].find(part => part.id === +id);
    },
  },
};
</script>

<style  scoped>
img {
  width:165px;
}
</style>
