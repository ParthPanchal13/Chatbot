
var lp1 = document.querySelector('.lp1')
var lp2 = document.querySelector('.lp2')
var lp3 = document.querySelector('.lp3')
var general = document.querySelector('.general')
var bitrix = document.querySelector('.bitrix')
var live = document.querySelector('.live')
var onboard = document.querySelector('.onboard')
var workgroup = document.querySelector('.workgroup')
var postip = document.querySelector('.postip')

var messageArea = document.querySelector('.message__area')



lp1.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    lp1Question('incoming')
    scrollToBottom()
})

lp2.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    lp2Question('incoming')
    scrollToBottom()
})

lp3.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    lp3Question('incoming')
    scrollToBottom()

})
general.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    generalQuestion('incoming')
    scrollToBottom()
})

bitrix.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    bitrixQuestion('incoming')
    scrollToBottom()
})
live.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    liveQuestion('incoming')
    scrollToBottom()
})

onboard.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    onboardQuestion('incoming')
    scrollToBottom()
})

workgroup.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    workgroupQuestion('incoming')
    scrollToBottom()
})

postip.addEventListener('click', (e) => {
    sendMessage(e.target.textContent)
    postipQuestion('incoming')
    scrollToBottom()
})

// .............................div for initial questions........................................................................

function basic(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "LP1"
    var markup = `
        <h3>Hii How may I help you.Please select from the following options.</h3>
            <ol class = 'list'>
                <li><button class = "general"> General IP Queries</button></li>
                <li><button class="lp1"> Learning Path 1</button></li>
                <li><button class="lp2"> Learning Path 2</button></li>
                <li><button class="lp3"> Learning Path 3</button></li>
                <li><button class="bitrix"> Bitrix Queries</button></li>
                <li><button class="live"> Live Project</button></li>
                <li><button class="onboard"> Onboarding Queries</button></li>
                <li><button class="workgroup"> Workgroup Queries </button></li>
                <li><button class="postip"> Post Internship Queries</button></li>
            </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", e=>{
        if (e.target.classList.contains("lp1")){
            sendMessage(e.target.textContent);
            lp1Question(className)
        }

        if (e.target.classList.contains("general")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            generalQuestion(className);
            
        }

        if (e.target.classList.contains("lp2")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            lp2Question('incoming')
            
        }

        if (e.target.classList.contains("lp3")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            lp3Question('incoming')
        }

        if (e.target.classList.contains("bitrix")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            bitrixQuestion('incoming')
        }
        if (e.target.classList.contains("live")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            liveQuestion('incoming')
        }

        if (e.target.classList.contains("onboard")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            onboardQuestion('incoming')
        }

        if (e.target.classList.contains("workgroup")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            workgroupQuestion('incoming')
        }
        if (e.target.classList.contains("postip")){
            sendMessage(e.target.textContent);
            console.log(e.target.id);
            postipQuestion('incoming')
        }


        
        scrollToBottom()
    });


}

//.....................................................div for general questions.................................................
function generalQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "general"
    var markup = `
        <h3>General Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> Unable to access the quiz ? </button></li>
            <li><button id="2" class="${classname}"> Which Browser I should use ?</button></li>
            <li><button id="3" class="${classname}"> The web pages on mobile are not showing properly ?</button></li>
            <li><button id="4" class="${classname}"> One of my friends had applied for the IP but she didn't receive any further updates ?</button></li>
            <li><button id="5" class="${classname}"> I have opted for a blockchain internship, can I also learn about AI and do an internship in both ?</button></li>
            <li><button id="6" class="${classname}"> Will you provide mentorship or doubt clearing sessions in this internship ?</button></li>
            <li><button id="7" class="${classname}"> What to do when our university exams start ?</button></li>
            <li><button id="8" class="${classname}"> Is it okay to mention this internship as ongoing for college records ?</button></li>
            <li><button id="9" class="${classname}"> Can we do another internship with IP ?</button></li>
            <li><button id="10" class="${classname}"> I have not been added to the technology I preferred to work on ?</button></li>
            <li><button id="11" class="${classname}"> What are the company policies for IP interns ?</button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("general")){
            await sendMessage(e.target.textContent);
            
            await server(e.target.id,e.target.classList.value)
            await generalQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            scrollToBottom()
        }
        
        
    });


}


