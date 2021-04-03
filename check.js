var pkt=0;
var nr=0;
var krol = new Array(35);
krol[0]="Mieszko I";
krol[1]="Bolesław Chrobry";
krol[2]="Mieszko II Lambert";
krol[3]="Kazimierz Odnowiciel";
krol[4]="Bolesław Śmiały";
krol[5]="Władysław Herman";
krol[6]="Bolesław Krzywousty";
krol[7]="Władysław Wygnaniec";
krol[8]="Bolesław Kędzierzawy";
krol[9]="Mieszko III Stary";
krol[10]="Kazimierz Sprawiedliwy";
krol[11]="Przemysł II";
krol[12]="Wacław II Czeski";
krol[13]="Władysław Łokietek";
krol[14]="Kazimierz Wielki";
krol[15]="Ludwik Węgierski";
krol[16]="Jadwiga Andegaweńska";
krol[17]="Władysław Jagiełło";
krol[18]="Władysław Warneńczyk";
krol[19]="Kazimierz Jagiellończyk";
krol[20]="Jan Olbracht";
krol[21]="Aleksander Jagiellończyk";
krol[22]="Zygmunt I Stary";
krol[23]="Zygmunt II August";
krol[24]="Henryk Walezy";
krol[25]="Stefan Batory";
krol[26]="Zygmunt III Waza";
krol[27]="Władysław IV Waza";
krol[28]="Jan II Kazimierz";
krol[29]="Michał Korybut Wiśniowiecki";
krol[30]="Jan III Sobieski";
krol[31]="August II Mocny Wettin";
krol[32]="Stanisław Leszczyński";
krol[33]="August III Wettin";
krol[34]="Stanisław August Poniatowski";

function sprawdz()
{
    odp = document.getElementById('check').value;
    document.getElementById('check').value="";
                
    if(odp==krol[nr]&&nr<35)
    {
        if(nr<12)
            document.getElementById('column1').innerHTML+=krol[nr]+"<br/>";
        else if(nr<23)
            document.getElementById('column2').innerHTML+=krol[nr]+"<br/>";
        else if(nr<=34)
        {
            document.getElementById('column3').innerHTML+=krol[nr]+"<br/>";
            if(nr==34)
                document.getElementById('write').innerHTML='KONIEC<br><input type="submit" value="Jeszcze raz" onclick="nowy()">';
        }
        nr++;
        pkt++;
        document.getElementById('num').innerHTML=pkt;
        document.getElementById('check').placeholder="DOBRZE"; 
    }
    else
        document.getElementById('check').placeholder="ŹLE"; 

    document.getElementById('check').focus();
}

function podp()
{
    if(nr<35)
    {
    document.getElementById('check').placeholder="";
    if(nr<12)
        document.getElementById('column1').innerHTML+=krol[nr]+"<br/>";
    else if(nr<23)
        document.getElementById('column2').innerHTML+=krol[nr]+"<br/>";
    else if(nr<=34)
    {
        document.getElementById('column3').innerHTML+=krol[nr]+"<br/>";
        if(nr==34)
            document.getElementById('write').innerHTML='KONIEC<br><input type="submit" value="Jeszcze raz" onclick="nowy()">';
    }
    nr++;
    }

    document.getElementById('check').focus();
}

function nowy()
{
    nr=0;
    pkt=0;
    document.getElementById('num').innerHTML=pkt;
    document.getElementById('column1').innerHTML="";
    document.getElementById('column2').innerHTML="";
    document.getElementById('column3').innerHTML="";
    document.getElementById('write').innerHTML='<input type="text" id="check"> <input type="submit" id="button" value="Sprawdź" onclick="sprawdz();"> <input type="submit" value="Podpowiedź" onclick="podp();">';
    document.getElementById('check').focus();
}