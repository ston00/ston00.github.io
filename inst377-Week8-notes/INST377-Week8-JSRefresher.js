function testCode() {
    // Variables
    let var1 = 2;
    const var2 = 'word'
    const name = 'Anmol'
    console.log('Words....')

    // Referencing Variables
    const hi = "Hi " + name;
    console.log(hi)
    const text = `Hi this is a super long text variable and ther are a lot of words ${name} and there are many words aroudn it so I don't want ot use the + sign`
    console.log(text)

    // JSON
    fetch("https://inst377-lab4-server.vercel.app/api/product/all") // Getting an Array which is [] Brackets
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.forEach(element => {
            console.log(element) // Element is a JSON Object {}
            console.log(element.name)
            console.log(element['name'])
        });
    });

    fetch("https://api.frankfurter.app/currencies") // Getting a JSON Object which is {} Braces
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            for(const [key, value] of Object.entries(res)) {
                console.log('Key:', key)
                console.log('Value:', value)
            }
        });
    var somethingToChange = document.getElementById('somethingToChange')
    console.log('Something to Change', somethingToChange)
    somethingToChange.innerHTML = name
}

window.onload = testCode;