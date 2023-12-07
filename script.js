function hitungluas(){
    alas=document.getElementById("alas").value;
    tinggi=document.getElementById("tinggi").value;
    luas=(alas*tinggi)*0.5;
    document.getElementById("luas").value=luas;
    }

function hitungkeliling(){
    sisi1=parseFloat(document.getElementById("sisi1").value);
    sisi2=parseFloat(document.getElementById("sisi2").value);
    sisi3=parseFloat(document.getElementById("sisi3").value);
    keliling=(sisi1+sisi2+sisi3);
    document.getElementById("keliling").value=keliling;
    }