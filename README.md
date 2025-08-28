

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    #. getElementById
     id দিয়ে ১ টি স্পেসিফিক HTML element খুঁজে আনে। id সবসময় ইউনিক হয়।

     #. getElementsByClassName
       একই class নামের সব element খুঁজে আনে।(array-এর মতো কিন্তু আসল array নয়)।
       অনেকগুলো element থাকতে পারে, তাই index দিয়ে access করতে হয়।

       #. querySelector
          প্রথম matching element খুঁজে আনে।

          #. querySelectorAll
             সব matching element খুঁজে আনে।


2. How do you **create and insert a new element into the DOM**?
    <script>
    // ধাপ ১: নতুন element তৈরি
    let newElement = document.createElement("p");

    // ধাপ ২: কনটেন্ট ও class যোগ
    newElement.innerText = "Hello! I am a new paragraph.";
    newElement.className = "highlight";

    // ধাপ ৩: parent container খুঁজে বের করা
    let container = document.getElementById("container");

    // ধাপ ৪: নতুন element DOM এ বসানো
    container.appendChild(newElement);
  </script>



3. What is **Event Bubbling** and how does it work?
   #. Event Bubbling-
    যখন কোনো child element-এ event ঘটে (যেমন click), তখন event প্রথমে সেই child element-এ ট্রিগার হয়,
     তারপর ধাপে ধাপে তার parent → grandparent → document → window পর্যন্ত উপরে উঠতে থাকে।
      এটাকেই Event Bubbling বলে।

      #.how does it work?
        const callBtns = document.getElementsByClassName('call-btn');
         for (let callBtn of callBtns){
         callBtn.addEventListener('click',function(){
          const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
           })
        }
4. What is **Event Delegation** in JavaScript? Why is it useful?
    #.Event Delegation
      প্রতিটি child element-এ আলাদা event listener বসানোর পরিবর্তে, 
       শুধু parent-এ একটি event listener বসানো কে  Event Delegation বলে। 

      #.Why is it useful?
       Performance ভালো হয় → হাজারো child element থাকলেও শুধু একটিই event listener লাগে।
        Code ছোট ও মেইনটেইন করা সহজ হয়।
5. What is the difference between **preventDefault() and stopPropagation()** methods?
      #. preventDefault()
        element-এর default behavior বন্ধ করে দেয়।
        event ট্রিগার হলেও element তার ডিফল্ট কাজ করবে না।

        #. stopPropagation()
         event উপরে bubble/capture হয়ে যাওয়া বন্ধ করে দেয়।
         event শুধু ওই element এ থেমে যাবে, আর parent element পর্যন্ত যাবে না।

---

