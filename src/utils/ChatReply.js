export const Analyze = (text) =>{
    if(text.includes("hi") || text.includes("Hey")  || text.includes("hai")) 
        return `Hey! What's up`
    else if(text.includes("Who are you"))
        return `I'm bot` 
    else if(text.includes("How are you"))
        return `I'm fine` 
    else if(text.includes("How about you"))
        return `I'm Good`            
    else if(text.includes("Who are you"))
        return `I'm bot`
    else if(text.includes("interest"))
        return `Bank Interest rate 3.5%`
    else if(text.includes("youtube"))
        return `https://www.youtube.com/`         
    else if(text.includes("Thank you"))
        return `You're welcome! Have a nice day`         
    return `I can't get you rephrase the message`
}