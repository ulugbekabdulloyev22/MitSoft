let a, b, c, d, USD, UZS; 

        a = Number(prompt("1 USD = 10 946,5 UZS"));
        b = Number(prompt("1 UZS = 0.0000914 USD"));

        c = a * 10946;
        d = b * 0.0000914;

        USD = alert(a + ' USD =' + c + ' UZS (so`m)' );
        UZS = alert(b + ' UZS =' + d + ' USD (dollor)' );