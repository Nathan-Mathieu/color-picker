function pick(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) {
            // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {
            // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) {
        // IE?
        document.selection.empty();
    }

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
    display(containerid);
}

function display(id) {
    const container = document.getElementById("over-container");
    const color = document.getElementById(id).innerHTML;

    container.style.display = "flex";
    container.style.backgroundColor = color;

    setTimeout(() => {
        container.style.display = "none";
    }, 2000);
}
