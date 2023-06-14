let homeBtn = document.querySelector(".home-btn")
let chatBtn = document.querySelector(".chats-btn")
let storiesBtn = document.querySelector(".stories-btn")


let home = document.querySelector(".home")
let chats = document.querySelector(".chats-parent")
let stories = document.querySelector(".stories")
let storiesDot = document.querySelector(".stories-btn span")
let chatsNumber = document.querySelector(".chats-btn span")

chatBtn.addEventListener("click", () => {
    home.classList.add("left-100")
    chats.classList.add("left0")
    home.classList.remove("left0")
    stories.classList.add("left100")
    stories.classList.remove("left0")
    chatBtn.style.borderBottom = " 4px solid white "
    storiesBtn.style.borderBottom = " none "
    homeBtn.style.borderBottom = " none "
    chatsNumber.classList.add("disappear")
})
storiesBtn.addEventListener("click", () => {
    stories.classList.add("left0")
    home.classList.add("left-100")
    home.classList.remove("left0")
    chats.classList.add("left-100")
    chats.classList.remove("left0")
    stories.classList.remove("left100")
    storiesBtn.style.borderBottom = " 4px solid white "
    chatBtn.style.borderBottom = " none "
    homeBtn.style.borderBottom = " none "
    storiesDot.classList.add("disappear")
})
homeBtn.addEventListener("click", () => {
    home.classList.add("left0")
    home.classList.remove("left-100")
    chats.classList.remove("left0")
    chats.classList.add("left100")
    stories.classList.add("left100")
    stories.classList.remove("left0")
    // document.style.height = "200hv"
    homeBtn.style.borderBottom = " 4px solid white "
    chatBtn.style.borderBottom = " none "
    storiesBtn.style.borderBottom = " none "
})



let likeBtn = document.querySelectorAll(".first")

likeBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        btn.classList.add("first-clicked")
    })

})

let openCommentOne = document.querySelector(".post1")
let commentOne = document.querySelector(".comment1")
let goBackOne = document.querySelector(".go-back1")

openCommentOne.addEventListener("click", () => {
    commentOne.classList.add("appear")
    commentOne.classList.remove("disappear")
    
})

goBackOne.addEventListener("click", () => {
    commentOne.classList.add("disappear")
    commentOne.classList.remove("appear")
})
let commentFeild1 = document.querySelector(".write-comment1")
let commentSendBtn1 = document.querySelector(".comment-send-btn1")
let commentSide1 = document.querySelector(".comment-side1")
commentSendBtn1.addEventListener("click", () => {
   let commentDiv1 = document.createElement("div")
   let writtenComment1 = document.createTextNode(commentFeild1.value)
    let commentsP1 = document.createElement("p")
    let commentUser = document.createElement("div")
    let commentUsersName = document.createTextNode("Unloged in user")
    commentUser.classList.add("user")

    commentUser.appendChild(commentUsersName)
    commentDiv1.appendChild(commentUser)
   commentDiv1.appendChild(commentsP1)
   commentsP1.appendChild(writtenComment1)
    commentDiv1.classList.add("comment")
commentSide1.appendChild(commentDiv1)
commentFeild1.value = ""
})


////////////////////////////

    let openCommentTwo = document.querySelector(".post-2")
    let commentTwo = document.querySelector(".comment2")
    let goBackTwo = document.querySelector(".go-back2")
  
    openCommentTwo.addEventListener("click", () => {
        commentTwo.classList.add("appear")
        commentTwo.classList.remove("disappear")
        
    })
    
    goBackTwo.addEventListener("click", () => {
        commentTwo.classList.add("disappear")
        commentTwo.classList.remove("appear")
    })

    let commentFeild2 = document.querySelector(".write-comment2")
    let commentSendBtn2 = document.querySelector(".comment-send-btn2")
    let commentSide2 = document.querySelector(".comment-side2")
    commentSendBtn2.addEventListener("click", () => {
   let commentDiv2 = document.createElement("div")
   let writtenComment2 = document.createTextNode(commentFeild2.value)
    let commentsP2 = document.createElement("p")
    let commentUser = document.createElement("div")
    let commentUsersName = document.createTextNode("Unloged in user")
    commentUser.classList.add("user")

    commentUser.appendChild(commentUsersName)
    commentDiv2.appendChild(commentUser)
   commentDiv2.appendChild(commentsP2)
   commentsP2.appendChild(writtenComment2)
    commentDiv2.classList.add("comment")
    commentSide2.appendChild(commentDiv2)
    commentFeild2.value = ""
    

    let commented = document.querySelectorAll(".commented")
    commented.forEach((line) => {
        line.classList.add("disappear")
    })

    document.querySelector(".no-comments").classList.remove("no-comments")
})


