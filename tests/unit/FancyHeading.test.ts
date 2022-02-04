// import {Vue} from 'vue';
// import FancyHeading from '@/components/FancyHeading.vue';

// function mountComponentWithProps(Component, propsData) {
//     const Constructor = Vue.extend(Component);
//     const vm = new Constructor({
//         propsData
//     }).$mount();
//     return vm.$el;
// }
// describe('FancyHeading.vue', () => {
//     it('should be the correct color', () => {
//         const headingData = mountComponentWithProps(FancyHeading, { color: 'red' });
//         const styleData = headingData.style.getPropertyValue('color');
//         console.log(styleData)
//         expect(styleData).toEqual('blue');
//     });
//     it('should have the correct title', () => {
//         const headingData = mountComponentWithProps(FancyHeading, { title: 'Hello, Vue!' });
//         const titleData = headingData.textContent;
//         expect(titleData).toEqual('Hello, Vue!');
//     });
// });

// import { mount } from '@vue/test-utils'
// import FancyHeading from './FancyHeading.vue';

// describe('Component', () => {
//   test('является экземпляром Vue', () => {
//     // const wrapper = mount(FancyHeading)
//     expect(true).toBeTruthy()
//   })
// })

import { mount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})