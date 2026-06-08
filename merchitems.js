let merchArray = [
    {
        image : "url('css/media/Like\ Water\ Alt.jpeg')",
        text: 'Like Water (Getting Killed Edition) - CD',
        buttontext : 'Buy Now',
        pageurl : '/merchpages/LWGKCD/LWGKCD.html'
    },          
    {
        image : "url('css/media/Like\ Water.jpg')",
        text: 'Like Water - CD',
        buttontext : 'Buy Now',
        pageurl : '/merchpages/LWCD/LWCD.html'
    },
    {
        image : "url('css/media/Like\ Water.jpg')",
        text: 'Pana-vision Keychain',
        buttontext : 'Buy Now',
        pageurl : '/merchpages/LWGKCD/LWGKCD.html'
    },
    {
        image : "url('css/media/Like\ Water.jpg')",
        text: 'Pana-vision -"Pretty Houses 1" T Shirt',
        buttontext : 'Buy Now',
        pageurl : '/merchpages/LWGKCD/LWGKCD.html'
    },
    {
        image : "url('css/media/Like\ Water.jpg')",
        text: 'Brother i cant believe i got this working',
        buttontext : 'Buy Now',
        pageurl : '/merchpages/LWGKCD/LWGKCD.html'
    }
];

merchTable = document.getElementsByClassName('merchtable')[0];

for (i = 0; i < (merchArray.length); i = i + 1){

    x = document.createElement('div');
    y = document.createElement('div');
    z = document.createElement('a');
    z.href = merchArray[i].pageurl;
    t = document.createElement('p');
    t.innerText = merchArray[i].text;
    t.classList.add('merchtext');
    z.appendChild(t);
    v = document.createElement('div');
    w = document.createElement('a');
    w.href = "/message.html"
    b = document.createElement('button');
    b.innerText = 'Buy Now';
    w.appendChild(b);
    v.appendChild(w);
    x.appendChild(y);
    x.appendChild(z);
    x.appendChild(v);
    z.classList.add('merchlink');
    y.classList.add('merchphoto');
    x.classList.add('merchitem');
    y.style.backgroundImage = merchArray[i].image;
    merchTable.appendChild(x)
}
