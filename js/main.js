(function ()
{
    var leftImg = document.querySelector('.news-left-img');
    var leftData = document.querySelectorAll('.news-left-data');
    var rightImg = document.querySelector('.news-right-img');
    var rightData = document.querySelectorAll('.news-right-data');
    var leftHeight = leftImg.offsetHeight;
    var rightHeight = rightImg.offsetHeight;

    setHeight(leftData, leftHeight);
    setHeight(rightData, rightHeight);

    window.onresize = function ()
    {
        leftHeight = leftImg.offsetHeight;
        rightHeight = rightImg.offsetHeight;
        setHeight(leftData, leftHeight);
        setHeight(rightData, rightHeight);
    };

    function setHeight(data, height)
    {
        if (height)
            height = height + 'px';
        else
            height = 'auto';
        [].forEach.call(data, function (item)
        {
            item.style.height = height;
        });
    }

    var menu = document.querySelector('.mobile-menu-list');
    menu.onclick = function (event)
    {
        var elem = event.target;
        if (elem.matches('.drop'))
            elem.previousElementSibling.classList.toggle('show');
    }
})();

// (function ()
// {
//     var data = document.querySelectorAll('.footer-item');
//     var maxHeigth = 0;
//     [].forEach.call(data, function (item)
//     {
//         if (maxHeigth < parseInt(item.offsetHeight))
//             maxHeigth = parseInt(item.offsetHeight);
//     });
//     [].forEach.call(data, function (item)
//     {
//         item.style.height = maxHeigth + 'px';
//     });
// })();

$(function ()
{
    $('.scrollup').click(function ()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
});
















