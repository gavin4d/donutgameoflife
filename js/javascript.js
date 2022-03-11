
var rect1 = document.getElementById('rect1');
var rect2 = document.getElementById('rect2');
var rect3 = document.getElementById('rect3');
var rect4 = document.getElementById('rect4');
var rects = [rect1,rect2,rect3,rect4];

//console.log(rect1);

rect1.onclick = function click() {

    rect1.style.zIndex = 10000;
    console.log('zindex');
    
    console.log(document.body.style.getPropertyValue("--mouse-progress-x"));

};

document.body.onmousemove = function mouseMove() {
    x = document.body.style.getPropertyValue("--mouse-progress-x");
    var view = document.getElementById('gameView');
    var y = Array;
    y[0] = Math.cos(x*6.28);
    y[1] = -y[0];
    y[2] = Math.cos(x*6.28 + 1.576);
    y[3] = -y[2];

    if (Math.abs(y[0]) > Math.abs(y[2])) {
        if (y[0] < 0) {
            if (y[2] < 0) {
                order = [0,2,3,1];
            } else {
                order = [0,3,2,1];
            }
        } else {
            if (y[2] < 0) {
                order = [1,2,3,0];
            } else {
                order = [1,3,2,0];
            }
        }
    } else {
        if (y[0] < 0) {
            if (y[2] < 0) {
                order = [2,0,1,3];
            } else {
                order = [3,0,1,2];
            }
        } else {
            if (y[2] < 0) {
                order = [2,1,0,3];
            } else {
                order = [3,1,0,2];
            }
        }
    }

    /*for(var i = 3; i >= 0; i--) {
        for(var l = 3; l >=0; l--) {
            if (y[i] < y[l]);
        }
    }*/

    for (var i = 0; i < 4; i++) {
        var span = rects[order[i]].parentNode;
        view.insertBefore(span, view.getElementById('marker'));
    }

    

    

    /*view.removeChild(view.getElementsByClassName('rect1')[0].parentNode);
    //view.innerHTML = '';
    view.appendChild(createNewFace("rect1"));
    console.log(document.getElementsByClassName('rect1')[0]);
    resize();
    console.log(document.body.style.getPropertyValue("--mouse-progress-x"));

    function createNewFace(id) {
        var g = document.createElement('g');
        g.setAttribute("class", "face-container");
        
        var face = document.createElement('rect');
        face.setAttribute('fill', "#aaaaaa");
        face.setAttribute('stroke',"#2b2b2b");
        face.setAttribute('stroke-width',"2px");
        face.setAttribute('x',"-49");
        face.setAttribute('width',"98");
        face.setAttribute('height',"98");
        face.setAttribute('class',id);

        g.appendChild(face);

        return g;
    }*/

};

function resize() {

    var faceContainer = document.getElementsByClassName('face-container');

    for (var i = faceContainer.length - 1; i >= 0; i--) {
        faceContainer[i].setAttribute("transform", "translate(" + (self.innerWidth/2 ) + " " + self.innerHeight/2 + ")");
    }
}

document.body.onresize = resize;
resize();
