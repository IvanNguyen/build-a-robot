// export default {
//     bind: (element, binding) => {
//         // if(binding.arg !== 'position') return;

//         // Object.keys(binding.modifiers).forEach(key => {
//         //     element.style[key] = '5px';
//         // })
//         Object.keys(binding.value).forEach(position => { 
//             element.style[position] = binding.value[position];
//         });
//         element.style.position = 'absolute';
//         // element.style.bottom = '5px';
//         // element.style.right = '5px';
//     },
// };

export default function (element, binding) {
    Object.keys(binding.value).forEach(position => {
        element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
}
// bindding and update lifecycle hooks