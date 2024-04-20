function preloadAssets(){
    const loadBar = document.getElementById("loader-in");
    const loadText = document.getElementById("load-text");
    const closeBtn = document.getElementsByClassName("swal2-close");

    closeBtn[0].style.display = "none";
    $(document).ready(function () {
        $.html5Loader({
            filesToLoad:'system/config/json/preloadMedia.json',
            onUpdate: function (percentage) {
                console.log(percentage)
                loadBar.style.width = percentage + "%";
                loadText.innerHTML = percentage + "%";
            },
            onComplete: function () {
                console.log("All the assets are loaded!");
                setTimeout(() => {
                    loadBar.style.width = "100%";
                    loadText.innerHTML = "Load Complete";
                    closeBtn[0].style.display = "flex";
                },1000);
                return "loaded";
            }
        });
    });
}
