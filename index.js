// Mobile Navigation Bar

function mobileMenu() {
    var y = document.getElementById('mobileMenu'); {
        if (y.style.display == "block") {
            y.style.display = "none";
        }
        else {
            y.style.display = "block";
        }

    }
}


// Numbers Counter Animation

var speed = 10;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

incEltNbr("nbr");
