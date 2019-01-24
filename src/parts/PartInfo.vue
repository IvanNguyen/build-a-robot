<template>
    <div>
        <h1>{{part.title}}</h1>
        <div>
            {{part.description}}
        </div>
    </div>
</template>

<script>
// import parts from '../data/parts';
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'PartInfo',
    mixins: [getPartsMixin],
    // using props
    props: {
        partType: {
            type: String
        },
        id: {
            type: [Number, String],
            validator (value) {
                return Number.isInteger(Number(value));
            }
        }
    },
    computed: {
        part() {
            const { partType, id } = this;
            // const { partType,id } = this.$route.params; // ES6 syntax
            // partType la 1 chuoi String, nen khong dung parts.partType duoc !
            // console.log(parts[partType].find(part => part.id === +id));
            return this.parts[partType].find(part => part.id === +id); // chuyen id kieu string ve id kieu number de so sanh
        }
    },
}
</script>
