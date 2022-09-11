let a, b, c, d, f;

        a = Number(prompt("1/1"));
        b = Number(prompt("2/1"));

        c = Number(prompt("1/2"));
        d = Number(prompt("2/2"));

        document.getElementById("a1").innerHTML = a;
        document.getElementById("a2").innerHTML = b;
        
        document.getElementById("b1").innerHTML = c;
        document.getElementById("b2").innerHTML = d;

        f = a + b + c + d;
        // document.getElementById("f1").innerHTML = f;
        
        const juft = f % 2;
        if(juft <= 0) {
            document.getElementById("natija").innerHTML = "Yes";
        } 
        else(juft > 0) (
            document.getElementById("natija").innerHTML = "No"
        )