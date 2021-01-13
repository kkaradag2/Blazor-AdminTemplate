
function toggleSideBar() {

    var body = document.getElementById("mainBody");
    
    if (body.className === "app") {
        body.className = "app is-collapsed";
    } else {
        body.className = "app";
    }
}


function menuItem(elementId) {

    var li = document.getElementById(elementId);
    var lu = document.getElementById(elementId + "lu");
    if (li.className === "nav-item dropdown") {
        li.className = "nav-item dropdown open";
        lu.style = "display: block;"
        var siteBarMenu = document.getElementById("sidebarMenu");
        //pos-r ps ps--active-y
        siteBarMenu.className = "sidebar-menu scrollable pos-r ps"
    } else {
        li.className = "nav-item dropdown";
        lu.style = "display: none;"
    }

    


}