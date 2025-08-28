function getElement(id){
    const elememt = document.getElementById(id);
    return elememt;
}

const clickHearts = document.getElementsByClassName('click-heart');
for (let clickHeart of clickHearts){
    clickHeart.addEventListener('click',function(){
        const heartCount = getElement('total-heart-count').innerText
        const curentHeartCount = Number(heartCount)+1;
        getElement('total-heart-count').innerText=curentHeartCount;
    })
}

document.getElementById('clear-btn').addEventListener('click',function(){
    const nweHistory = getElement('history-list');
    nweHistory.innerHTML="";
})

const callBtns = document.getElementsByClassName('call-btn');
for (let callBtn of callBtns){
    callBtn.addEventListener('click',function(){
        const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
        const cardNumber = callBtn.parentNode.parentNode.children[3].innerText;
        let now = new Date().toLocaleTimeString();

         // coine //
        const totalCoine = getElement('total-coine').innerText

        if(totalCoine < 20){
            alert("আপনার পর্যাপ্ত coin নেই! কল করতে ন্যূনতম 20 coin দরকার।");
            return;
        }
        const curentTotalCoine = Number(totalCoine)-20;
        getElement('total-coine').innerText=curentTotalCoine;

         const callHistory =getElement('history-list')
    const nweHistory = document.createElement('div');
    nweHistory.innerHTML=`
      <div class="h-20 w-60 ml-6 bg-gray-100 rounded-md pl-2 mb-2 flex justify-center items-center  ">
        <div class="">
            <h1 class="text-black font-semibold text-sm pb-1">${cardTitle}</h1>
            <p class="text-sm text-gray-500">${cardNumber}</p>
        </div>
        <div>
            <p class="text-sm text-black">${now}</p>
        </div>

      </div>
    
    `;
    callHistory.append(nweHistory)
    alert(`Calling ${cardTitle} at ${cardNumber}`);
    
    })
}

const copyBtns = document.getElementsByClassName('copy-btn');
for (let copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){
        const cardNumber = copyBtn.parentNode.parentNode.children[3].innerText
        navigator.clipboard.writeText(cardNumber).then(() => {
            alert(cardNumber + " copied to clipboard!");
        });
        const copyCount = getElement('copy-count').innerText
        const curentCopyCount = Number(copyCount)+1;
        getElement('copy-count').innerText=curentCopyCount;
        })
}