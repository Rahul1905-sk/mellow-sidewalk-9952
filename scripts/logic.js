

async function getData () {
let query = "jacket";
        let res = await fetch(`http://localhost:3000/data?q=${query}`,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        res = await res.json();
        console.log(res);

    }

    getData()