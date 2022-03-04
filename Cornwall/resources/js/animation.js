//Pre-load your image below!
grphcs=new Array(24)
Image0=new Image();
Image0.src=grphcs[0]="./resources/img/rune_v2/01.png";
Image1=new Image();
Image1.src=grphcs[1]="./resources/img/rune_v2/02.png";
Image2=new Image();
Image2.src=grphcs[2]="./resources/img/rune_v2/03.png";
Image3=new Image();
Image3.src=grphcs[3]="./resources/img/rune_v2/04.png";
Image4=new Image();
Image4.src=grphcs[4]="./resources/img/rune_v2/05.png";
Image5=new Image();
Image5.src=grphcs[5]="./resources/img/rune_v2/06.png";
Image6=new Image();
Image6.src=grphcs[6]="./resources/img/rune_v2/07.png";
Image7=new Image();
Image7.src=grphcs[7]="./resources/img/rune_v2/08.png";
Image8=new Image();
Image8.src=grphcs[8]="./resources/img/rune_v2/09.png";
Image9=new Image();
Image9.src=grphcs[9]="./resources/img/rune_v2/10.png";
Image10=new Image();
Image10.src=grphcs[10]="./resources/img/rune_v2/11.png";
Image11=new Image();
Image11.src=grphcs[11]="./resources/img/rune_v2/12.png";
Image12=new Image();
Image12.src=grphcs[12]="./resources/img/rune_v2/13.png";
Image13=new Image();
Image13.src=grphcs[13]="./resources/img/rune_v2/14.png";
Image14=new Image();
Image14.src=grphcs[14]="./resources/img/rune_v2/15.png";
Image15=new Image();
Image15.src=grphcs[15]="./resources/img/rune_v2/16.png";
Image16=new Image();
Image16.src=grphcs[16]="./resources/img/rune_v2/17.png";
Image17=new Image();
Image17.src=grphcs[17]="./resources/img/rune_v2/18.png";
Image18=new Image();
Image18.src=grphcs[18]="./resources/img/rune_v2/19.png";
Image19=new Image();
Image19.src=grphcs[19]="./resources/img/rune_v2/20.png";
Image20=new Image();
Image20.src=grphcs[20]="./resources/img/rune_v2/21.png";
Image21=new Image();
Image21.src=grphcs[21]="./resources/img/rune_v2/22.png";
Image22=new Image();
Image22.src=grphcs[22]="./resources/img/rune_v2/23.png";
Image23=new Image();
Image23.src=grphcs[23]="./resources/img/rune_v2/24.png";

Amount=32; //Smoothness depends on image file size, the smaller the size the more you can use!
Ypos=new Array();
Xpos=new Array();
Speed=new Array();
Step=new Array();
Cstep=new Array();
ns=(document.layers)?1:0;
ns6=(document.getElementById&&!document.all)?1:0;

if (ns) {
    for (i = 0; i < Amount; i++) {
        var P=Math.floor(Math.random()*grphcs.length);
        rndPic=grphcs[P];
        document.write("<LAYER NAME='sn"+i+"' LEFT=0 TOP=0><img src="+rndPic+"></LAYER>");
}
}
else {
    document.write('<div style="position:absolute;top:0px;left:0px"><div style="position:relative">');
    for (i = 0; i < Amount; i++) {
        var P=Math.floor(Math.random()*grphcs.length);
        rndPic=grphcs[P];
        document.write('<img id="si'+i+'" src="'+rndPic+'" style="position:absolute;top:0px;left:0px">');
    }
    document.write('</div></div>');
}
WinHeight=(ns||ns6)?window.innerHeight:window.document.body.clientHeight;
WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
for (i=0; i < Amount; i++) {                                                                
    Ypos[i] = Math.round(Math.random()*WinHeight);
    Xpos[i] = Math.round(Math.random()*WinWidth);
    Speed[i]= Math.random()*5+3;
    Cstep[i]=0;
    Step[i]=Math.random()*0.1+0.05;
}
function fall(){
    var WinHeight=(ns||ns6)?window.innerHeight:window.document.body.clientHeight;
    var WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
    var hscrll=(ns||ns6)?window.pageYOffset:document.body.scrollTop;
    var wscrll=(ns||ns6)?window.pageXOffset:document.body.scrollLeft;
    for (i=0; i < Amount; i++) {
        sy = Speed[i]*Math.sin(90*Math.PI/180);
        sx = Speed[i]*Math.cos(Cstep[i]);
        Ypos[i]+=sy;
        Xpos[i]+=sx; 
        if (Ypos[i] > WinHeight) {
            Ypos[i]=-60;
            Xpos[i]=Math.round(Math.random()*WinWidth);
            Speed[i]=Math.random()*5+3;
        }
        if (ns) {
            document.layers['sn'+i].left=Xpos[i]+ "px";
            document.layers['sn'+i].top=Ypos[i]+hscrll+ "px";
        }
        else if (ns6) {
            document.getElementById("si"+i).style.left=Math.min(WinWidth,Xpos[i]) + "px";
            document.getElementById("si"+i).style.top=Ypos[i]+hscrll+ "px";
        }
        else {
            eval("document.all.si"+i).style.left=Xpos[i]+"px";
            eval("document.all.si"+i).style.top=Ypos[i]+hscrll+"px";
        } 
        Cstep[i]+=Step[i];
    }
    setTimeout('fall()',75);
}

window.onload=fall