////////////////////////////////////////
    
    let openCommentThree = document.querySelector(".post3")
    let commentThree = document.querySelector(".comment3")
    let goBackThree = document.querySelector(".go-back3")
    
    openCommentThree.addEventListener("click", () => {
        if (commentThree.className.includes("disappear")) {
            
            commentThree.classList.add("appear")
            commentThree.classList.remove("disappear")
        }else {
            commentThree.classList.add("appear")
            
        }
    })
    
    goBackThree.addEventListener("click", () => {
        commentThree.classList.add("disappear")
        commentThree.classList.remove("appear")
    })
    

    let commentFeild3 = document.querySelector(".write-comment3")
    let commentSendBtn3 = document.querySelector(".comment-send-btn3")
    let commentSide3 = document.querySelector(".comment-side3")
    commentSendBtn3.addEventListener("click", () => {
   let commentDiv3 = document.createElement("div")
   let writtenComment3 = document.createTextNode(commentFeild3.value)
    let commentsP3 = document.createElement("p")
    let commentUser = document.createElement("div")
    let commentUsersName = document.createTextNode("Unloged in user")
    commentUser.classList.add("user")

    commentUser.appendChild(commentUsersName)
    commentDiv3.appendChild(commentUser)
   commentDiv3.appendChild(commentsP3)
   commentsP3.appendChild(writtenComment3)
    commentDiv3.classList.add("comment")
commentSide3.appendChild(commentDiv3)
commentFeild3.value = ""
})



//////////////////////////////


let chatPanel1 = document.querySelector(".chat-panel-1")
let chatBtn1 = document.querySelector(".chat-btn-1")
let goBackChat1 = document.querySelector(".go-back-chat1")
let messageCount1 = document.querySelector(".message-count1")
chatBtn1.addEventListener("click", () => {
    if (chatPanel1.className.includes("disappear")) {
        chatPanel1.classList.remove("disappear")
        chatPanel1.classList.add("appear")
    } else {
        chatPanel1.classList.add("appear")
    }
})
chatBtn1.addEventListener("click", () => {
    messageCount1.style.display ="none"
    
})
goBackChat1.addEventListener("click", () => {
    if (chatPanel1.className.includes("appear")) {
        chatPanel1.classList.remove("appear")
        chatPanel1.classList.add("disappear")
    } else {
        chatPanel1.classList.add("disappear")
    }
})
///////
let inputFeild1 = document.querySelector(".text1")
let sendBtn1 = document.querySelector(".send-btn1")
let chatBody1 = document.querySelector(".body-chat1")
sendBtn1.addEventListener("click", () => {
   let sentDiv1 = document.createElement("div")
   let message1 = document.createTextNode(inputFeild1.value)
    let messagesP1 = document.createElement("p")
   sentDiv1.appendChild(messagesP1)
   messagesP1.appendChild(message1)
    sentDiv1.classList.add("sent")
chatBody1.appendChild(sentDiv1)
inputFeild1.value = ""
})






