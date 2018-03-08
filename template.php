<?php

function custom_module() {

  if ( class_exists('ET_Builder_Module')) {

  	//Copy your class here and tweak it
  }

}

add_action( 'et_builder_ready', 'custom_module' );

// Don't forget to add this function to your class
function js_frontend_preview() {
  ?><script>
  window.<?php echo $this->slug; ?>_preview = function(args) {
    return 'CUSTOM HTML YOU WANT TO PREVIEW WHILE EDITING WITH VISUAL BUILDER' 

  }
  </script><?php
}
//And to add the hook in the init() function
add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );

?>
