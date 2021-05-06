function showChangingPhoto () {
    document.getElementById('changingPhotoWindow').style.display="block";
    document.getElementById('changingPhotoWindow').classList.add('changing');
}

function closeChangingPhotoWindow (event) {
    if (event.target.id === "changingPhotoWindow") {
        document.getElementById('changingPhotoWindow').style.display="none"
    }
    
}

const input = document.getElementById('choosePhoto');

input.addEventListener('change', () => {changeAvatar(input.files[0])});

function changeAvatar (photo) {
    debugger
    let reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = function(e) {
        document.getElementById('photo').innerHTML = `<img class='avatar' src='${e.target.result}'>`;
        document.getElementById('photo').classList.add('photoIs');
    }
    console.log('Bye');
}