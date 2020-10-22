//this function will be called after the JavaScriptApplet code has been loaded.

function jsmeOnLoad() {

    jsmeApplet = new JSApplet.JSME("appletContainer", "500px", "400px", {
        //optional parameters
        "options": "oldlook,star"
    });

    jsmeApplet.setAfterStructureModifiedCallback(showEvent);

    var patt = /\[([A-Za-z][a-z]?)H?\d*:\d+\]/g; //regexp pattern for numbered atom
    function showEvent(event) {

        var log = document.getElementById("smilesResult");
        log.value = event.src.smiles();
    }

    document.JME = jsmeApplet;

}

function drawMolecularStructureBySmileExpression(smilesInput) {

    if (smilesInput !== null)
        jsmeApplet.readGenericMolecularInput(smilesInput.value);


}


/* Backup skilles function
* 	function readMultipart() {
    var jme = "9 9 C 6.68 -7.15 C 5.47 -6.45 C 4.26 -7.15 C 4.26 -8.55 C 5.47 -9.25 C 6.68 -8.55 C 5.47 -5.05 O- 6.68 -4.35 O 4.26 -4.35 1 2 1 2 3 2 3 4 1 4 5 2 5 6 1 6 1 2 2 7 1 7 8 1 7 9 2|1 0 Na+ 12.21 -6.61";
    jsmeApplet.readMolecule(jme) // or document.JME.readMolecule(jme
}
*
* function getJMEstring() {
    var jme = document.JME.jmeFile();
    return jme;
}

function readMolecule(jme) {
    var jme = jme;
    jsmeApplet.readMolecule(jme); // or document.JME.readMolecule(jme);
}

function readReaction() {
    var jme = "3 2 C:1 1.41 -7.12 O:2 1.41 -5.72 Cl 2.63 -7.82 1 2 2 1 3 1|3 2 N:3 5.72 -6.78 C:4 7.12 -6.78 H:5 5.02 -7.99 1 2 1 1 3 1 >> 5 4 C:1 13.51 -6.40 O:2 13.51 -5.00 N:3 14.72 -7.10 C:4 15.94 -6.40 H:5 14.71 -8.50 1 2 2 1 3 1 3 4 1 3 5 1";
    jsmeApplet.readMolecule(jme);
}

function getMolfile() {
    var data = document.JME.molFile();
    document.getElementById("jme_output").value = data;

}
function getSmiles() {
    var data = document.JME.smiles();
    document.getElementById("jme_output").value = data;
}
*
* */