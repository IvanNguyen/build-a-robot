<template>
  <div class="part" :class="position">
    <router-link :to="{
        name: 'Parts',
        params: {
          id: this.selectedPart.id,
          partType: this.selectedPart.type,
        }}">
    <img :src="selectedPart.src" title="arm"/>
    </router-link>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <!-- <span class="sale" v-show="selectedPart.onSale">Sale!</span> -->
    <!-- using cumstom directive -->
    <!-- <span class="sale" v-pin:position.top.right v-show="selectedPart.onSale">Sale!</span> -->
    <!-- <span class="sale" v-pin="{ bottom: '10px', right: '10px'}" v-show="selectedPart.onSale">Sale!</span> -->
    <span @click="pinPadding='30px'" class="sale" v-pin="{ bottom: pinPadding, right: pinPadding}" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
// import custom directive
// import pinDirective from '../shared/pin-directive'
// make custom directive global in main.js

const validIndexNext = (index,length) =>{
  index+=1;
  return index > length-1 ? 0 : index;
}

function validIndexPrev(index,length){
  index-=1;
  return index < 0 ? length-1 : index;
}

export default {
  // declare the custom directive
  // directives: { pin: pinDirective},
  // diclare the custom directive global at main.js 
  data() {
    return { selectedPartIndex: 0,
             pinPadding: '10px'
    };
  },
  // props : ['parts','position'],
  //props validation
  props : {
    parts: {
      type: Array,
      required : true,
    },
    position:{
      type: String,
      required : true,
      validator(value){
        return ['left','right','top','bottom','center'].includes(value);
      }
    }
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created(){
    this.emitSelectedPart();
  },
  methods: {
    // method routing navigation
    // showPartInfo(){
    //   this.$router.push({
    //     name: 'Parts',
    //     params: {
    //       id: this.selectedPart.id,
    //       partType: this.selectedPart.type,
    //     }
    //     });
    // }, 
    emitSelectedPart(){
      this.$emit('partSelected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = validIndexNext(
        this.selectedPartIndex,
        this.parts.length,
      );
      this.emitSelectedPart();
    },
    selectPreviousPart() {
      this.selectedPartIndex = validIndexPrev(
        this.selectedPartIndex,
        this.parts.length,
      );
      this.emitSelectedPart();
    },

  },
};

</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.sale {
  /* custom directive */
  /* position: absolute;
  bottom: 5px;
  right: 5px; */
  color: white;
  background-color: red;
  padding: 3px;
}
.part-title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 5px;
  top: -25px;
}
.part img {
  width:165px;
  cursor: pointer;
}
.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.bottom {
  border-top: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.left .prev-selector:after,  .right .prev-selector:after{
  content: '\25B2'
}
.left .next-selector:after, .right .next-selector:after {
  content: '\25BC'
}
.top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
  content: '\25C4'
}
.top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
  content: '\25BA'
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.highlight {
  border: 1px solid red;
}
</style>
