function ShowMenu (selection)
{
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    
    switch (selection)
    {
        case "Section 1":
            document.getElementById("section1").style.visibility = "visible";
            break;
        case "Section 2":
            document.getElementById("section2").style.visibility = "visible";
            break;
        case "None":
            break;
        default:
            alert("Please selece a different menu option");
    }
}