//...................................................................div for lp1 questions...........................................
function lp1Question(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    
    var markup = `
        <h3>Learning Path 1 Queries</h3>
        <ol class = 'list'>

            <li><button class="lp1login">LP1 Login Issues</button></li>
            <li><button class="others">others</button></li>
            
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", e=>{
        if (e.target.classList.contains("lp1login")){
            sendMessage(e.target.textContent);
            sublp1('incoming')
        }

        if (e.target.classList.contains("others")){
            sendMessage(e.target.textContent);
            lp1others('incoming')
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
        }
        
        scrollToBottom()
    });


}


///...............................................................sub div for lp1 login issues.........................................

function sublp1(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "lp1"
    var markup = `
        <h3>LP1 Login Issues</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> Not able to access the LP1 page with my token ?</button></li>
            <li><button id = "2" class="${classname}"> Login issues with training for every module of LP1/ LP2, do we have to register again for access to the content? </button></li>
            <li><button id = "3" class="${classname}"> I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?</button></li>
            <li><button id="4" class="${classname}"> I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task ?</button></li>
            <li><button id = "5" class="${classname}"> I tried it 3-4 times and have to enter token each time I visit it ? </button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("lp1")){
            await sendMessage(e.target.textContent); 
            await server(e.target.id,e.target.classList.value)
            await sublp1(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            lp1Question('incoming');
            
        }
        scrollToBottom()
        
    });


}

///.............................................sub div for lp1 options = others.................................................

function lp1others(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "others"
    var markup = `
        <h3>Other Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> Do I need to pass with the certificate in training ?</button></li>
            <li><button id="2" class="${classname}"> What do I do after completing the quiz? how to complete the entire lp1 ?</button></li>
            <li><button id="3" class="${classname}"> Do I need to register every time I do different tasks of lp1 ?</button></li>
            <li><button id="4" class="${classname}"> I have complete one training, I didn't find any options to continue my training ?</button></li>
            <li><button id="5" class="${classname}"> I am not getting results of the training ?</button></li>
            <li><button id="6" class="${classname}"> Unable to access the quiz  ?</button></li>
            <li><button id="7" class="${classname}"> I had press finished button of LP1 task but want to resume the task, how to do that ?</button></li>
            <li><button id="8" class="${classname}"> Can you help me by telling how can I get to know about my progress of LP 1 ?</button></li>
            <li><button id="9" class="${classname}"> Is it necessary to attend LP1 for other domains as well if we want to take its training ?</button></li>
            <li><button id="10" class="${classname}"> If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 "Cloud Computing" ?</button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("others")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await lp1others(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            lp1Question('incoming');
            scrollToBottom()
        }
        
        
    });


}

//...........................................................LP2.................................................//


function lp2Question(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "lp2"
    var markup = `
        <h3>Learning Path 2</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level ?</button></li>
            <li><button id="2" class="${classname}"> Why only this training for LP2 ?</button></li>
            <li><button id="3" class="${classname}"> Can I do certification for the training provided in LP2 ?</button></li>
            <li><button id="4" class="${classname}"> The videos of LP2 are taking too much time to load.?</button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("lp2")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await lp2Question(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            
        }
        scrollToBottom()
        
    });


}

//................................................................lp3.........................................................

function lp3Question(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "lp3"
    var markup = `
        <h3>Learning Path 3</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?</button></li>
            <li><button id="2" class="${classname}"> What to do after LP3? </button></li>
            <li><button id="3" class="${classname}"> Live Project/ LP3 has to be submitted individually or it will be a group project? </button></li>
            <li><button id="4" class="${classname}"> Where do we push the code in LP3? </button></li>
            <li><button id="5" class="${classname}"> I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this? </button></li>
            <li><button id="6" class="${classname}"> I have a query with respect to LP3, what should I do and whom should I ask?</button></li>
            <li><button id="7" class="${classname}"> Will these training be enough for us to complete the LP3?</button></li>
            <li><button id="8" class="${classname}"> For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it? </button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("lp3")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await lp3Question(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            scrollToBottom()
        }
        
        
    });


}

//.................................................bitrix.......................................................

function bitrixQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "bitrix"
    var markup = `
        <h3>Bitrix Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed? </button></li>
            <li><button id="2" class="${classname}"> What do we do in the work report?  </button></li>
            <li><button id="3" class="${classname}"> I m not able to access my Bitrix24 account? </button></li>
            <li><button id="4" class="${classname}"> How can we check our weekly hours? </button></li>
            <li><button id="5" class="${classname}"> By when will we receive access to Bitrix24</button></li>
            <li><button id="6" class="${classname}"> I am trying to complete social media tasks. I completed that day and clicked finish but it didn't show finished in the task menu. What should I do? </button></li>
            <li><button id="7" class="${classname}"> My Efficiency is 0% what should I do? </button></li>
            <li><button id="8" class="${classname}"> Is it necessary to clock-in if I am done with my tasks?  </button></li>
            <li><button id="9" class="${classname}"> I forgot to clock in for a few days, will this affect my internship?   </button></li>
            <li><button id="10" class="${classname}"> I have not got the acknowledgment from you regarding the weekly report ?  </button></li>
            <li><button id="11" class="${classname}"> In my work time I can see one exclamation mark?/ What does the remaining time mean ?   </button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("bitrix")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await bitrixQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            scrollToBottom()
        }
        
        
    });


}

