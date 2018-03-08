![Example](https://github.com/Bigood/divi3-vb-custom-modules/raw/master/custom-module-in-frontend-editor.png)

# Fork of [Phil Stracker Divi 3 Custom module](https://github.com/stracker-phil/divi3-vb-custom-modules) for Divi 3.0.93

## Info
It includes an example, *banner-shapes-module.php*, that is a full width component cloned from *fullwidth-header* module.

I've updated the code in the snippets to match v3.0.93. 

## Build your own module (inspired from [this tutorial](https://jonathanbossenger.com/building-your-own-divi-builder-modules/))

1- Choose a file from path-to-Divi-theme-folder/includes/builder/Modules/*
2- Copy the entire class of the module you want to use including that last ‘new ET_Builder’ line and paste it inside your module file, replacing the comment of *Copy your class here and tweak it*.
3- Change the class name, the slug and the display name to something unique
4- Add this function to your class
    function js_frontend_preview() {
      ?><script>
      window.<?php echo $this->slug; ?>_preview = function(args) {
        return 'CUSTOM HTML YOU WANT TO PREVIEW WHILE EDITING WITH VISUAL BUILDER' 

      }
      </script><?php
    }
5- Add the hook in the init() function that will call this function when appropriate
    add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );

## Important info

For my own purpose, the code in *snippet2.js* is cloned from *fullwidth-code* (module ID 1043, line ±68961).

If you want to create a non-fullwidth module, use *code* like in the original project, you'll have to copy code from *code* (module ID 1032, line ±67026) and modify snippet2.js code again :

     // This is the modified/important part:
    var previewText = '', previewCallback = this.props.type + '_preview';

    if ('function' === typeof window[previewCallback]) {
        previewText = window[previewCallback].call(this, this.props.attrs, this.props);
    } else {
        previewText = '<div style="text-align:center;border:2px solid rgba(0,0,0,0.5);background:rgba(0,0,0,0.05);padding:10px">No Preview Available</div>';
    }
    [...]

    return s.a.createElement(m.a, a, n, t, s.a.createElement("div", {
        className: "et_pb_text_inner"
    }, s.a.createElement(g.a, {
        text: previewText,      //IMPORTANT


You'll also have to modify in the snippet1.js this bit of code
    //Use exp.b for a non-fullwidth module
    //exp.b[module] = def(arguments[2](moduleId)).default.a;


Updated original readme (for 3.0.93)
---

# Info

This info shows you, how to modify your Divi3 theme to enable custom built modules in the visual builder (= in front-end editing)

Note that after this change your custom modules will show in the visual builder, but need to be modified in order to display the actual preview!
Out of the box, this modification will display a block with the text "No Preview Available" for every custom module you insert. However, you can still change the settings of the module and save the page to see the results on the saved page.

# Step 1
You need to open the file **Divi/includes/builder/frontend-builder/bundle.js** in a text editor. You will change this file.

# Step 2
Before you can edit that file you need to prettify it (i.e. make it a bit more readable). For this I use the Google Chrome browser: Simply drag the file into the browser and use the built in dev-tools to create the prettified code.

Paste the prettified code back to **bundle.js** and save. Quickly test your website to ensure Divi is still working.

# Step 3
Find the highest module ID (you don't need to know what I mean, just do it)

Past this code right BEFORE the `return` near line 16

    alert('Next ID:' + arguments[0].length)

And refresh your website once again to see the javascript alert result.
In Divi 3.0.93 the result is '1083'

# Step 4
Modify the code in **snippet1.js** (you need to insert the module ID you found in one place)

Then find the correct spot in the **bundle.js** file. Very easy: Search for the term `"video-slider-item":` - it only appears once in the whole file. Scroll down to the end of the function and paste the **snippet.js** code there (around line 19486)

# Step 5

Paste the contents of **snippet2.js** at the end of the file, right before the final `]));` line.

# Step 6
Save and you're done! :)

Reload your website and test Divi. It will show your custom modules.