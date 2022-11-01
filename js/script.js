

function chkpwd(){
    var pwd=document.getElementById("floatingPassword").value
    var cpwd = document.getElementById("floatingCPassword").value
    console.log(pwd);
    console.log(cpwd);

    if(pwd != cpwd || pwd =="" )
    {
        document.getElementById("floatingPassword").classList.add("red")
        document.getElementById("floatingCPassword").classList.add("red")
    }
    else
    {
        

        document.getElementById("floatingPassword").classList.add("green")
        document.getElementById("floatingCPassword").classList.add("green")
        document.getElementById("floatingPassword").classList.remove("red")
        document.getElementById("floatingCPassword").classList.remove("red")
    }
}