let chatPanel2 = document.querySelector(".chat-panel-2")
let chatBtn2 = document.querySelector(".chat-btn-2")
let goBackChat2 = document.querySelector(".go-back-chat2")
let messageCount2 = document.querySelector(".message-count2")
chatBtn2.addEventListener("click", () => {
    if (chatPanel2.className.includes("disappear")) {
        chatPanel2.classList.remove("disappear")
        chatPanel2.classList.add("appear")
    } else {
        chatPanel2.classList.add("appear")
    }
})
chatBtn2.addEventListener("click", () => {
    messageCount2.style.display ="none"
    
})
goBackChat2.addEventListener("click", () => {
    if (chatPanel2.className.includes("appear")) {
        chatPanel2.classList.remove("appear")
        chatPanel2.classList.add("disappear")
    } else {
        chatPanel2.classList.add("disappear")
    }
})
///////
let inputFeild2 = document.querySelector(".text2")
let sendBtn2 = document.querySelector(".send-btn2")
let chatBody2 = document.querySelector(".body-chat2")
sendBtn2.addEventListener("click", () => {
   let sentDiv2 = document.createElement("div")
   let message2 = document.createTextNode(inputFeild2.value)
    let messagesP2 = document.createElement("p")
   sentDiv2.appendChild(messagesP2)
   messagesP2.appendChild(message2)
    sentDiv2.classList.add("sent")
chatBody2.appendChild(sentDiv2)
inputFeild2.value = ""
})
//////////////////////////////////


let chatPanel3 = document.querySelector(".chat-panel-3")
let chatBtn3 = document.querySelector(".chat-btn-3")
let goBackChat3 = document.querySelector(".go-back-chat3")
let messageCount3 = document.querySelector(".message-count3")
chatBtn3.addEventListener("click", () => {
    if (chatPanel3.className.includes("disappear")) {
        chatPanel3.classList.remove("disappear")
        chatPanel3.classList.add("appear")
    } else {
        chatPanel3.classList.add("appear")
    }
})
chatBtn3.addEventListener("click", () => {
    messageCount3.style.display ="none"
    
})
goBackChat3.addEventListener("click", () => {
    if (chatPanel3.className.includes("appear")) {
        chatPanel3.classList.remove("appear")
        chatPanel3.classList.add("disappear")
    } else {
        chatPanel3.classList.add("disappear")
    }
})

let inputFeild3 = document.querySelector(".text3")
let sendBtn3 = document.querySelector(".send-btn3")
let chatBody3 = document.querySelector(".body-chat3")
sendBtn3.addEventListener("click", () => {
   let sentDiv3 = document.createElement("div")
   let message3= document.createTextNode(inputFeild3.value)
    let messagesP3 = document.createElement("p")
   sentDiv3.appendChild(messagesP3)
   messagesP3.appendChild(message3)
    sentDiv3.classList.add("sent")
chatBody3.appendChild(sentDiv3)
inputFeild3.value = ""
})
//////////////////////////////////

let chatPanel4 = document.querySelector(".chat-panel-4")
let chatBtn4 = document.querySelector(".chat-btn-4")
let goBackChat4 = document.querySelector(".go-back-chat4")
let messageCount4 = document.querySelector(".message-count4")
chatBtn4.addEventListener("click", () => {
    if (chatPanel4.className.includes("disappear")) {
        chatPanel4.classList.remove("disappear")
        chatPanel4.classList.add("appear")
        

    } else {
       
        chatPanel4.classList.add("appear")
    }
})
chatBtn4.addEventListener("click", () => {
    messageCount4.style.display ="none"
    
})


goBackChat4.addEventListener("click", () => {
    if (chatPanel4.className.includes("appear")) {
        chatPanel4.classList.remove("appear")
        chatPanel4.classList.add("disappear")
    } else {
        chatPanel4.classList.add("disappear")
    }
})

let inputFeild4 = document.querySelector(".text4")
let sendBtn4 = document.querySelector(".send-btn4")
let chatBody4 = document.querySelector(".body-chat4")
sendBtn4.addEventListener("click", () => {
   let sentDiv4 = document.createElement("div")
   let message4= document.createTextNode(inputFeild4.value)
    let messagesP4 = document.createElement("p")
   sentDiv4.appendChild(messagesP4)
   messagesP4.appendChild(message4)
    sentDiv4.classList.add("sent")
chatBody4.appendChild(sentDiv4)
inputFeild4.value = ""
})






