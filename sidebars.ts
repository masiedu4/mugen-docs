import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Avail Integration',
      items: [
        'cartesi-avail-tutorial/introduction',
        'cartesi-avail-tutorial/installation',
        'cartesi-avail-tutorial/building',
        'cartesi-avail-tutorial/testnet',
        {
          type: 'category',
          label: 'Interacting with your dApp',
          items: [
            'cartesi-avail-tutorial/interacting',
            'cartesi-avail-tutorial/outputs',
          ],
        },
        'cartesi-avail-tutorial/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Espresso Integration',
      items: [
        'cartesi-espresso-tutorial/introduction',
        'cartesi-espresso-tutorial/architecture',
        'cartesi-espresso-tutorial/installation',
        'cartesi-espresso-tutorial/building',
        'cartesi-espresso-tutorial/testnet',
        {
          type: 'category',
          label: 'Interacting with your dApp',
          items: [
            'cartesi-espresso-tutorial/interacting',
            'cartesi-espresso-tutorial/outputs',
          ],
        },
        'cartesi-espresso-tutorial/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Cartesi Coprocessor',
      items: [
        'cartesi-co-processor-tutorial/introduction',
        'cartesi-co-processor-tutorial/architecture',
        'cartesi-co-processor-tutorial/installation',
        'cartesi-co-processor-tutorial/building',
        'cartesi-co-processor-tutorial/running',
        'cartesi-co-processor-tutorial/interacting',
        'cartesi-co-processor-tutorial/deploy',
        {
          type: 'category',
          label: 'Manual Approach',
          items: [
            'cartesi-co-processor-tutorial/manually/building',
            'cartesi-co-processor-tutorial/manually/running',
            'cartesi-co-processor-tutorial/manually/deploy',


          ],
        },
        'cartesi-co-processor-tutorial/troubleshooting',
      ],
    }
  ],
   
};

export default sidebars;
