document.getElementById('download-button').addEventListener('click', function() {
    // Create a new anchor element
    var a = document.createElement('a');
    // Set the href and download attributes for the anchor
    a.href = 'rajResume.pdf';
    a.download = 'rajResume.pdf';
    // Append the anchor to the body
    document.body.appendChild(a);
    // Trigger the download by simulating a click
    a.click();
    // Remove the anchor from the body
    document.body.removeChild(a);
});

document.getElementById('link-button').addEventListener('click',function(){
    window.open('https://github.com/RajAditya11' , '_blank');
});
