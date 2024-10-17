import anime from './anime-master/lib/anime.es.js';
import contents from './contents.js';

class TopButton {
    constructor (label, id, top, isMobile) {
        // Instantiate our captive button and keep a pointer to it in ivar
        this.id = id;
        this.button = document.createElement("input");
        this.button.ba = document.getElementById("buttonarea");
        this.button.ba.append(this.button);
        this.button.setAttribute("id", id);
        this.button.setAttribute("type", "button");
        this.button.setAttribute("top", top);
        this.button.className += "btn";
        this.button.setAttribute("value", label);
        this.button.clicked = null;
        this.top = top;
        this.left = this.button.style.left;
        this.left_og = this.left;
        this.button.left_x = "4%";

        document.getElementById("buttonarea").appendChild (this.button);
            //this.button.addEventListener("mouseover", mouseover);
            this.button.addEventListener("mouseover", function ()
                    { this.style.color = "DarkGray"; } );

            this.button.addEventListener("mouseout", function ()
                    { this.style.color = "Black"; } );

        // Install our button's event handler
        this.button.onclick = this.callback;
        this.button.onmouseover = this.waver;
        this.button.onmouseout = this.unwaver;

        if (!isMobile) {
            this.add_line();
        } 
        this.button.show_contents = this.show_contents;
        this.button.hide_contents = this.hide_contents;
    }
    waver() {
        waver(this);
    }

    unwaver() {
        unwaver(this);
    }

    callback() {
        var btns = document.getElementsByClassName("btn");
        // let projs = document.getElementsByClassName("proj_btn");
        // if (projs.length > 0){
        //     projs.forEach(element => {
        //         element.remove();
        //     });
        // }
        try {
            document.querySelector('#academic').remove();
            document.querySelector('#professional').remove();
            document.querySelector('#personal').remove();
        } catch (error) {}
        hide_contents();
        if (this.ba.clicked == null || this.ba.clicked == false) {
            console.log('first time');
            slide_left(btns, this);
        }
        else{
            for (var i = 0; i < btns.length; i += 1) {
                var b = btns[i];
                to_unclicked(b);
            }
            to_clicked(this);
        }
    }

    add_line() {
        const svgns = "http://www.w3.org/2000/svg";
        var bound_rect = this.button.getBoundingClientRect();
        // console.log

        this.newRect = document.createElementNS(svgns, "rect");

        const svg = document.querySelector("svg");
        svg.appendChild(this.newRect);

        this.newRect.setAttribute("x", "46%");
        this.newRect.setAttribute("class", "line")
        this.newRect.setAttribute("id", this.id + "_line")
        console.log(this.newRect.getAttribute("id"));
        // this.button.setAttribute("position", "fixed");
        this.newRect.setAttribute("y", parseInt(this.top.replace("%", "")) + 4 + "%");
        // this.newRect.setAttribute("y", this.button.getAttribute("top"));
        // this.newRect.setAttribute("y", bound_rect.top);
        this.newRect.setAttribute("width", "40");
        this.newRect.setAttribute("height", "1");
        this.newRect.setAttribute("fill", "black");

        this.button.line = this.newRect;
    }

    show_contents() {
        let content_box = document.getElementById("content");
        console.log(this.id);
        if (this.id == "projects") {
            projects();
        }
        else {
            content_box.innerHTML = contents[this.id];
        }
        content_box.style.opacity = "0";
        anime({
            targets: content_box,
            opacity: '1',
            duration: 1500
        })
    }
}

function hide_contents() {
    let content_box = document.getElementById("content");
    if (content_box != null) { content_box.innerHTML = ""; }
}

function proj_click(cur_btn) {
    anime({
        targets: '.proj_btn',
        color: 'rgb(119,136,153)',
        duration: 600,
        easing: 'linear'
    })
    anime({
        targets: cur_btn,
        color: 'rgb(0, 0, 0)',
        duration: 600,
        easing: 'linear'
    })
    let content_box = document.getElementById("content");
    content_box.innerHTML = "<br/><br/><br/><br/><br/>" + contents["projects"][cur_btn.id];
}

function projects() {
    let content_box = document.getElementById("buttonarea");
    let professional_btn = document.createElement("input");
    professional_btn.setAttribute("type", "button");
    professional_btn.setAttribute("class", "proj_btn");
    professional_btn.setAttribute("id", "professional");
    content_box.appendChild(professional_btn);
    professional_btn.style.left = '23%';
    if (isMobile) {
        professional_btn.style.top = '0%';
    }
    professional_btn.value = "Professional";
    professional_btn.addEventListener('click', function(){
        proj_click(professional_btn);
    });

    let academic_btn = document.createElement("input");
    academic_btn.setAttribute("type", "button");
    academic_btn.setAttribute("class", "proj_btn");
    academic_btn.setAttribute("id", "academic");
    content_box.appendChild(academic_btn);
    academic_btn.style.left = '43%';
    if (isMobile) {
        academic_btn.style.top = '0%';
    }
    academic_btn.value = "Academic";
    academic_btn.addEventListener('click', function(){
        proj_click(academic_btn);
    });


    let personal_btn = document.createElement("input");
    personal_btn.setAttribute("type", "button");
    personal_btn.setAttribute("class", "proj_btn");
    personal_btn.setAttribute("id", "personal");
    content_box.appendChild(personal_btn);
    personal_btn.style.left = '63%';
    if (isMobile) {
        personal_btn.style.top = '0%';
    }
    personal_btn.value = "Personal";
    personal_btn.addEventListener('click', function(){
        proj_click(personal_btn);
    });

    proj_click(professional_btn);

}
var width = window.visualViewport.width;
var height = window.visualViewport.height;

