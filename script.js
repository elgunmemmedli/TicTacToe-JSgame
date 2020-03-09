let take =  document.getElementById("game");
let take1 = document.getElementById("form");
let take4 = document.getElementById("content");
take.style.display="none";
take4.style.display="none";
let count = 1;
let o = "O";
let x = "X";
let M = [];
let g =0;
let f =0;

function Show(){
  take4.style.display="flex";
  take.style.display="block";
  take1.style.display="none";
  let take2 = document.getElementById("name1").value;
  document.getElementById("play1").innerHTML = take2;
  let take3 = document.getElementById("name2").value;
  document.getElementById("play2").innerHTML = take3;
}

onload=function (){
     Arr();
     Build();
}

function Arr(){
    for(let i = 0; i<3; i++){
        M[i] = [];
    }
}

function Build(){
    let tbl = " ";
    for(let i = 0; i<3; i++){
        tbl+=`<tr>`;
        for(let j = 0; j<3; j++){
            M[i][j] = M[i][j] == undefined ? "":M[i][j];
          tbl+=`<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl+="</tr>";
    }
   document.getElementsByTagName("table")[0].innerHTML = tbl;
}


function Click(i, j) {
    if (M[i][j] == "") {
      if (count % 2 == 0) {
        M[i][j] = o;
      } else {
        M[i][j] = x;
      }
      count++;
      Build();
      setTimeout(Check,200);
    }
  }



  function Check() {
    g = document.getElementById("i1").value;
    f = document.getElementById("i2").value;
  
    for (let i = 0; i < 3; i++) {
      if (M[i][0] == M[i][1] && M[i][0] == M[i][2] && M[i][0] != "") {
  
        if (M[i][0] == x) {
          g++;
          document.getElementById("i1").value = g;
        }
        else {
          f++;
          document.getElementById("i2").value = f;
        }
        alert(M[i][0]+ "Winner");
        Restart();
      }
  
      for (let i = 0; i < 3; i++) {
        if (M[0][i] == M[1][i] && M[0][i] == M[2][i] && M[0][i] != "") {
          if (M[0][i] == x) {
            g++;
            document.getElementById("i1").value = g;
          }
          else {
            f++;
            document.getElementById("i2").value = f;
          }
          alert(M[0][i]+"Winner");
          Restart();
        }
      }
  
      if (M[0][0] == M[1][1] && M[0][0] == M[2][2] && M[0][0] != "") {
        if (M[0][0] == x) {
          g++;
          document.getElementById("i1").value = g;
        }
        else {
          f++;
          document.getElementById("i2").value = f;
        }
        alert(M[0][0]+Winner);
        Restart();
      }
    }
  
    if (M[0][2] == M[1][1] && M[0][2] == M[2][0] && M[0][2] != "") {
      if (M[0][2] == x) {
        g++;
        document.getElementById("i1").value = g;
      }
      else {
        f++;
        document.getElementById("i2").value = f;
      }
      alert(M[0][2] + "Winner");
      Restart();
    }
  
  
  
      if (count%10==0 ) {
        alert("Draw");
        Restart();
      }
  
  }
  
  
  
  function Restart() {
    count = 1;
    Arr();
    Build();
  }