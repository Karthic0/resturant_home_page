function roll(){
        let n = document.getElementById('input').value;
        let a = [];
        let x = [];
        let num;
        for(let i = 0;i<n;i++){
            num = Math.floor(Math.random()*6)+1;
            a.push(num);
            x.push(`<img src='dice/${num}.png'>`);
        }
        document.getElementById("p").textContent = a;
        document.getElementById("images").innerHTML = x.join(" ");
        console.log(a);
        console.log(x);
}









document.getElementById('button').onclick = roll;

