Vite HTML Multiplier Changer
Dear applicant,

Welcome to the Vite HTML Multiplier Changer! In this project, you'll be working with files that follow a specific naming convention. For instance, if your file is named Header.html, the corresponding component tag should resemble the filename, such as <Header srcpars="html-components/Header.html" />. Ensure that you use a capital letter and adopt the self-closing tag format.

Getting Started
To reuse a component, specify the path in the srcpars attribute where the HTML file is located – essentially, your HTML component. I'll provide screenshots to simplify the process for you.

Changing Text Content
To change all the text content within a specific tag in a reused component, use the data-text-1="text" attribute.
In the tag itself, indicate the same attribute with the same number along with the description you want to replace. For example:

<Header srcpars="html-components/Header.html" data-text-1="description Bro" />

Changing Text in a Specific Tag
If you wish to change the text specifically within a certain tag, use double curly braces and specify attributes inside. For example:

{{data-mark-1:ttttttttttttttttttttt}}

In the reused component, specify the corresponding attribute. For instance:

<Header srcpars="html-components/Header.html" data-mark-1="Heloyin" />

Changing Attributes in a Specific Tag
Change attributes of the reused component in a specific tag by specifying the data-attribute attribute with a certain number. Ensure this attribute is at the end of the tag for it to work. For example:

<img width="100px" alt="img" data-attribute-1="src" src="public/Avatar.png">

In the reused component, indicate the same data-attribute attribute with the value you want to change to. For example:

<Header srcpars="html-components/Header.html" data-attribute-1="public/vite.svg" />

Changing All Text in a Tag
Another useful option is changing all the text in a certain tag in a reused component. Specify the data-text attribute with a certain number and the value text at the end of this tag. For example:

<h1 data-text-1="text"> ttttttttttttttttttttttttttttt</h1>

In the reused component, specify the same data-text attribute with the value you want to change the text to. For example:

<Header srcpars="html-components/Header.html" data-text-1="Hello" />

To summarize, you have the flexibility to change text completely within a tag, modify attributes, and alter words or phrases in the reused component.

I'll include more screenshots to enhance your understanding. Best of luck, dear applicant!