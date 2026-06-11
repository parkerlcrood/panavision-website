async function getMerch() {
    try{
        const response = await fetch("./JSON/merchtable.json");

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const merchArray = await response.json(); 
        merchTable = document.getElementsByClassName('merchtable')[0];

        for (i = 0; i < (merchArray.length); i = i + 1){
            merchitem = document.createElement('div');
            merchphoto = document.createElement('div');
            merchlink = document.createElement('a');
            merchlink.href = merchArray[i].pageurl;
            merchtext = document.createElement('p');
            merchtext.innerText = merchArray[i].text;
            merchtext.classList.add('merchtext');
            merchlink.appendChild(merchtext);
            v = document.createElement('div');
            w = document.createElement('a');
            w.href = "/message.html"
            button = document.createElement('button');
            button.innerText = 'Buy Now';
            w.appendChild(button);
            v.appendChild(w);
            merchitem.appendChild(merchphoto);
            merchitem.appendChild(merchlink);
            merchitem.appendChild(v);
            merchlink.classList.add('merchlink');
            merchphoto.classList.add('merchphoto');
            merchitem.classList.add('merchitem');
            merchphoto.style.backgroundImage = merchArray[i].image;
            merchTable.appendChild(merchitem);
        }
    }

    catch(error){
        console.error(error);
    }

}

getMerch();