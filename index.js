var headingTop = document.getElementById('flower-above');
var headingBottom = document.getElementById('flower-below');

var pSpanTop = document.getElementById('flower-label-t');
var pSpanBottom = document.getElementById('flower-label-b');

var linkOne = document.getElementById('link-shift-top');
var linkTwo = document.getElementById('link-shift-below');

function starterPointTop() {
    headingTop.textContent = "ENRICHMENT FOR THE VISION";
    pSpanTop.textContent = "Keep of being notified";
    linkOne.textContent = "BLOGS"
    linkOne.setAttribute('href', 'blogs.html');
}

function starterPointBottom() {
    headingBottom.textContent = "OUR STORY OF THE ENTERPRISE";
    pSpanBottom.textContent = "They are belong here";
    linkTwo.textContent = "ABOUT US";
    linkTwo.setAttribute('href', 'story.html');
}


function flowingPhrase() {
    setTimeout(() => {
        headingBottom.classList.toggle('faded');
        pSpanBottom.classList.toggle('faded');
        linkTwo.classList.toggle('faded');
    
        setTimeout(() => {
            headingBottom.textContent = "THE STRENGTH FOR THE WISHES";
            pSpanBottom.textContent = "Prove the support";
            linkTwo.textContent = "CONTRIBUTE";
            linkTwo.setAttribute('href', 'donate.html');
            
            headingBottom.classList.toggle('faded');
            pSpanBottom.classList.toggle('faded');
            linkTwo.classList.toggle('faded');
        }, 500);
    }, 10000);

    setTimeout(() => {
        headingTop.classList.toggle('faded');
        pSpanTop.classList.toggle('faded');
        linkOne.classList.toggle('faded');
    
        setTimeout(() => {
            headingTop.textContent = "MASTER YOUR FAVOURED CURIOSITY";
            pSpanTop.textContent = "Join our community";
            linkOne.textContent = "SIGN UP"
            linkOne.setAttribute('href', 'sign-up-form.html');
            
            headingTop.classList.toggle('faded');
            pSpanTop.classList.toggle('faded');
            linkOne.classList.toggle('faded');
        }, 500);
    }, 20000);

    setTimeout(() => {
        headingBottom.classList.toggle('faded');
        pSpanBottom.classList.toggle('faded');
        linkTwo.classList.toggle('faded');

        setTimeout(() => {
            headingBottom.textContent = "PREMIUM CHESS CLUB'S SCHEME";
            pSpanBottom.textContent = "Behind the scene";
            linkTwo.textContent = "PROJECT";
            linkTwo.setAttribute('href', 'plans.html');
            
            headingBottom.classList.toggle('faded');
            pSpanBottom.classList.toggle('faded');
            linkTwo.classList.toggle('faded');
        }, 500);
    }, 30000);

    setTimeout(() => {
        headingTop.classList.toggle('faded');
        pSpanTop.classList.toggle('faded');
        linkOne.classList.toggle('faded');
    
        setTimeout(() => {
            // headingTop.textContent = "DISCOVER MORE THAN EVER";
            // pSpanTop.textContent = "Not just to learn";
            // linkOne.textContent = "RESOURCES"
            headingTop.textContent = "GIVE A FEEDBACK OR INQUIRY";
            pSpanTop.textContent = "Need an awareness?";
            linkOne.textContent = "REACH OUT";
            linkOne.setAttribute('href', 'contact.html');
            
            headingTop.classList.toggle('faded');
            pSpanTop.classList.toggle('faded');
            linkOne.classList.toggle('faded');
        }, 500);
    }, 40000);

    setTimeout(() => {
        headingBottom.classList.toggle('faded');
        pSpanBottom.classList.toggle('faded');
        linkTwo.classList.toggle('faded');

        setTimeout(() => {
            starterPointBottom()
            
            headingBottom.classList.toggle('faded');
            pSpanBottom.classList.toggle('faded');
            linkTwo.classList.toggle('faded');
        }, 500);
    }, 50000);

    setTimeout(() => {
        headingTop.classList.toggle('faded');
        pSpanTop.classList.toggle('faded');
        linkOne.classList.toggle('faded');
    
        setTimeout(() => {
            starterPointTop();
                
            headingTop.classList.toggle('faded');
            pSpanTop.classList.toggle('faded');
            linkOne.classList.toggle('faded');
        }, 500);
    }, 60000);
}

starterPointTop();
starterPointBottom()

flowingPhrase();
setInterval(flowingPhrase, 60000);
