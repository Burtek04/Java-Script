

function sprawdz()
{


    var liczba = document.getElementById("pole").value;

if(liczba == 18)
{
    document.getElementById("wynik").innerHTML = "Masz 18 lat"

}
else if (150<liczba>18)
{
    document.getElementById("wynik").innerHTML = "Pełnoletni"
}
else if (liczba>=150)
{
    document.getElementById("wynik").innerHTML = "Prawdopodobnie nie żyjesz"
}
else
{
    document.getElementById("wynik").innerHTML = "Niepełnoletni"
}
}





function test() {
    var a = document.getElementById("wpis1").value*1;
    var b = document.getElementById("wpis2").value*1;
    var c = document.getElementById("wpis3").value*1;

    if((a>0) && (b>0) && (c>0))
    {


    if((a*a+b*b==c*c) || (c*c+b*b==a*a) || (c*c+a*a==b*b))
    {
        document.getElementById("wyniki").innerHTML = "z tych odcinkow mozna zrobic trojkat prostokatny"
    }
    else if ((a+b>c) && (a+c>b) && (c+b>a))
    {
        document.getElementById("wyniki").innerHTML = "z tych odcinkow mozna zrobic trojkat"
    }
    else
    {
        document.getElementById("wyniki").innerHTML = "z tych odcinkow nie mozna zrobic trojkata"
    }
}
else
{
    document.getElementById("wyniki").innerHTML = "wprowadzono bledne dane"
}

}