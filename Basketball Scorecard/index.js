let homeScore = 0
let teamScore = 0


function home1() {
    homeScore += 1
    document.getElementById("score-home").innerText = homeScore
}
function home2() {
    homeScore += 2
    document.getElementById("score-home").innerText = homeScore
}
function home3() {
    homeScore += 3
    document.getElementById("score-home").innerText = homeScore
}
function team1() {
    teamScore +=1
    document.getElementById("score-team").innerText = teamScore
}
function team2() {
    teamScore +=2
    document.getElementById("score-team").innerText = teamScore
}
function team3() {
    teamScore +=3
    document.getElementById("score-team").innerText = teamScore
}
function reset() {
    teamScore = 0
    homeScore = 0
    document.getElementById("score-team").innerText = 0
    document.getElementById("score-home").innerText = 0
}
