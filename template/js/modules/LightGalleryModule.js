export default function LightGalleryModule(){
    if ($('#lightgallery').length) {

        $("#lightgallery").lightGallery({
            selector: ".zoom-lightgallery",
            // thumbnail: true,
            // animateThumb: false,
            // showThumbByDefault: false
        });
    }

   
}