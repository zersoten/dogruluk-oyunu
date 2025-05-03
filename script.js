const questions = [
    "Hiç kimseye söylemediğin bir sırrın var mı?",
    "Hayatındaki en utanç verici an neydi?",
    "Birine gizlice aşık oldun mu?",
    "En son ne zaman ağladın ve neden?",
    "Şu ana kadar yaptığın en çılgınca şey neydi?",
    "Gerçekten affedemeyeceğin biri var mı?",
    "Kendinle ilgili değiştirmek istediğin bir şey var mı?",
    "Bugüne kadar yaptığın en büyük yalan nedir?",
    "İsmini duyunca kalbinin attığı biri var mı?",
    "Hayal ettiğin ama cesaret edemediğin bir şey var mı?"
];

document.getElementById("joinBtn").addEventListener("click", () => {
    document.getElementById("joinBtn").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    showRandomQuestion();
});

document.getElementById("submitBtn").addEventListener("click", () => {
    const answer = document.getElementById("answer").value;
    if (answer.trim()) {
        alert("Cevabınız alındı: " + answer);
        document.getElementById("answer").value = "";
        showRandomQuestion();
    }
});

function showRandomQuestion() {
    const q = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").textContent = q;
}
