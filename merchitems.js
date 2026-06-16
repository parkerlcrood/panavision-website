function makeArray(arrayIn, merchTable){
    for (i = 0; i < (arrayIn.length); i = i + 1){
        const merchitem = document.createElement('div');
        const merchphoto = document.createElement('div');
        const merchlink = document.createElement('a');
        merchlink.href = arrayIn[i].pageurl;
        const merchtext = document.createElement('p');
        merchtext.innerText = arrayIn[i].text;
        merchtext.classList.add('merchtext');
        merchlink.appendChild(merchtext);
        const v = document.createElement('div');
        const w = document.createElement('a');
        w.href = "/message.html"
        const button = document.createElement('button');
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
    }

    catch(error){
        console.error(error);
    }

}

const filtersearch = document.querySelector('.merchsearch');
const sortbar = document.querySelector('.sortbar');

filtersearch.addEventListener('keydown', getMerch);
sortbar.addEventListener('input', getMerch);

getMerch();