function showChangingPhoto () {
    document.getElementById('changingPhotoWindow').style.display="block";
    document.getElementById('changingPhotoWindow').classList.add('changing');
}

function closeChangingPhotoWindow (event) {
    if (event.target.id === "changingPhotoWindow") {
        document.getElementById('changingPhotoWindow').style.display="none"
    }
    
}

// document.getElementById('choosePhoto').addEventListener('change', changeAvatar);

function changeAvatar (photos) {
    debugger
}