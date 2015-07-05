if(document.getElementsByClassName('logout-form').length > 0){
    var headerNav = document.getElementsByClassName('header-nav')[0];
    var li = document.createElement('li');
    li.setAttribute('class', 'header-nav-item');
    var link = document.createElement('a');
    link.setAttribute('class', 'header-nav-link');
    var linkText = document.createTextNode('Explore');
    link.appendChild(linkText);
    link.setAttribute('href', '/explore');
    li.appendChild(link);
    headerNav.insertBefore(li, headerNav.childNodes[0]);
}
