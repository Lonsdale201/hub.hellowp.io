/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      'intro',
      'hello',
      {  
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
   
    tutorialSidebars: [
        'tudasbazis/intro',
        { type: 'autogenerated', dirName: 'tudasbazis', },
    ],

    docs: [{
            id: "intro",
            type: "doc",
        },
        {
            label: "Dokumentáció",
            type: "category",
            items: [
                "dokumentacio/intro",
            ],
        },
        {
            label: "Súgó",
            type: "category",
            items: [
                "sugo/intro",
            ],
        },
        {
            label: "Tudásbázis",
            type: "category",
            items: [
                "tudasbazis/intro",
            ],
        }
    ]  */

};

module.exports = sidebars;