//..............................................live projects...............................................................

function liveQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "live"
    var markup = `
        <h3>Live Projects Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?  </button></li>
            <li><button id="2" class="${classname}"> Live Project/ LP3 has to be submitted individually or it will be a group project?  </button></li>
            <li><button id="3" class="${classname}"> Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage? </button></li>
            <li><button id="4" class="${classname}"> Will Live Projects have only one technology or a mixture of technologies?  </button></li>
            <li><button id="5" class="${classname}"> Live project's use case will be provided or can we have our own use case? </button></li>
            <li><button id="6" class="${classname}"> I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this? </button></li>
            
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("live")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await liveQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            
        }
        
        scrollToBottom()
    });


}

///...................................................onboarding..............................................


function onboardQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "onboard"
    var markup = `
        <h3>Onboarding Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> I didn't get my appointment letter yet ?  </button></li>
            <li><button id="2" class="${classname}"> I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?   </button></li>
            <li><button id="3" class="${classname}"> I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them </button></li>
            <li><button id="4" class="${classname}"> Is the induction online or offline?   </button></li>
            <li><button id="5" class="${classname}"> When will we get a joining letter?  </button></li>
            <li><button id="6" class="${classname}"> Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college? </button></li>
            
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("onboard")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await onboardQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            
        }
        
        scrollToBottom()
    });


}

//............................................................workgroup.....................................................
function workgroupQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "workgroup"
    var markup = `
        <h3>Workgroup Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> Not able to see the task as not part of the IP workgroup?  </button></li>
            <li><button id="2" class="${classname}"> How many workgroups will an intern be a part of?/ How many workgroups should I be in?    </button></li>
            
            
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("workgroup")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await workgroupQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            
        }
        
        scrollToBottom()
    });


}

//....................................................post ip................................................
function postipQuestion(type){
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')
    var classname = "postip"
    var markup = `
        <h3>Post Internship Queries</h3>
        <ol class = 'list'>
            
            <li><button id="1" class="${classname}"> When will we get an internship completion letter?   </button></li>
            <li><button id="2" class="${classname}"> Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?    </button></li>
            <li><button id="3" class="${classname}"> Can we extend this internship?   </button></li>
            <li><button id="4" class="${classname}"> What to do after Live Projects? Are we getting an offer letter/Stipend?   </button></li>
            <li><button class="*"> Back </button></li>
        </ol>
        
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    

    mainDiv.addEventListener("click", async e=>{
        if (e.target.classList.contains("postip")){
            await sendMessage(e.target.textContent);
            await server(e.target.id,e.target.classList.value)
            await postipQuestion(className)
        }

        if(e.target.classList.contains("*")){
            sendMessage(e.target.textContent);
            basic('incoming');
            
        }
        
        scrollToBottom()
    });
}



function recieveMessage(messagerecieve) {
    var msg = messagerecieve;
    // Append 
    appendrecieveMessage(msg, 'incoming')
    
    scrollToBottom()

    // Send to server 
   

}

function appendrecieveMessage(msg, type) {
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')

    var markup = `
        
        <p>${msg}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}



function sendMessage(message) {
    var msg = {
        
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    
    scrollToBottom()

    // Send to server 
   

}

function appendMessage(msg, type) {
    var mainDiv = document.createElement('div')
    var className = type
    mainDiv.classList.add(className, 'message')

    var markup = `
        
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}

async function server(id,table){
    var id = id;
    var table = table;
    const data = { id, table};
    const options ={
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify(data)
    };
    const response = await fetch('/api',options);
    const json = await response.json();
    var result = json[0].answer
    recieveMessage(result)

}