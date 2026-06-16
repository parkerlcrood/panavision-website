function makeArray(arrayIn, merchTable){
    for (i = 0; i < (arrayIn.length); i = i + 1){
        merchitem = document.createElement('div');
        merchphoto = document.createElement('div');
        merchlink = document.createElement('a');
        merchlink.href = arrayIn[i].pageurl;
        merchtext = document.createElement('p');
        merchtext.innerText = arrayIn[i].text;
        merchtext.classList.add('merchtext');
        merchlink.appendChild(merchtext);
        v = document.createElement('div');
        w = document.createElement('a');
        w.href = "/message.html"
        button = document.createElement('button');
        button.innerText = 'Add to Cart';
        w.appendChild(button);
        v.appendChild(w);
        merchitem.appendChild(merchphoto);
        merchitem.appendChild(merchlink);
        merchitem.appendChild(v);
        merchlink.classList.add('merchlink');
        merchphoto.classList.add('merchphoto');
        merchitem.classList.add('merchitem');
        merchphoto.style.backgroundImage = arrayIn[i].image;
        merchTable.appendChild(merchitem);
    }
}

async function getMerch() {

    let filteredArray = []
    
    try{

        const response = await fetch("./JSON/merchtable.json");
        let filtersearch = document.querySelector('.merchsearch');
        let sortbar = document.querySelector('.sortbar');
        let sortlist = document.querySelector('#sorting-options');

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const merchArray = await response.json(); 

        if (filtersearch.value){
            filteredArray = merchArray.filter((item) => {
                return item.text.toLowerCase().includes(filtersearch.value.toLowerCase());
            });
        }

        

        if (sortbar.value){
            switch (sortbar.value){
                case 'Funny Factor (Low to High)':
                    if (filteredArray.length>=1){
                        filteredArray = filteredArray.sort((a, b) => a.funny - b.funny);
                    } else {
                        filteredArray = merchArray.sort((a, b) => a.funny - b.funny);
                    }
                    break;
                case 'Alphabetical (A-Z)':
                    if (filteredArray.length>=1){
                        filteredArray = filteredArray.sort((a, b) => a.text.localeCompare(b.text));
                    } else {
                        filteredArray = merchArray.sort((a, b) => a.text.localeCompare(b.text));
                    }
                    break;
            }
        }

        merchTable = document.getElementsByClassName('merchtable')[0];
        merchTable.replaceChildren();

        if (filteredArray.length>=1){
            makeArray(filteredArray, merchTable);
        } else {
            makeArray(merchArray, merchTable);
        }

        filtersearch.addEventListener('keydown', getMerch);
        sortValue = sortbar.addEventListener('input', getMerch);
    }

    catch(error){
        console.error(error);
    }

}

getMerch();