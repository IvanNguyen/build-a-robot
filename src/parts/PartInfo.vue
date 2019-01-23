<template>
    <div>
        <h1>{{part.title}}</h1>
        <div>
            {{part.description}}
        </div>
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
    name: 'PartInfo',
    computed: {
        part() {
            const { partType,id } = this.$route.params; // ES6 syntax
            // partType la 1 chuoi String, nen khong dung parts.partType duoc !
            console.log(parts[partType].find(part => part.id === +id));
            return parts[partType].find(part => part.id === +id); // chuyen id kieu string ve id kieu number de so sanh
        }
    },
}
</script>