///////////////////////
let chatPanel5 = document.querySelector(".chat-panel-5")
let chatBtn5 = document.querySelector(".chat-btn-5")
let goBackChat5 = document.querySelector(".go-back-chat5")
let messageCount5 = document.querySelector(".message-count5")
chatBtn5.addEventListener("click", () => {
    if (chatPanel5.className.includes("disappear")) {
        chatPanel5.classList.remove("disappear")
        chatPanel5.classList.add("appear")
    } else {
        chatPanel5.classList.add("appear")
    }
})
chatBtn5.addEventListener("click", () => {
    messageCount5.style.display ="none"
    
})
goBackChat5.addEventListener("click", () => {
    if (chatPanel5.className.includes("appear")) {
        chatPanel5.classList.remove("appear")
        chatPanel5.classList.add("disappear")
    } else {
        chatPanel5.classList.add("disappear")
    }
})

let inputFeild5 = document.querySelector(".text5")
let sendBtn5 = document.querySelector(".send-btn5")
let chatBody5= document.querySelector(".body-chat5")
sendBtn5.addEventListener("click", () => {
   let sentDiv5 = document.createElement("div")
   let message5= document.createTextNode(inputFeild5.value)
    let messagesP5 = document.createElement("p")
   sentDiv5.appendChild(messagesP5)
   messagesP5.appendChild(message5)
    sentDiv5.classList.add("sent")
    chatBody5.appendChild(sentDiv5)
    inputFeild5.value = ""
})



//////////////////////////////////////

let storyBorder1 = document.querySelector(".story1 .story-photo img")
let story1 = document.querySelector(".story1")

story1.addEventListener("click", () => {
    storyBorder1.style.border="6px solid gray"
})
/////


let storyBorder2 = document.querySelector(".story2 .story-photo img")
let story2 = document.querySelector(".story2")

story2.addEventListener("click", () => {
    storyBorder2.style.border="6px solid gray"
})
/////


let storyBorder3 = document.querySelector(".story3 .story-photo img")
let story3 = document.querySelector(".story3")

story3.addEventListener("click", () => {
    storyBorder3.style.border="6px solid gray"
})
/////




let storyContent1 = document.querySelector(".story-content1")
let storyBtn1 = document.querySelector(".story1")

storyBtn1.addEventListener("click", () => {
    if (storyContent1.className.includes("disappear")){
        storyContent1.classList.add("appear")
        storyContent1.classList.remove("disappear")
         setInterval(() => {
            storyContent1.classList.add("disappear")
        }, 10000);
    } else {
        storyContent1.classList.add("appear")
        storyContent1.classList.remove("disappear")
         setInterval(() => {
            storyContent1.classList.add("disappear")
        }, 10000);
    }
        
})


let storyContent2 = document.querySelector(".story-content2")
let storyBtn2 = document.querySelector(".story2")

storyBtn2.addEventListener("click", () => {
    if (storyContent2.className.includes("disappear")){
        storyContent2.classList.add("appear")
        storyContent2.classList.remove("disappear")
         setInterval(() => {
            storyContent2.classList.add("disappear")
        }, 10000);
    } else {
        storyContent2.classList.add("appear")
        storyContent2.classList.remove("disappear")
         setInterval(() => {
            storyContent2.classList.add("disappear")
        }, 10000);
    }
        
})

let storyContent3 = document.querySelector(".story-content3")
let storyBtn3 = document.querySelector(".story3")

storyBtn3.addEventListener("click", () => {
    if (storyContent3.className.includes("disappear")){
        storyContent3.classList.add("appear")
        storyContent3.classList.remove("disappear")
         setInterval(() => {
            storyContent3.classList.add("disappear")
        }, 10000);
    } else {
        storyContent3.classList.add("appear")
        storyContent3.classList.remove("disappear")
         setInterval(() => {
            storyContent3.classList.add("disappear")
        }, 10000);
    }
        
})

let storyBackground = document.querySelectorAll(".story-content")
storyBackground.forEach((story) => {
    story.addEventListener("click", () =>{

        if (story.className.includes("appear")){
            
            story.classList.remove("appear")
            story.classList.add("disappear")
        }else {
            story.classList.add("appear")
            
        }
    })
})

