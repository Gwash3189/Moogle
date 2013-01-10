function editPlaceholder(inputName, placeholder) {
    $('#' + inputName).attr('placeholder', '' + placeholder);

}

function getRand() {
    return Math.floor(Math.random() * 4) + 1;
}

function getPlaceholder(random) {
    if (random == 1) {
        return 'What is expecto patronum?';
    }
    if (random == 2) {
        return 'How many can Voldemort count too?'
    }
    if (random == 3) {
        return 'What is a Death Eater?';
    }
    if (random == 4) {
        return 'Where can i get a wand?';
    }
}

function getRandomPlaceholder() {
    editPlaceholder('queryInput', getPlaceholder(getRand()))
}

function searchWithPlaceHolder(inputName) {
    if ($('#' + inputName).val().length == 0) {
        return  $('#' + inputName).attr('placeholder');
    }
    else {
        return $('#' + inputName).val();
    }
}

$(document).ready(function(){
    getRandomPlaceholder();
})