// var width = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// var height = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;

var tgt_count;
tgt_count = 8;
var visible;
visible = [];

function anim_shapes() {
    let vals = [-1000, 1000];
    let shapes = document.getElementsByClassName("shape");
    for (let i = 0; i < shapes.length; i++) {
        let shp = shapes[i]
        anime({
            targets: shp,
            translateX: {
                value: vals[random(0,1)],
                duration: anime.random(15000,25000)
            },
            translateY: {
                value: vals[random(0,1)],
                duration: anime.random(15000,25000)
            },
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        })
    }
}

// function removeItemOnce(arr, value) {
//     var index = arr.indexOf(value);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }

function shapes() {
    var pos_shapes = ["line1.png", "line2.png", "line3.png", "line4.png", "line5.png",
                        "line6.png", "line7.png", "line8.png", "line9.png", "line10.png",
                        "line11.png", "line12.png", "line13.png", "line14.png"];

    let count = tgt_count - visible.length;

    let items = ['normal', 'reverse'];

    for (var i = 0; i < count; i++) {
            var curr_shape = {src: pos_shapes[Math.floor(Math.random() * 14)], img: 0};
            curr_shape.img = document.createElement('object');
            curr_shape.img.data = curr_shape.src;
            curr_shape.img.setAttribute("class", "shape");
            curr_shape.img.className = "shape";
            curr_shape.img.setAttribute("z-index", random(1,9))
            curr_shape.img.id = "shape_" + i;
            curr_shape.img.style.width = ((Math.random() * 400) + 150) + 'px';
            curr_shape.img.style.height = ((Math.random() * 400) + 150) + 'px';
            curr_shape.img.style.top = (Math.random() * height) + 1 + 'px';
            curr_shape.img.style.left = (Math.random() * width) + 1 + 'px';
            document.getElementById('background').appendChild(curr_shape.img);
    }
    anim_shapes();
}

function to_clicked(elem) {
    anime({
        targets: elem.line,
        width: '100px',
        easing: 'easeInOutQuad',
        complete: function() {
            elem.show_contents();
        }
    })
    elem.ba.clicked = true;
}

function to_unclicked(elem) {
    anime({
        targets: elem.line,
        width: '40px',
        easing: 'easeInOutQuad'
    })
}

function slide_left(elems, elem) {
    let lines = document.getElementsByClassName("line");
    console.log(elem.left_x);
    resetted = false;
    anime({
        targets: '#name',
        translateY: -70,
        easing: 'easeInOutQuad'
    })

    anime({
        targets: elems,
        left: elem.left_x,
        easing: 'spring(5, 70, 45, 2)',
        // duration: 1500,
        delay: anime.stagger(50),
        // complete: function() {
        //     to_clicked(elem);
        // }
    });
    
    anime({
        targets: lines,
        translateX: '-77.5%',
        easing: 'spring(5, 70, 45, 2)',
        // duration: 1500,
        delay: anime.stagger(50),
    });
    let content_box = document.createElement("div");
    content_box.setAttribute("id", "content");
    document.getElementById("buttonarea").appendChild(content_box);
    to_clicked(elem);
}

function slide_right(elems) {
    let lines = document.getElementsByClassName("line");
    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        anime({
            targets: elem.line,
            width: '40px',
            easing: 'easeInOutQuad',
        })
    }
    anime({
        targets: elems,
        left: '43%',
        easing: 'spring(5, 70, 45, 2)',
        // duration: 1500,
        delay: anime.stagger(50),
        // complete: function() {
        //     to_clicked(elem);
        // }
    });
    
    anime({
        targets: lines,
        translateX: '0%',
        easing: 'spring(5, 70, 45, 2)',
        // duration: 1500,
        delay: anime.stagger(50),
    });
    let ba = document.getElementById("buttonarea");
    ba.clicked = false;
}

function waver(elem) {
    let wx = random(-5,5);
    elem.wx = wx;
    let wy = random(-5,5);
    elem.wy = wy;
    anime({
        targets: elem,
        translateX: '+=' + String(wx),
        translateY: '+=' + String(wy),
        easing: 'easeInOutQuad',
        duration: 750
    });

}

function unwaver(elem) {
    anime({
        targets: elem,
        translateX: '-=' + String(elem.wx),
        translateY: '-=' + String(elem.wy),
        easing: 'easeInOutQuad',
        duration: 650
    });
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var resetted;

function reset() {
    if (!resetted) {
        document.getElementById("content").innerHTML = "";
        let btns = document.getElementsByClassName("btn");
        try {
            document.querySelector('#academic').remove();
            document.querySelector('#professional').remove();
            document.querySelector('#personal').remove();
        } catch (error) {}
        slide_right(btns);
    }
}

var isMobile

function setup() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
        
    isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    resetted = true;

    var btn1 = new TopButton("Resumé", "resume", "22%", isMobile);
    var btn2 = new TopButton("About Me", "aboutme", "37%", isMobile);
    var btn3 = new TopButton("Projects", "projects", "52%", isMobile);
    var btn4 = new TopButton("Contact Me", "contact", "67%", isMobile);
    document.getElementById("name").addEventListener("click", reset);
    if (!isMobile) { shapes() };
}

window.onload = setup;
